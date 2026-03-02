import React, { useRef, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Animated } from 'react-native';
import { colors, spacing, borderRadius, typography, fontFamily, shadows } from '../constants/theme';
import { formatCurrency } from '../utils/maternityCalculations';
import ResultsActions from './ResultsActions';
import useReducedMotion from '../hooks/useReducedMotion';
import { trackEvent } from '../utils/analytics';

const STAGGER_DELAY = 150;

function AnimatedCard({ index, isHighlight, prefersReducedMotion, children, style }) {
  const fadeAnim = useRef(new Animated.Value(prefersReducedMotion ? 1 : 0)).current;
  const slideAnim = useRef(new Animated.Value(prefersReducedMotion ? 0 : 30)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const delay = index * STAGGER_DELAY;

    const animations = [
      Animated.spring(fadeAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 60,
        friction: 9,
        delay,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 60,
        friction: 9,
        delay,
      }),
    ];

    // Highlight card gets a subtle bounce
    if (isHighlight) {
      animations.push(
        Animated.sequence([
          Animated.delay(delay + 300),
          Animated.spring(scaleAnim, {
            toValue: 1.03,
            useNativeDriver: true,
            tension: 120,
            friction: 6,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1.0,
            useNativeDriver: true,
            tension: 80,
            friction: 8,
          }),
        ])
      );
    }

    Animated.parallel(animations).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: isHighlight ? scaleAnim : 1 },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

const STANDARD_DURATIONS = [26, 39, 52];

