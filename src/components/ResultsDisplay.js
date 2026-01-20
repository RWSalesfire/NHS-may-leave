import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../constants/theme';
import { formatCurrency } from '../utils/maternityCalculations';

export default function ResultsDisplay({ results }) {
  if (!results) return null;

  const { gross, deductions, net } = results;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Net Take-Home Summary */}
      <View style={[styles.card, styles.highlightCard]}>
        <Text style={styles.cardTitle}>Your Take-Home Maternity Pay</Text>
        <Text style={styles.mainAmount}>{formatCurrency(net.total)}</Text>
        <Text style={styles.period}>Over 39 weeks</Text>

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
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>First 6 weeks (90%)</Text>
            <Text style={styles.detailValue}>
              {formatCurrency(gross.breakdown.higherRate.totalGross)}
            </Text>
          </View>
          <Text style={styles.detailSubtext}>
            {formatCurrency(gross.breakdown.higherRate.weeklyAmount)} per week
          </Text>

          <View style={[styles.detailRow, { marginTop: spacing.md }]}>
            <Text style={styles.detailLabel}>Next 33 weeks</Text>
            <Text style={styles.detailValue}>
              {formatCurrency(gross.breakdown.standardRate.totalGross)}
            </Text>
          </View>
          <Text style={styles.detailSubtext}>
            {formatCurrency(gross.breakdown.standardRate.weeklyAmount)} per week
          </Text>
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

      {/* Info Card */}
      <View style={[styles.card, styles.infoCard]}>
        <Text style={styles.infoTitle}>About This Calculation</Text>
        <Text style={styles.infoText}>
          This calculator uses 2025/26 UK tax rates, National Insurance
          contributions, and NHS maternity pay rules. Statutory Maternity Pay (SMP)
          is paid for up to 39 weeks:{'\n\n'}
          • First 6 weeks: 90% of average weekly earnings{'\n'}
          • Next 33 weeks: £184.03 per week or 90% of average weekly earnings
          (whichever is lower){'\n\n'}
          Deductions are calculated based on your maternity pay income during the
          39-week period.
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
  bottomSpacing: {
    height: spacing.xl,
  },
});
