import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../constants/theme';
import { formatCurrency } from '../utils/maternityCalculations';

export default function ResultsDisplay({ results }) {
  if (!results) return null;

  const { gross, deductions, net, paymentType, fte } = results;
  const isNHSEnhanced = paymentType === 'nhsEnhanced';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Net Take-Home Summary */}
      <View style={[styles.card, styles.highlightCard]}>
        <Text style={styles.cardTitle}>Your Take-Home Maternity Pay</Text>
        <Text style={styles.mainAmount}>{formatCurrency(net.total)}</Text>
        <Text style={styles.period}>
          Over {gross.breakdown.totalWeeks} week
          {gross.breakdown.totalWeeks !== 1 ? 's' : ''}
          {fte && fte < 1.0 && ` (${fte} FTE)`}
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
      </View>

      {/* Gross Pay Breakdown */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gross Maternity Pay</Text>
        <Text style={styles.amount}>{formatCurrency(gross.total)}</Text>

        <View style={styles.section}>
          {isNHSEnhanced ? (
            // NHS Enhanced 3-phase breakdown
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
            // Standard SMP 2-phase breakdown
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

              {/* Only show standard rate section if there are weeks */}
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
      </View>

      {/* Deductions */}
      <View style={styles.card}>
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
      </View>

      {/* Additional Benefits Card */}
      {results.additionalBenefits && results.additionalBenefits.total > 0 && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Additional Benefits</Text>
          <Text style={styles.benefitSubtext}>
            Benefits you'll receive in addition to maternity pay
          </Text>

          <View style={styles.section}>
            {/* Holiday Accrual */}
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
                  {fte && fte < 1.0 && ` (${fte} FTE pro-rated)`}
                </Text>
              </>
            )}

            {/* KIT Days */}
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

            {/* Total Additional Benefits */}
            <View style={[styles.detailRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total Additional Value</Text>
              <Text style={[styles.totalValue, styles.benefitTotal]}>
                {formatCurrency(results.additionalBenefits.total)}
              </Text>
            </View>
          </View>
        </View>
      )}

      {/* Warning Card for Unpaid Weeks */}
      {gross.breakdown.totalWeeks > 39 && (
        <View style={[styles.card, styles.warningCard]}>
          <Text style={styles.warningTitle}>Unpaid Leave Period</Text>
          <Text style={styles.warningText}>
            You've calculated for {gross.breakdown.totalWeeks} weeks of maternity
            leave. NHS Statutory Maternity Pay is only paid for the first 39 weeks.
            {'\n\n'}
            Weeks 40-{gross.breakdown.totalWeeks} would be unpaid leave, which is why
            your weekly and monthly averages may be lower than expected.
          </Text>
        </View>
      )}

      {/* Info Card */}
      <View style={[styles.card, styles.infoCard]}>
        <Text style={styles.infoTitle}>About This Calculation</Text>
        <Text style={styles.infoText}>
          This calculator uses 2025/26 UK tax rates, National Insurance
          contributions, and {isNHSEnhanced ? 'NHS Enhanced (Agenda for Change)' : 'Statutory'} maternity pay rules.{'\n\n'}
          {isNHSEnhanced ? (
            <>
              NHS Enhanced Maternity Pay (Agenda for Change) is paid for up to 39 weeks:{'\n\n'}
              • First 8 weeks: 100% of full salary{'\n'}
              • Next 18 weeks: 50% of salary + £184.75 SMP per week{'\n'}
              • Final 13 weeks: £184.75 SMP per week only{'\n\n'}
            </>
          ) : gross.breakdown.totalWeeks === 39 ? (
            <>
              Statutory Maternity Pay (SMP) is paid for up to 39 weeks:{'\n\n'}
              • First 6 weeks: 90% of average weekly earnings{'\n'}
              • Next 33 weeks: £184.75 per week or 90% of average weekly earnings
              (whichever is lower){'\n\n'}
            </>
          ) : gross.breakdown.totalWeeks <= 6 ? (
            <>
              Your calculation is for {gross.breakdown.totalWeeks} week
              {gross.breakdown.totalWeeks !== 1 ? 's' : ''}, which falls entirely
              within the higher rate period:{'\n\n'}
              • All {gross.breakdown.totalWeeks} week
              {gross.breakdown.totalWeeks !== 1 ? 's' : ''}: 90% of average weekly
              earnings{'\n\n'}
            </>
          ) : (
            <>
              Your calculation is for {gross.breakdown.totalWeeks} weeks:{'\n\n'}
              • First {gross.breakdown.higherRate?.weeks || 0} weeks: 90% of average weekly
              earnings{'\n'}
              • Next {gross.breakdown.standardRate?.weeks || 0} weeks: £184.75 per week or
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
              Part-time Calculation ({fte} FTE):{'\n'}
              • Maternity pay is based on your actual annual salary{'\n'}
              • Holiday accrual is pro-rated to {fte} FTE{'\n'}
              • KIT days daily rate reflects your working pattern{'\n\n'}
            </>
          )}
          {results.additionalBenefits && results.additionalBenefits.total > 0 && (
            <>
              Additional Benefits:{'\n'}
              {results.additionalBenefits.holidayAccrual.value > 0 && (
                <>• Holiday accrual: You continue to accrue holiday during maternity leave at your normal rate{'\n'}</>
              )}
              {results.additionalBenefits.kitDays.pay > 0 && (
                <>• KIT days: Keeping in Touch days ({results.additionalBenefits.kitDays.days} included) are paid at your normal daily rate on top of maternity pay{'\n'}</>
              )}
              • These additional benefits are shown separately as they may have different tax treatment and payment timing{'\n\n'}
            </>
          )}
          Deductions are calculated based on your maternity pay income during the{' '}
          {gross.breakdown.totalWeeks}-week period.{'\n\n'}
          Last updated: 2025/26 tax year
        </Text>
      </View>

      {/* Feedback Card */}
      <View style={[styles.card, styles.feedbackCard]}>
        <Text style={styles.feedbackTitle}>Was this helpful?</Text>
        <Text style={styles.feedbackText}>
          Help us improve this calculator by sharing your feedback. Your input helps NHS staff plan their maternity leave with confidence.
        </Text>
        <TouchableOpacity
          style={styles.feedbackButton}
          onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSd38DVf5ZtRUsnQ_JXOJQFFHIvSRpZizy4toUm32VjzvAi7Mw/viewform')}
          activeOpacity={0.8}
        >
          <Text style={styles.feedbackButtonText}>Give Feedback</Text>
        </TouchableOpacity>
        <Text style={styles.feedbackNote}>
          Takes less than 2 minutes • Completely anonymous
        </Text>
      </View>

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  highlightCard: {
    backgroundColor: colors.primary,
  },
  cardTitle: {
    ...typography.subheading,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  mainAmount: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.cardBackground,
    marginBottom: spacing.xs,
  },
  amount: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  period: {
    ...typography.body,
    color: colors.cardBackground,
    opacity: 0.9,
    marginBottom: spacing.lg,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  breakdownLabel: {
    ...typography.small,
    color: colors.cardBackground,
    opacity: 0.8,
    marginBottom: spacing.xs,
  },
  breakdownAmount: {
    ...typography.subheading,
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
    color: colors.textPrimary,
  },
  detailValue: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  detailSubtext: {
    ...typography.small,
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
    color: colors.textPrimary,
    fontWeight: '600',
  },
  totalValue: {
    ...typography.subheading,
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
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  infoText: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  warningCard: {
    backgroundColor: '#FFF9F5',
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
  },
  warningTitle: {
    ...typography.subheading,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  warningText: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  bottomSpacing: {
    height: spacing.xl,
  },
  benefitSubtext: {
    ...typography.small,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
  benefitTotal: {
    color: '#7FD4A8', // Success green color
  },
  feedbackCard: {
    backgroundColor: '#F8F9FF',
    borderWidth: 1,
    borderColor: colors.primary,
    borderStyle: 'dashed',
  },
  feedbackTitle: {
    ...typography.subheading,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  feedbackText: {
    ...typography.body,
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
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  feedbackButtonText: {
    ...typography.subheading,
    color: colors.cardBackground,
    fontWeight: '600',
  },
  feedbackNote: {
    ...typography.small,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
    fontStyle: 'italic',
  },
});
