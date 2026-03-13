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
  { label: 'Band 7', path: '/nhs-maternity-pay-band-7' },
  { label: 'Band 8', path: '/nhs-maternity-pay-band-8', current: true },
];

export default function BandPage8() {
  usePageMeta({
    title: 'NHS Maternity Pay Band 8 2026 | Calculator & Guide',
    description: 'NHS maternity pay for Band 8a-8b managers and senior managers. See week-by-week breakdown, take-home estimates, and how to plan for the SMP drop. Free calculator.',
  });

  return (
    <Article style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="NHS Maternity Pay: Band 8a-8b"
          subtitle="Manager and Senior Manager"
        />

        {/* Salary Overview */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Salary Overview</H2>
          <View style={[styles.overviewCard, shadows.md]}>
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Salary Range (8a-8b)</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}53,000 - {'\u00A3'}72,000</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Band 8a Midpoint</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}57,500</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Band 8b Midpoint</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}67,500</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewRow}>
              <Text style={styles.overviewLabel}>Weekly Pay - 8a (approx.)</Text>
              <Text style={styles.overviewValue}>{'\u00A3'}1,106</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Band 8 covers service managers, principal practitioners, matrons, heads of department
            and associate directors. The examples below use the Band 8a midpoint of {'\u00A3'}57,500.
          </Text>
          <View style={[styles.noteCard, shadows.sm]}>
            <Text style={styles.noteText}>
              Band 8 covers sub-bands 8a through 8d. This page shows 8a estimates. Use our
              calculator for 8b, 8c or 8d figures.
            </Text>
          </View>
        </Section>

        {/* Pay Breakdown */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Your Maternity Pay Breakdown</H2>
          <Text style={styles.paragraph}>
            Based on the Band 8a midpoint salary of {'\u00A3'}57,500 ({'\u00A3'}1,106/week):
          </Text>
          <View style={styles.payStructure}>
            {[
              {
                title: 'Weeks 1-8: Full Pay',
                desc: 'You receive your full weekly salary.',
                amount: '\u00A31,106/week',
                total: '\u00A38,846 total',
              },
              {
                title: 'Weeks 9-26: Half Pay + SMP',
                desc: 'Half salary (\u00A3553) plus Statutory Maternity Pay (\u00A3184.75).',
                amount: '\u00A3738/week',
                total: '\u00A313,280 total',
              },
              {
                title: 'Weeks 27-39: SMP Only',
                desc: 'Statutory Maternity Pay only. At Band 8a, SMP represents less than 17% of your normal weekly pay.',
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
          <Text style={styles.totalValue}>{'\u00A3'}24,527</Text>
          <Text style={styles.totalNote}>
            Before tax and National Insurance deductions. Your actual take-home pay will be lower.
          </Text>
        </View>

        {/* Financial Planning Note */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Planning for the SMP-Only Period</H2>
          <Text style={styles.paragraph}>
            For Band 8 staff, the drop to SMP-only at week 27 is the most dramatic of any band.
            Your weekly income falls from {'\u00A3'}738 (half pay + SMP) to just {'\u00A3'}184.75 -
            a reduction of over 75% in a single week.
          </Text>
          <Text style={styles.paragraph}>
            Financial planning for this period is especially important. Consider:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>{'\u2022'} Setting aside savings during the higher-pay weeks (1-26) to cover weeks 27-39</Text>
            <Text style={styles.listItem}>{'\u2022'} Reviewing mortgage holiday or reduced payment options with your lender</Text>
            <Text style={styles.listItem}>{'\u2022'} Checking whether your Trust offers salary sacrifice schemes that can be paused</Text>
            <Text style={styles.listItem}>{'\u2022'} Using KIT days (up to 10 available) strategically during the lower-pay period</Text>
          </View>
        </Section>

        {/* Bank Shifts */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>How Bank Shifts Can Boost Your Pay</H2>
          <Text style={styles.paragraph}>
            Your maternity pay is calculated from your average weekly earnings (AWE) during a
            specific 8-week window before the qualifying week. Any extra earnings during this
            period raise your AWE and increase your maternity pay for the full 39 weeks.
          </Text>
          <View style={[styles.exampleCard, shadows.sm]}>
            <Text style={styles.exampleTitle}>Example: +{'\u00A3'}150/week in extra earnings</Text>
            <Text style={styles.exampleText}>
              If you earn an additional {'\u00A3'}150/week during your calculation period (through
              bank shifts, on-call or other payments), your AWE rises from {'\u00A3'}1,106 to
              {'\u00A3'}1,256/week. That means:
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>{'\u2022'} Weeks 1-8 full pay: {'\u00A3'}1,256/week instead of {'\u00A3'}1,106</Text>
              <Text style={styles.listItem}>{'\u2022'} Weeks 9-26 half pay: {'\u00A3'}628 + SMP instead of {'\u00A3'}553 + SMP</Text>
              <Text style={styles.listItem}>{'\u2022'} Potential extra {'\u00A3'}2,550+ over the full maternity pay period</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            At Band 8 level, bank shifts may be less common, but on-call payments, acting-up
            allowances and any other earnings paid through your Trust payroll all count towards
            your AWE.
          </Text>
        </Section>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Get Your Exact Band 8 Maternity Pay</Text>
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
  noteCard: {
    backgroundColor: colors.warningSurface,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  noteText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 20,
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