export default function ResultsDisplay({ results, calculationInputs, onRecalculate }) {
  const prefersReducedMotion = useReducedMotion();
  const [payStructure, setPayStructure] = useState('standard');
  const [breakdownExpanded, setBreakdownExpanded] = useState(false);
  const [infoExpanded, setInfoExpanded] = useState(false);

  if (!results) return null;

  const { gross, deductions, net, paymentType, fte } = results;
  const isNHSEnhanced = paymentType === 'nhsEnhanced';
  const currentWeeks = calculationInputs ? calculationInputs.maternityWeeks : gross.breakdown.totalWeeks;

  // Duration pill options
  const durationOptions = useMemo(() => {
    const options = [...STANDARD_DURATIONS];
    if (currentWeeks && !options.includes(currentWeeks)) {
      options.push(currentWeeks);
      options.sort((a, b) => a - b);
    }
    return options;
  }, [currentWeeks]);

  // Bank shift boost monthly
  const bankShiftMonthlyBoost = useMemo(() => {
    if (!results.bankShiftBoost || results.bankShiftBoost.boostAmount <= 0) return 0;
    const totalMonths = gross.breakdown.totalWeeks / 52 * 12;
    return results.bankShiftBoost.boostAmount / totalMonths;
  }, [results.bankShiftBoost, gross.breakdown.totalWeeks]);

  // Month-by-month timeline
  const monthlyTimeline = useMemo(() => {
    const effectiveRate = gross.total > 0 ? (1 - deductions.total / gross.total) : 1;
    const totalWeeks = gross.breakdown.totalWeeks;
    const WEEKS_PER_MONTH = 52 / 12; // ~4.333

    // Build week-by-week gross amounts
    const weeklyGross = [];

    if (isNHSEnhanced) {
      if (payStructure === 'spread') {
        const weeklyAmount = gross.total / totalWeeks;
        for (let i = 0; i < totalWeeks; i++) {
          weeklyGross.push({ amount: weeklyAmount, phase: 'Spread equally' });
        }
      } else {
        const { fullPay, halfPayPlusSMP, smpOnly } = gross.breakdown;
        for (let i = 0; i < fullPay.weeks; i++) {
          weeklyGross.push({ amount: fullPay.weeklyAmount, phase: 'Full pay' });
        }
        for (let i = 0; i < halfPayPlusSMP.weeks; i++) {
          weeklyGross.push({ amount: halfPayPlusSMP.weeklyAmount, phase: '50%+SMP' });
        }
        for (let i = 0; i < smpOnly.weeks; i++) {
          weeklyGross.push({ amount: smpOnly.weeklyAmount, phase: 'SMP only' });
        }
      }
    } else {
      const { higherRate, standardRate } = gross.breakdown;
      for (let i = 0; i < higherRate.weeks; i++) {
        weeklyGross.push({ amount: higherRate.weeklyAmount, phase: '90% pay' });
      }
      for (let i = 0; i < standardRate.weeks; i++) {
        weeklyGross.push({ amount: standardRate.weeklyAmount, phase: 'Standard SMP' });
      }
    }

    // Pad unpaid weeks if totalWeeks > paid weeks
    while (weeklyGross.length < totalWeeks) {
      weeklyGross.push({ amount: 0, phase: 'Unpaid' });
    }

    // Map weeks to months
    const months = [];
    let weekIndex = 0;

    while (weekIndex < totalWeeks) {
      const monthNum = months.length + 1;
      const monthStart = weekIndex;
      const monthEnd = Math.min(weekIndex + WEEKS_PER_MONTH, totalWeeks);
      const fullWeeksInMonth = Math.floor(monthEnd) - Math.floor(monthStart);
      const fractionalWeek = monthEnd - Math.floor(monthEnd);

      let monthGross = 0;
      let dominantPhase = '';
      const phases = {};

      // Sum full weeks
      for (let w = Math.floor(monthStart); w < Math.floor(monthEnd) && w < weeklyGross.length; w++) {
        monthGross += weeklyGross[w].amount;
        phases[weeklyGross[w].phase] = (phases[weeklyGross[w].phase] || 0) + 1;
      }

      // Add fractional week
      if (fractionalWeek > 0 && Math.floor(monthEnd) < weeklyGross.length) {
        monthGross += weeklyGross[Math.floor(monthEnd)].amount * fractionalWeek;
        const phase = weeklyGross[Math.floor(monthEnd)].phase;
        phases[phase] = (phases[phase] || 0) + fractionalWeek;
      }

      // Find dominant phase
      let maxCount = 0;
      for (const [phase, count] of Object.entries(phases)) {
        if (count > maxCount) {
          maxCount = count;
          dominantPhase = phase;
        }
      }

      const netAmount = monthGross * effectiveRate;
      const isUnpaid = dominantPhase === 'Unpaid';

      months.push({
        month: monthNum,
        grossAmount: monthGross,
        netAmount,
        phase: dominantPhase,
        isUnpaid,
      });

      weekIndex = monthEnd;
    }

    return months;
  }, [gross, deductions, isNHSEnhanced, payStructure]);

  let cardIndex = 0;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nativeID="results-printable"
    >
      {/* 1. Hero Card — Monthly Take-Home */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={true}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, styles.highlightCard]}
      >
        <Text style={styles.highlightCardTitle}>Your Monthly Take-Home</Text>
        <Text style={styles.heroMonthlyAmount}>{formatCurrency(net.monthly)}</Text>
        <Text style={styles.heroPerMonth}>per month</Text>

        {bankShiftMonthlyBoost > 0 && (
          <Text style={styles.bankShiftAnnotation}>
            Includes +{formatCurrency(bankShiftMonthlyBoost)}/mo from bank shifts
          </Text>
        )}

        <View style={styles.breakdownRow}>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Total</Text>
            <Text style={styles.breakdownAmount}>
              {formatCurrency(net.total)} over {gross.breakdown.totalWeeks}wks
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Weekly</Text>
            <Text style={styles.breakdownAmount}>{formatCurrency(net.weekly)}</Text>
          </View>
        </View>
      </AnimatedCard>

      {/* 2. Duration Adjuster */}
      {calculationInputs && onRecalculate && (
        <AnimatedCard
          index={cardIndex++}
          isHighlight={false}
          prefersReducedMotion={prefersReducedMotion}
          style={[styles.card, shadows.md]}
        >
          <Text style={styles.cardTitle}>Adjust Duration</Text>
          <View style={styles.durationPillRow}>
            {durationOptions.map((weeks) => {
              const isActive = weeks === currentWeeks;
              const isCustom = !STANDARD_DURATIONS.includes(weeks);
              return (
                <TouchableOpacity
                  key={weeks}
                  style={[styles.durationPill, isActive && styles.durationPillActive]}
                  onPress={() => {
                    if (weeks !== currentWeeks) {
                      trackEvent('duration_changed', { weeks });
                      onRecalculate({ maternityWeeks: weeks });
                    }
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.durationPillText, isActive && styles.durationPillTextActive]}>
                    {weeks} weeks{isCustom ? ' (custom)' : ''}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </AnimatedCard>
      )}

      {/* 3. Month-by-Month Timeline */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, shadows.md]}
      >
        <Text style={styles.cardTitle}>What You'll Take Home Each Month</Text>

        {isNHSEnhanced && (
          <View style={styles.structureToggleRow}>
            <TouchableOpacity
              style={[styles.structureToggle, payStructure === 'standard' && styles.structureToggleActive]}
              onPress={() => setPayStructure('standard')}
              activeOpacity={0.7}
            >
              <Text style={[styles.structureToggleText, payStructure === 'standard' && styles.structureToggleTextActive]}>
                Standard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.structureToggle, payStructure === 'spread' && styles.structureToggleActive]}
              onPress={() => setPayStructure('spread')}
              activeOpacity={0.7}
            >
              <Text style={[styles.structureToggleText, payStructure === 'spread' && styles.structureToggleTextActive]}>
                Spread Equally
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.section}>
          {monthlyTimeline.map((month, i) => {
            const prevMonth = i > 0 ? monthlyTimeline[i - 1] : null;
            const phaseChanged = prevMonth && prevMonth.phase !== month.phase;

            return (
              <View key={month.month}>
                {phaseChanged && <View style={styles.phaseDivider} />}
                <View style={[styles.timelineRow, month.isUnpaid && styles.timelineRowUnpaid]}>
                  <Text style={[styles.timelineMonth, month.isUnpaid && styles.timelineTextUnpaid]}>
                    Month {month.month}
                  </Text>
                  <Text style={[styles.timelineAmount, month.isUnpaid && styles.timelineTextUnpaid]}>
                    {month.isUnpaid ? '\u00A30.00' : formatCurrency(month.netAmount)}
                  </Text>
                  <Text style={[styles.timelinePhase, month.isUnpaid && styles.timelineTextUnpaid]}>
                    {month.phase}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.timelineDisclaimer}>
          Net amounts are approximate — actual monthly deductions may vary slightly
        </Text>
      </AnimatedCard>

      {/* 4. Collapsible Full Breakdown */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
      >
        <TouchableOpacity
          style={styles.collapseToggle}
          onPress={() => {
            if (!breakdownExpanded) trackEvent('breakdown_expanded');
            setBreakdownExpanded(!breakdownExpanded);
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.collapseToggleText}>
            {breakdownExpanded ? 'Hide' : 'View'} Full Breakdown {breakdownExpanded ? '\u25B2' : '\u25BC'}
          </Text>
        </TouchableOpacity>

        {breakdownExpanded && (
          <View style={[styles.card, shadows.md, { marginTop: spacing.sm }]}>
            {/* Gross Pay Section */}
            <Text style={styles.breakdownSectionTitle}>Gross Maternity Pay</Text>
            <Text style={styles.amount}>{formatCurrency(gross.total)}</Text>

            <View style={styles.section}>
              {isNHSEnhanced ? (
                payStructure === 'spread' ? (
                  <>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>
                        All {gross.breakdown.totalWeeks} week{gross.breakdown.totalWeeks !== 1 ? 's' : ''} (equal pay)
                      </Text>
                      <Text style={styles.detailValue}>
                        {formatCurrency(gross.total)}
                      </Text>
                    </View>
                    <Text style={styles.detailSubtext}>
                      {formatCurrency(gross.total / gross.breakdown.totalWeeks)} per week
                    </Text>
                  </>
                ) : (
                  <>
                    {gross.breakdown.fullPay.weeks > 0 && (
                      <>
                        <View style={styles.detailRow}>
                          <Text style={styles.detailLabel}>
                            First {gross.breakdown.fullPay.weeks} week
                            {gross.breakdown.fullPay.weeks !== 1 ? 's' : ''} (100% full pay)
                          </Text>
                          <Text style={styles.detailValue}>
                            {formatCurrency(gross.breakdown.fullPay.totalGross)}
                          </Text>
                        </View>
                        <Text style={styles.detailSubtext}>
                          {formatCurrency(gross.breakdown.fullPay.weeklyAmount)} per week
                        </Text>
                      </>
                    )}

                    {gross.breakdown.halfPayPlusSMP.weeks > 0 && (
                      <>
                        <View style={[styles.detailRow, { marginTop: spacing.md }]}>
                          <Text style={styles.detailLabel}>
                            Next {gross.breakdown.halfPayPlusSMP.weeks} week
                            {gross.breakdown.halfPayPlusSMP.weeks !== 1 ? 's' : ''} (50% + SMP)
                          </Text>
                          <Text style={styles.detailValue}>
                            {formatCurrency(gross.breakdown.halfPayPlusSMP.totalGross)}
                          </Text>
                        </View>
                        <Text style={styles.detailSubtext}>
                          {formatCurrency(gross.breakdown.halfPayPlusSMP.weeklyAmount)} per week
                        </Text>
                      </>
                    )}

                    {gross.breakdown.smpOnly.weeks > 0 && (
                      <>
                        <View style={[styles.detailRow, { marginTop: spacing.md }]}>
                          <Text style={styles.detailLabel}>
                            Final {gross.breakdown.smpOnly.weeks} week
                            {gross.breakdown.smpOnly.weeks !== 1 ? 's' : ''} (SMP only)
                          </Text>
                          <Text style={styles.detailValue}>
                            {formatCurrency(gross.breakdown.smpOnly.totalGross)}
                          </Text>
                        </View>
                        <Text style={styles.detailSubtext}>
                          {formatCurrency(gross.breakdown.smpOnly.weeklyAmount)} per week
                        </Text>
                      </>
                    )}
                  </>
                )
              ) : (
                <>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>
                      First {gross.breakdown.higherRate.weeks} week
                      {gross.breakdown.higherRate.weeks !== 1 ? 's' : ''} (90%)
                    </Text>
                    <Text style={styles.detailValue}>
                      {formatCurrency(gross.breakdown.higherRate.totalGross)}
                    </Text>
                  </View>
                  <Text style={styles.detailSubtext}>
                    {formatCurrency(gross.breakdown.higherRate.weeklyAmount)} per week
                  </Text>

                  {gross.breakdown.standardRate.weeks > 0 && (
                    <>
                      <View style={[styles.detailRow, { marginTop: spacing.md }]}>
                        <Text style={styles.detailLabel}>
                          Next {gross.breakdown.standardRate.weeks} week
                          {gross.breakdown.standardRate.weeks !== 1 ? 's' : ''}
                        </Text>
                        <Text style={styles.detailValue}>
                          {formatCurrency(gross.breakdown.standardRate.totalGross)}
                        </Text>
                      </View>
                      <Text style={styles.detailSubtext}>
                        {formatCurrency(gross.breakdown.standardRate.weeklyAmount)} per week
                      </Text>
                    </>
                  )}
                </>
              )}
            </View>

            {/* Divider */}
            <View style={styles.sectionDivider} />

            {/* Deductions Section */}
            <Text style={styles.breakdownSectionTitle}>Deductions</Text>

            <View style={styles.section}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Income Tax</Text>
                <Text style={styles.detailValue}>
                  {formatCurrency(deductions.incomeTax)}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>National Insurance</Text>
                <Text style={styles.detailValue}>
                  {formatCurrency(deductions.nationalInsurance)}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>
                  Pension ({results.pensionPercentage}%)
                </Text>
                <Text style={styles.detailValue}>
                  {formatCurrency(deductions.pensionContributions)}
                </Text>
              </View>

              <View style={[styles.detailRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total Deductions</Text>
                <Text style={styles.totalValue}>
                  {formatCurrency(deductions.total)}
                </Text>
              </View>
            </View>

            {/* Additional Benefits Section (if applicable) */}
            {results.additionalBenefits && results.additionalBenefits.total > 0 && (
              <>
                <View style={styles.sectionDivider} />

                <Text style={styles.breakdownSectionTitle}>Additional Benefits</Text>
                <Text style={styles.benefitSubtext}>
                  Benefits you'll receive in addition to maternity pay
                </Text>

                <View style={styles.section}>
                  {results.additionalBenefits.holidayAccrual.value > 0 && (
                    <>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Holiday Accrual</Text>
                        <Text style={styles.detailValue}>
                          {formatCurrency(results.additionalBenefits.holidayAccrual.value)}
                        </Text>
                      </View>
                      <Text style={styles.detailSubtext}>
                        {results.additionalBenefits.holidayAccrual.daysAccrued.toFixed(1)} days accrued during maternity leave
                        {fte && fte < 1.0 && ` (${Math.round(fte * 37.5 * 10) / 10}h/week pro-rated)`}
                      </Text>
                    </>
                  )}

                  {results.additionalBenefits.kitDays.pay > 0 && (
                    <>
                      <View style={[styles.detailRow, results.additionalBenefits.holidayAccrual.value > 0 && { marginTop: spacing.md }]}>
                        <Text style={styles.detailLabel}>KIT Days Pay (if worked)</Text>
                        <Text style={styles.detailValue}>
                          {formatCurrency(results.additionalBenefits.kitDays.pay)}
                        </Text>
                      </View>
                      <Text style={styles.detailSubtext}>
                        {results.additionalBenefits.kitDays.days} Keeping in Touch day{results.additionalBenefits.kitDays.days !== 1 ? 's' : ''} at normal daily rate
                      </Text>
                    </>
                  )}

                  <View style={[styles.detailRow, styles.totalRow]}>
                    <Text style={styles.totalLabel}>Total Additional Value</Text>
                    <Text style={[styles.totalValue, styles.benefitTotal]}>
                      {formatCurrency(results.additionalBenefits.total)}
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        )}
      </AnimatedCard>

      {/* 5. Actions (Download/Copy) — demoted */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
      >
        <ResultsActions results={results} payStructure={payStructure} />
      </AnimatedCard>

      {/* 6. Info Card — collapsible */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, styles.infoCard]}
      >
        <TouchableOpacity
          onPress={() => setInfoExpanded(!infoExpanded)}
          activeOpacity={0.7}
          style={styles.infoToggle}
        >
          <Text style={styles.infoTitle}>
            About This Calculation {infoExpanded ? '\u25B2' : '\u25BC'}
          </Text>
        </TouchableOpacity>

        {infoExpanded && (
          <Text style={styles.infoText}>
            This calculator uses 2025/26 UK tax rates, National Insurance
            contributions, and {isNHSEnhanced ? 'NHS Enhanced (Agenda for Change)' : 'Statutory'} maternity pay rules.{'\n\n'}
            {isNHSEnhanced ? (
              <>
                NHS Enhanced Maternity Pay (Agenda for Change) is paid for up to 39 weeks:{'\n\n'}
                {'\u2022'} First 8 weeks: 100% of full salary{'\n'}
                {'\u2022'} Next 18 weeks: 50% of salary + {'\u00A3'}184.75 SMP per week{'\n'}
                {'\u2022'} Final 13 weeks: {'\u00A3'}184.75 SMP per week only{'\n\n'}
              </>
            ) : gross.breakdown.totalWeeks === 39 ? (
              <>
                Statutory Maternity Pay (SMP) is paid for up to 39 weeks:{'\n\n'}
                {'\u2022'} First 6 weeks: 90% of average weekly earnings{'\n'}
                {'\u2022'} Next 33 weeks: {'\u00A3'}184.75 per week or 90% of average weekly earnings
                (whichever is lower){'\n\n'}
              </>
            ) : gross.breakdown.totalWeeks <= 6 ? (
              <>
                Your calculation is for {gross.breakdown.totalWeeks} week
                {gross.breakdown.totalWeeks !== 1 ? 's' : ''}, which falls entirely
                within the higher rate period:{'\n\n'}
                {'\u2022'} All {gross.breakdown.totalWeeks} week
                {gross.breakdown.totalWeeks !== 1 ? 's' : ''}: 90% of average weekly
                earnings{'\n\n'}
              </>
            ) : (
              <>
                Your calculation is for {gross.breakdown.totalWeeks} weeks:{'\n\n'}
                {'\u2022'} First {gross.breakdown.higherRate?.weeks || 0} weeks: 90% of average weekly
                earnings{'\n'}
                {'\u2022'} Next {gross.breakdown.standardRate?.weeks || 0} weeks: {'\u00A3'}184.75 per week or
                90% of average weekly earnings (whichever is lower){'\n\n'}
              </>
            )}
            {gross.breakdown.totalWeeks > 39 && (
              <>
                Note: {isNHSEnhanced ? 'NHS Enhanced' : 'Statutory'} Maternity Pay is only paid for the first 39 weeks.
                Weeks 40-{gross.breakdown.totalWeeks} would be unpaid leave.{'\n\n'}
              </>
            )}
            {fte && fte < 1.0 && (
              <>
                Part-time Calculation ({Math.round(fte * 37.5 * 10) / 10}h/week):{'\n'}
                {'\u2022'} Maternity pay is based on your actual annual salary{'\n'}
                {'\u2022'} Holiday accrual is pro-rated to {Math.round(fte * 37.5 * 10) / 10}h/week{'\n'}
                {'\u2022'} KIT days daily rate reflects your working pattern{'\n\n'}
              </>
            )}
            {results.additionalBenefits && results.additionalBenefits.total > 0 && (
              <>
                Additional Benefits:{'\n'}
                {results.additionalBenefits.holidayAccrual.value > 0 && (
                  <>{'\u2022'} Holiday accrual: You continue to accrue holiday during maternity leave at your normal rate{'\n'}</>
                )}
                {results.additionalBenefits.kitDays.pay > 0 && (
                  <>{'\u2022'} KIT days: Keeping in Touch days ({results.additionalBenefits.kitDays.days} included) are paid at your normal daily rate on top of maternity pay{'\n'}</>
                )}
                {'\u2022'} These additional benefits are shown separately as they may have different tax treatment and payment timing{'\n\n'}
              </>
            )}
            {results.bankShiftBoost && results.bankShiftBoost.boostAmount > 0 && (
              <>
                Bank Shift & Overtime Boost:{'\n'}
                {'\u2022'} Additional weekly earnings of {formatCurrency(results.bankShiftBoost.additionalWeeklyEarnings)} included in average weekly earnings{'\n'}
                {'\u2022'} This increases your AWE from {formatCurrency(gross.breakdown.averageWeeklyEarnings - results.bankShiftBoost.additionalWeeklyEarnings)} to {formatCurrency(gross.breakdown.averageWeeklyEarnings)}{'\n'}
                {'\u2022'} Only earnings paid through your Trust's payroll count — NHSP or agency shifts may not be included{'\n\n'}
              </>
            )}
            Deductions are calculated based on your maternity pay income during the{' '}
            {gross.breakdown.totalWeeks}-week period.{'\n\n'}
            Last updated: 2025/26 tax year
          </Text>
        )}
      </AnimatedCard>

      {/* 7. Feedback Card — unchanged */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, styles.feedbackCard]}
      >
        <Text style={styles.feedbackTitle}>Was this helpful?</Text>
        <Text style={styles.feedbackText}>
          Help us improve this calculator by sharing your feedback. Your input helps NHS staff plan their maternity leave with confidence.
        </Text>
        <TouchableOpacity
          style={[styles.feedbackButton, shadows.primary]}
          onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSd38DVf5ZtRUsnQ_JXOJQFFHIvSRpZizy4toUm32VjzvAi7Mw/viewform')}
          activeOpacity={0.8}
        >
          <Text style={styles.feedbackButtonText}>Give Feedback</Text>
        </TouchableOpacity>
        <Text style={styles.feedbackNote}>
          Takes less than 2 minutes {'\u2022'} Completely anonymous
        </Text>
      </AnimatedCard>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  highlightCard: {
    backgroundColor: colors.primaryDark,
  },
  highlightCardTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.medium,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: spacing.sm,
  },
  cardTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.medium,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  // Hero monthly styles
  heroMonthlyAmount: {
    fontSize: 48,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.cardBackground,
    marginBottom: spacing.xs,
  },
  heroPerMonth: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: spacing.sm,
  },
  bankShiftAnnotation: {
    ...typography.small,
    fontFamily: fontFamily.medium,
    color: colors.sageLight,
    marginBottom: spacing.md,
  },
  amount: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  breakdownItem: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  breakdownLabel: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.cardBackground,
    opacity: 0.8,
    marginBottom: spacing.xs,
  },
  breakdownAmount: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    color: colors.cardBackground,
    fontWeight: '600',
  },
  // Duration Adjuster
  durationPillRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    flexWrap: 'wrap',
  },
  durationPill: {
    flex: 1,
    minWidth: 80,
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationPillActive: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  durationPillText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  durationPillTextActive: {
    color: colors.primaryDark,
  },
  // Structure toggle (Standard/Spread)
  structureToggleRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  structureToggle: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  structureToggleActive: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  structureToggleText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  structureToggleTextActive: {
    color: colors.primaryDark,
  },
  // Timeline styles
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  timelineRowUnpaid: {
    backgroundColor: colors.warningCardBg,
  },
  timelineMonth: {
    ...typography.body,
    fontFamily: fontFamily.medium,
    color: colors.textPrimary,
    width: 80,
  },
  timelineAmount: {
    ...typography.body,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
    marginRight: spacing.md,
  },
  timelinePhase: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    width: 100,
    textAlign: 'right',
  },
  timelineTextUnpaid: {
    color: colors.warning,
  },
  phaseDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.xs,
    marginHorizontal: spacing.sm,
  },
  timelineDisclaimer: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: spacing.md,
    textAlign: 'center',
  },
  // Collapsible toggle
  collapseToggle: {
    alignItems: 'center',
    paddingVertical: spacing.sm + 4,
  },
  collapseToggleText: {
    ...typography.body,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    fontWeight: '600',
  },
  // Breakdown section styles
  breakdownSectionTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  section: {
    marginTop: spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  detailLabel: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textPrimary,
  },
  detailValue: {
    ...typography.body,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  detailSubtext: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  totalRow: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 2,
    borderTopColor: colors.border,
  },
  totalLabel: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  totalValue: {
    ...typography.subheading,
    fontFamily: fontFamily.bold,
    color: colors.accent,
    fontWeight: '700',
  },
  benefitSubtext: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
  benefitTotal: {
    color: colors.sage,
  },
  // Info card
  infoCard: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoToggle: {
    paddingVertical: spacing.xs,
  },
  infoTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  infoText: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 24,
    marginTop: spacing.sm,
  },
  // Feedback card
  feedbackCard: {
    backgroundColor: colors.feedbackCardBg,
    borderWidth: 1,
    borderColor: colors.primary,
    borderStyle: 'dashed',
  },
  feedbackTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  feedbackText: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  feedbackButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  feedbackButtonText: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.cardBackground,
    fontWeight: '600',
  },
  feedbackNote: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
    fontStyle: 'italic',
  },
  bottomSpacing: {
    height: spacing.xl,
  },
});
