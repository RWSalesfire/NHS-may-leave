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
  { label: 'Band 6', path: '/nhs-maternity-pay-band-6' },
  { label: 'Band 7', path: '/nhs-maternity-pay-band-7', current: true },
  { label: 'Band 8', path: '/nhs-maternity-pay-band-8' },
];

export default function BandPage7() {
  usePageMeta({
    title: 'NHS Maternity Pay Band 7 2026 | Calculator & Guide',
    description: 'NHS maternity pay for Band 7 advanced practitioners and team leads. See week-by-week breakdown, take-home estimates, and how to boost your pay. Free calculator.',
  });

  return (
    <Article style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="NHS Maternity Pay: Band 7"
          subtitle="Advanced Practitioner and Team Lead"
        />

        {/* Salary Overview */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Salary Overview</H2>
          <View style={[styles.overviewCard, shadows.md]}>
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Salary Range</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}45,000 - {'\u00A3'}52,000</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Midpoint Salary</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}48,500</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Weekly Pay (approx.)</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}933</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Band 7 covers ward managers, advanced nurse practitioners, consultant allied health
            professionals, team leaders and clinical specialists. These roles carry significant
            clinical and managerial responsibility.
          </Text>
        </Section>

        {/* Pay Breakdown */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Your Maternity Pay Breakdown</H2>
          <Text style={styles.paragraph}>
            Based on the Band 7 midpoint salary of {'\u00A3'}48,500 ({'\u00A3'}933/week):
          </Text>
          <View style={styles.payStructure}>
            {[
              {
                title: 'Weeks 1-8: Full Pay',
                desc: 'You receive your full weekly salary.',
                amount: '\u00A3933/week',
                total: '\u00A37,462 total',
              },
              {
                title: 'Weeks 9-26: Half Pay + SMP',
                desc: 'Half salary (\u00A3466) plus Statutory Maternity Pay (\u00A3184.75).',
                amount: '\u00A3651/week',
                total: '\u00A311,722 total',
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
          <Text style={styles.totalValue}>{'\u00A3'}21,586</Text>
          <Text style={styles.totalNote}>
            Before tax and National Insurance deductions. Your actual take-home pay will be lower.
          </Text>
        </View>

        {/* Bank Shifts */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>How Bank Shifts Can Boost Your Pay</H2>
          <Text style={styles.paragraph}>
            Your maternity pay is calculated from your average weekly earnings (AWE) during a
            specific 8-week window before the qualifying week. Any extra earnings during this
            period raise your AWE and increase your maternity pay for the full 39 weeks.
          </Text>
          <View style={[styles.exampleCard, shadows.sm]}>
            <Text style={styles.exampleTitle}>Example: +{'\u00A3'}150/week in bank shifts</Text>
            <Text style={styles.exampleText}>
              If you pick up {'\u00A3'}150/week in extra bank shifts during your calculation period,
              your AWE rises from {'\u00A3'}933 to {'\u00A3'}1,083/week. That means:
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>{'\u2022'} Weeks 1-8 full pay: {'\u00A3'}1,083/week instead of {'\u00A3'}933</Text>
              <Text style={styles.listItem}>{'\u2022'} Weeks 9-26 half pay: {'\u00A3'}542 + SMP instead of {'\u00A3'}466 + SMP</Text>
              <Text style={styles.listItem}>{'\u2022'} Potential extra {'\u00A3'}2,570+ over the full maternity pay period</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Band 7 staff often have less opportunity for bank shifts but may have on-call and
            unsocial hours payments that count towards AWE. Check whether your regular on-call
            commitments fall within the calculation window, as these can make a meaningful difference.
          </Text>
        </Section>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Get Your Exact Band 7 Maternity Pay</Text>
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
