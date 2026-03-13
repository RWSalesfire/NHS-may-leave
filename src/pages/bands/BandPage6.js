import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../../constants/theme';
import { H2, Section, Article } from '../../components/SemanticWeb';
import PageHeader from '../../components/PageHeader';
import usePageMeta from '../../hooks/usePageMeta';
import AdUnit from '../../components/AdUnit';

const PERIOD_COLORS = [colors.sage, colors.primary, colors.accent, colors.textSecondary];

const OTHER_BANDS = [
  { label: 'Band 2', path: '/nhs-maternity-pay-band-2' },
  { label: 'Band 3', path: '/nhs-maternity-pay-band-3' },
  { label: 'Band 4', path: '/nhs-maternity-pay-band-4' },
  { label: 'Band 5', path: '/nhs-maternity-pay-band-5' },
  { label: 'Band 6', path: '/nhs-maternity-pay-band-6', current: true },
  { label: 'Band 7', path: '/nhs-maternity-pay-band-7' },
  { label: 'Band 8', path: '/nhs-maternity-pay-band-8' },
];

export default function BandPage6() {
  usePageMeta({
    title: 'NHS Maternity Pay Band 6 2026 | Calculator & Guide',
    description: 'NHS maternity pay for Band 6 senior nurses and specialist practitioners. See week-by-week breakdown, take-home estimates, and how to boost your pay. Free calculator.',
  });

  return (
    <Article style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="NHS Maternity Pay: Band 6"
          subtitle="Senior Nurse and Specialist Practitioner"
        />

        {/* Salary Overview */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Salary Overview</H2>
          <View style={[styles.overviewCard, shadows.md]}>
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Salary Range</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}37,500 - {'\u00A3'}44,000</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Midpoint Salary</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}40,750</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Weekly Pay (approx.)</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}784</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Band 6 covers senior nurses, ward sisters, charge nurses, specialist practitioners,
            senior allied health professionals and research nurses. The wide salary range
            ({'\u00A3'}37,500 to {'\u00A3'}44,000) means your exact position on the pay spine matters.
            Check your most recent payslip for your actual basic salary.
          </Text>
        </Section>

        {/* Pay Breakdown */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Your Maternity Pay Breakdown</H2>
          <Text style={styles.paragraph}>
            Based on the Band 6 midpoint salary of {'\u00A3'}40,750 ({'\u00A3'}784/week):
          </Text>
          <View style={styles.payStructure}>
            {[
              {
                title: 'Weeks 1-8: Full Pay',
                desc: 'You receive your full weekly salary.',
                amount: '\u00A3784/week',
                total: '\u00A36,269 total',
              },
              {
                title: 'Weeks 9-26: Half Pay + SMP',
                desc: 'Half salary (\u00A3392) plus Statutory Maternity Pay (\u00A3184.75).',
                amount: '\u00A3577/week',
                total: '\u00A310,381 total',
              },
              {
                title: 'Weeks 27-39: SMP Only',
                desc: 'Statutory Maternity Pay only.',
                amount: '\u00A3184.75/week',
                total: '\u00A32,402 total',
              },
              {
                title: 'Weeks 40-52: Unpaid',
                desc: 'No pay, but your right to return to your role is protected.',
                amount: '\u00A30/week',
                total: '\u00A30 total',
              },
            ].map((period, i) => (
              <View key={i} style={[styles.payPeriod, { borderLeftColor: PERIOD_COLORS[i] }]}>
                <Text style={[styles.payPeriodTitle, { color: PERIOD_COLORS[i] }]}>{period.title}</Text>
                <Text style={styles.payPeriodDescription}>{period.desc}</Text>
                <View style={styles.payPeriodAmounts}>
                  <Text style={styles.payPeriodAmount}>{period.amount}</Text>
                  <Text style={styles.payPeriodTotal}>{period.total}</Text>
                </View>
              </View>
            ))}
          </View>
        </Section>

        {/* Total */}
        <View style={[styles.totalCard, shadows.md]}>
          <Text style={styles.totalLabel}>Total Estimated Gross Pay (39 weeks)</Text>
          <Text style={styles.totalValue}>{'\u00A3'}19,052</Text>
          <Text style={styles.totalNote}>
            Before tax and National Insurance deductions. Your actual take-home pay will be lower.
          </Text>
        </View>

        {/* Bank Shifts */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>How Bank Shifts Can Boost Your Pay</H2>
          <Text style={styles.paragraph}>
            Your maternity pay is calculated from your average weekly earnings (AWE) during a
            specific 8-week window before the qualifying week. Picking up extra shifts through
            your Trust's internal bank during this period raises your AWE and, in turn, your
            maternity pay for the full 39 weeks.
          </Text>
          <View style={[styles.exampleCard, shadows.sm]}>
            <Text style={styles.exampleTitle}>Example: +{'\u00A3'}150/week in bank shifts</Text>
            <Text style={styles.exampleText}>
              If you pick up {'\u00A3'}150/week in extra bank shifts during your calculation period,
              your AWE rises from {'\u00A3'}784 to {'\u00A3'}934/week. That means:
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>{'\u2022'} Weeks 1-8 full pay: {'\u00A3'}934/week instead of {'\u00A3'}784</Text>
              <Text style={styles.listItem}>{'\u2022'} Weeks 9-26 half pay: {'\u00A3'}467 + SMP instead of {'\u00A3'}392 + SMP</Text>
              <Text style={styles.listItem}>{'\u2022'} Potential extra {'\u00A3'}2,550+ over the full maternity pay period</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Make sure any extra shifts are paid through your Trust payroll, not via an external
            agency. Agency payments come from a different employer and may not count towards your AWE.
          </Text>
        </Section>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Get Your Exact Band 6 Maternity Pay</Text>
          <Text style={styles.ctaSubtitle}>
            Enter your actual salary, tax code and any extras for a personalised breakdown.
          </Text>
          <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md }}>
            <View style={[styles.ctaButton, shadows.primary]}>
              <Text style={styles.ctaButtonText}>Calculate Your Exact Pay {'\u2192'}</Text>
            </View>
          </Link>
        </View>

        {/* Other Bands */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>See Other Bands</H2>
          <View style={styles.bandLinks}>
            {OTHER_BANDS.map((band) => (
              band.current ? (
                <View key={band.path} style={[styles.bandPill, styles.bandPillCurrent]}>
                  <Text style={styles.bandPillTextCurrent}>{band.label}</Text>
                </View>
              ) : (
                <Link key={band.path} to={band.path} style={{ textDecoration: 'none' }}>
                  <View style={styles.bandPill}>
                    <Text style={styles.bandPillText}>{band.label}</Text>
                  </View>
                </Link>
              )
            ))}
          </View>
        </Section>

        <AdUnit slot="3847261095" style={{ marginBottom: spacing.lg }} />
      </View>
    </Article>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl * 2,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  overviewCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  overviewLabel: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
  },
  overviewValue: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    color: colors.text,
  },
  overviewDivider: {
    height: 1,
    backgroundColor: colors.border,
  },
  payStructure: {
    gap: spacing.md,
  },
  payPeriod: {
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    ...shadows.sm,
  },
  payPeriodTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    marginBottom: spacing.xs,
  },
  payPeriodDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  payPeriodAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  payPeriodAmount: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.text,
  },
  payPeriodTotal: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
  },
  totalCard: {
    backgroundColor: colors.primarySurface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  totalValue: {
    fontSize: 36,
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  totalNote: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  exampleCard: {
    backgroundColor: colors.warmCream,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  exampleTitle: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.sage,
    marginBottom: spacing.sm,
  },
  exampleText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  list: {
    marginBottom: spacing.sm,
  },
  listItem: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.xs,
  },
  ctaSection: {
    backgroundColor: colors.primarySurface,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
  },
  ctaButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  bandLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  bandPill: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.pill,
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  bandPillCurrent: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  bandPillText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
  },
  bandPillTextCurrent: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    color: colors.primary,
  },
});
