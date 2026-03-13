import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../../constants/theme';
import { H2, Section, Article } from '../../components/SemanticWeb';
import PageHeader from '../../components/PageHeader';
import usePageMeta from '../../hooks/usePageMeta';
import AdUnit from '../../components/AdUnit';

const PERIOD_COLORS = [colors.sage, colors.primary, colors.accent, colors.textSecondary];

const BAND_LINKS = [
  { band: 2, route: '/nhs-maternity-pay-band-2' },
  { band: 3, route: '/nhs-maternity-pay-band-3' },
  { band: 4, route: '/nhs-maternity-pay-band-4' },
  { band: 5, route: '/nhs-maternity-pay-band-5' },
  { band: 6, route: '/nhs-maternity-pay-band-6' },
  { band: 7, route: '/nhs-maternity-pay-band-7' },
  { band: 8, route: '/nhs-maternity-pay-band-8' },
];

const CURRENT_BAND = 3;

export default function BandPage3() {
  usePageMeta({
    title: 'NHS Maternity Pay Band 3 2026 | Calculator & Guide',
    description:
      'NHS maternity pay for Band 3 senior healthcare assistants and pharmacy technicians. See week-by-week breakdown, take-home estimates, and how to boost your pay. Free calculator.',
  });

  return (
    <Article style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="NHS Maternity Pay - Band 3"
          subtitle="Senior healthcare assistants, phlebotomists, pharmacy technicians and dental nurses"
        />

        {/* Salary Overview */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Salary Overview</H2>
          <View style={[styles.salaryCard, shadows.md]}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryLabel}>Salary Range</Text>
              <Text style={styles.salaryValue}>{'\u00A3'}25,000 - {'\u00A3'}26,500</Text>
            </View>
            <View style={styles.salaryDivider} />
            <View style={styles.salaryRow}>
              <Text style={styles.salaryLabel}>Midpoint Salary</Text>
              <Text style={styles.salaryValue}>{'\u00A3'}25,750</Text>
            </View>
            <View style={styles.salaryDivider} />
            <View style={styles.salaryRow}>
              <Text style={styles.salaryLabel}>Weekly Pay (approx.)</Text>
              <Text style={styles.salaryValue}>{'\u00A3'}495</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Band 3 roles include senior healthcare assistants, phlebotomists, pharmacy technicians
            and dental nurses. These positions typically require specific vocational qualifications
            or equivalent experience.
          </Text>
        </Section>

        {/* Pay Breakdown */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>Your Maternity Pay Breakdown</H2>
          <Text style={styles.paragraph}>
            Based on the midpoint salary of {'\u00A3'}25,750 ({'\u00A3'}495/week), here is what you
            can expect at each stage of your maternity leave.
          </Text>

          <View style={styles.payStructure}>
            {[
              {
                title: 'Weeks 1-8: Full Pay',
                amount: '\u00A3495/week',
                total: '\u00A33,962 total',
                desc: 'You receive your full weekly salary for the first 8 weeks.',
              },
              {
                title: 'Weeks 9-26: Half Pay + SMP',
                amount: '\u00A3248 + \u00A3184.75 = \u00A3432/week',
                total: '\u00A37,776 total',
                desc: 'Half your salary plus Statutory Maternity Pay for 18 weeks.',
              },
              {
                title: 'Weeks 27-39: SMP Only',
                amount: '\u00A3184.75/week',
                total: '\u00A32,402 total',
                desc: 'Statutory Maternity Pay only for 13 weeks.',
              },
              {
                title: 'Weeks 40-52: Unpaid',
                amount: '\u00A30/week',
                total: '\u00A30 total',
                desc: 'You can still take leave, but these weeks are unpaid.',
              },
            ].map((period, i) => (
              <View key={i} style={[styles.payPeriod, { borderLeftColor: PERIOD_COLORS[i] }]}>
                <Text style={[styles.payPeriodTitle, { color: PERIOD_COLORS[i] }]}>
                  {period.title}
                </Text>
                <Text style={styles.payPeriodAmount}>{period.amount}</Text>
                <Text style={styles.payPeriodTotal}>{period.total}</Text>
                <Text style={styles.payPeriodDescription}>{period.desc}</Text>
              </View>
            ))}
          </View>
        </Section>

        {/* Total Summary */}
        <View style={[styles.totalCard, shadows.md]}>
          <Text style={styles.totalLabel}>Total Estimated Gross Pay (39 weeks)</Text>
          <Text style={styles.totalAmount}>{'\u00A3'}14,140</Text>
          <Text style={styles.totalNote}>
            At Band 3, your half pay + SMP period ({'\u00A3'}432/week) retains around 87% of your
            normal weekly earnings, making the transition more manageable during weeks 9 to 26.
          </Text>
        </View>

        {/* Bank Shifts */}
        <Section style={styles.section}>
          <H2 style={styles.sectionTitle}>How Bank Shifts Can Boost Your Pay</H2>
          <Text style={styles.paragraph}>
            Your maternity pay is calculated from your average weekly earnings during a specific
            period before your due date. Picking up extra bank shifts during this window raises
            your average and increases your pay throughout maternity leave.
          </Text>
          <View style={[styles.exampleCard, shadows.sm]}>
            <Text style={styles.exampleTitle}>Example: +{'\u00A3'}150/week in bank shifts</Text>
            <Text style={styles.exampleText}>
              If you earn an extra {'\u00A3'}150/week during your calculation period, your effective
              weekly pay rises to {'\u00A3'}645. This increases your full pay period to {'\u00A3'}645/week
              and your half pay to {'\u00A3'}323 + SMP. Over 39 weeks, that could add over{' '}
              {'\u00A3'}2,000 to your total maternity pay.
            </Text>
          </View>
        </Section>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Calculate Your Exact Pay</Text>
          <Text style={styles.ctaSubtitle}>
            Enter your actual salary, tax code and bank shifts for a personalised breakdown.
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
            {BAND_LINKS.map((item) => {
              const isCurrent = item.band === CURRENT_BAND;
              return (
                <Link
                  key={item.band}
                  to={item.route}
                  style={{ textDecoration: 'none' }}
                >
                  <View
                    style={[
                      styles.bandPill,
                      isCurrent && styles.bandPillActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.bandPillText,
                        isCurrent && styles.bandPillTextActive,
                      ]}
                    >
                      Band {item.band}
                    </Text>
                  </View>
                </Link>
              );
            })}
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
  salaryCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  salaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  salaryLabel: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
  },
  salaryValue: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
  },
  salaryDivider: {
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
  payPeriodAmount: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: 2,
  },
  payPeriodTotal: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  payPeriodDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
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
  totalAmount: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  totalNote: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
  exampleCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.sage,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.sage,
    marginBottom: spacing.sm,
  },
  exampleText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 20,
  },
  ctaSection: {
    backgroundColor: colors.primarySurface,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginVertical: spacing.xl,
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
  bandPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  bandPillText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
  },
  bandPillTextActive: {
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.cardBackground,
  },
});
