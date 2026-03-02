import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Animated } from 'react-native';
import { colors, spacing, borderRadius, typography, fontFamily, shadows } from '../constants/theme';
import { formatCurrency } from '../utils/maternityCalculations';
import ResultsActions from './ResultsActions';
import useReducedMotion from '../hooks/useReducedMotion';

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

export default function ResultsDisplay({ results }) {
  const prefersReducedMotion = useReducedMotion();

  if (!results) return null;

  const { gross, deductions, net, paymentType, fte } = results;
  const isNHSEnhanced = paymentType === 'nhsEnhanced';

  let cardIndex = 0;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nativeID="results-printable"
    >
      {/* Net Take-Home Summary */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={true}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, styles.highlightCard]}
      >
        <Text style={styles.highlightCardTitle}>Your Take-Home Maternity Pay</Text>
        <Text style={styles.mainAmount}>{formatCurrency(net.total)}</Text>
        <Text style={styles.period}>
          Over {gross.breakdown.totalWeeks} week
          {gross.breakdown.totalWeeks !== 1 ? 's' : ''}
          {fte && fte < 1.0 && ` (${Math.round(fte * 37.5 * 10) / 10}h/week)`}
        </Text>

        <View style={styles.breakdownRow}>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Weekly</Text>
            <Text style={styles.breakdownAmount}>{formatCurrency(net.weekly)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownLabel}>Monthly</Text>
            <Text style={styles.breakdownAmount}>{formatCurrency(net.monthly)}</Text>
          </View>
        </View>
      </AnimatedCard>

      {/* Bank Shift Boost */}
      {results.bankShiftBoost && results.bankShiftBoost.boostAmount > 0 && (
        <AnimatedCard
          index={cardIndex++}
          isHighlight={false}
          prefersReducedMotion={prefersReducedMotion}
          style={[styles.card, styles.boostCard, shadows.md]}
        >
          <Text style={styles.boostTitle}>Bank Shift Boost</Text>
          <Text style={styles.boostAmount}>+{formatCurrency(results.bankShiftBoost.boostAmount)}</Text>
          <Text style={styles.boostDescription}>
            Extra {formatCurrency(results.bankShiftBoost.additionalWeeklyEarnings)}/week boosts your total take-home by{' '}
            <Text style={styles.boostBold}>{formatCurrency(results.bankShiftBoost.boostAmount)}</Text>
          </Text>
          <View style={styles.boostComparison}>
            <View style={styles.boostComparisonItem}>
              <Text style={styles.boostComparisonLabel}>Without extra shifts</Text>
              <Text style={styles.boostComparisonValue}>{formatCurrency(results.bankShiftBoost.baselineTotal)}</Text>
            </View>
            <Text style={styles.boostArrow}>{'\u2192'}</Text>
            <View style={styles.boostComparisonItem}>
              <Text style={styles.boostComparisonLabel}>With extra shifts</Text>
              <Text style={[styles.boostComparisonValue, styles.boostComparisonValueHighlight]}>{formatCurrency(net.total)}</Text>
            </View>
          </View>
        </AnimatedCard>
      )}

      {/* Results Actions */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
      >
        <ResultsActions results={results} />
      </AnimatedCard>

      {/* Gross Pay Breakdown */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, shadows.md]}
      >
        <Text style={styles.cardTitle}>Gross Maternity Pay</Text>
        <Text style={styles.amount}>{formatCurrency(gross.total)}</Text>

        <View style={styles.section}>
          {isNHSEnhanced ? (
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
      </AnimatedCard>

      {/* Deductions */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, shadows.md]}
      >
        <Text style={styles.cardTitle}>Deductions</Text>

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
      </AnimatedCard>

      {/* Additional Benefits Card */}
      {results.additionalBenefits && results.additionalBenefits.total > 0 && (
        <AnimatedCard
          index={cardIndex++}
          isHighlight={false}
          prefersReducedMotion={prefersReducedMotion}
          style={[styles.card, shadows.md]}
        >
          <Text style={styles.cardTitle}>Additional Benefits</Text>
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
        </AnimatedCard>
      )}

      {/* Warning Card for Unpaid Weeks */}
      {gross.breakdown.totalWeeks > 39 && (
        <AnimatedCard
          index={cardIndex++}
          isHighlight={false}
          prefersReducedMotion={prefersReducedMotion}
          style={[styles.card, styles.warningCard, shadows.sm]}
        >
          <Text style={styles.warningTitle}>Unpaid Leave Period</Text>
          <Text style={styles.warningText}>
            You've calculated for {gross.breakdown.totalWeeks} weeks of maternity
            leave. NHS Statutory Maternity Pay is only paid for the first 39 weeks.
            {'\n\n'}
            Weeks 40-{gross.breakdown.totalWeeks} would be unpaid leave, which is why
            your weekly and monthly averages may be lower than expected.
          </Text>
        </AnimatedCard>
      )}

      {/* Info Card */}
      <AnimatedCard
        index={cardIndex++}
        isHighlight={false}
        prefersReducedMotion={prefersReducedMotion}
        style={[styles.card, styles.infoCard]}
      >
        <Text style={styles.infoTitle}>About This Calculation</Text>
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
      </AnimatedCard>

      {/* Feedback Card */}
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
  mainAmount: {
    fontSize: 40,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.cardBackground,
    marginBottom: spacing.xs,
  },
  amount: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  period: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.cardBackground,
    opacity: 0.9,
    marginBottom: spacing.lg,
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
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.cardBackground,
    fontWeight: '600',
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
  infoCard: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  infoText: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  warningCard: {
    backgroundColor: colors.warningCardBg,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
  },
  warningTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  warningText: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  bottomSpacing: {
    height: spacing.xl,
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
  boostCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.sage,
  },
  boostTitle: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.sage,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  boostAmount: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.sage,
    marginBottom: spacing.sm,
  },
  boostDescription: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  boostBold: {
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  boostComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  boostComparisonItem: {
    alignItems: 'center',
    flex: 1,
  },
  boostComparisonLabel: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  boostComparisonValue: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  boostComparisonValueHighlight: {
    color: colors.sage,
  },
  boostArrow: {
    fontSize: 20,
    color: colors.sage,
    marginHorizontal: spacing.sm,
  },
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
});
