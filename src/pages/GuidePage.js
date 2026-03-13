import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import AdUnit from '../components/AdUnit';

const PERIOD_COLORS = [colors.sage, colors.primary, colors.accent, colors.textSecondary];

export default function GuidePage() {
  usePageMeta({
    title: 'NHS Maternity Pay Guide 2025/26 | How It Works',
    description: 'Complete guide to NHS maternity pay. Learn about OMP, SMP, eligibility, how your salary is calculated, bank shifts, part-time pay, pension, and KIT days.',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="How NHS Maternity Pay Works"
          subtitle="A complete guide to understanding your maternity pay entitlements"
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What is NHS Maternity Pay?</Text>
          <Text style={styles.paragraph}>
            NHS maternity pay consists of two components: <Text style={styles.bold}>Occupational Maternity Pay (OMP)</Text> and{' '}
            <Text style={styles.bold}>Statutory Maternity Pay (SMP)</Text>. NHS staff receive more generous
            maternity pay compared to employees who only receive statutory maternity pay.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NHS Occupational Maternity Pay Structure</Text>

          <View style={styles.payStructure}>
            {[
              { title: 'Weeks 1-8: Full Pay', desc: "You receive your full salary, minus the amount of Statutory Maternity Pay (SMP) you're entitled to." },
              { title: 'Weeks 9-26: Half Pay + SMP', desc: 'You receive half of your full salary plus SMP. However, the total cannot exceed your full pay.' },
              { title: 'Weeks 27-39: SMP Only', desc: 'You receive only Statutory Maternity Pay (\u00A3184.03 per week for 2026/27 tax year).' },
              { title: 'Weeks 40-52: Unpaid', desc: 'These weeks are unpaid, but you still have the right to return to your job.' },
            ].map((period, i) => (
              <View key={i} style={[styles.payPeriod, { borderLeftColor: PERIOD_COLORS[i] }]}>
                <Text style={[styles.payPeriodTitle, { color: PERIOD_COLORS[i] }]}>{period.title}</Text>
                <Text style={styles.payPeriodDescription}>{period.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
          <Text style={styles.paragraph}>
            To qualify for NHS occupational maternity pay, you must:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>{'\u2022'} Have at least 12 months of continuous NHS service at the beginning of the 11th week before your baby is due</Text>
            <Text style={styles.listItem}>{'\u2022'} Provide the required notice to your employer (usually at least 28 days before you intend to start maternity leave)</Text>
            <Text style={styles.listItem}>{'\u2022'} Intend to return to work for at least 3 months after your maternity leave</Text>
          </View>
          <Text style={styles.paragraph}>
            Even if you don't qualify for occupational maternity pay, you may still be eligible for Statutory Maternity Pay if you've worked for your employer for at least 26 weeks.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How Salary is Calculated</Text>
          <Text style={styles.paragraph}>
            Your maternity pay is based on your <Text style={styles.bold}>average weekly earnings</Text> during the{' '}
            <Text style={styles.bold}>8 weeks before the 15th week before your due date</Text>. This includes:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>{'\u2022'} Your basic salary</Text>
            <Text style={styles.listItem}>{'\u2022'} Regular overtime payments</Text>
            <Text style={styles.listItem}>{'\u2022'} Shift allowances (e.g., unsocial hours payments)</Text>
            <Text style={styles.listItem}>{'\u2022'} Any other regular payments</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Boosting Your Pay: Bank Shifts & Overtime</Text>
          <Text style={styles.paragraph}>
            Because maternity pay is based on your <Text style={styles.bold}>average weekly earnings (AWE)</Text> during a specific
            calculation period, picking up extra shifts during this window can significantly increase your maternity pay.
          </Text>

          <Text style={[styles.paragraph, { fontWeight: '600', fontFamily: fontFamily.semiBold }]}>
            The Calculation Period
          </Text>
          <Text style={styles.paragraph}>
            For monthly-paid NHS staff, your AWE is calculated from the <Text style={styles.bold}>last 2 monthly payslips</Text> before
            the Saturday of the qualifying week (the 15th week before your expected week of childbirth). It's based on when you're{' '}
            <Text style={styles.bold}>paid</Text>, not when you worked — so account for approximately 1 month of payroll lag.
          </Text>

          <Text style={[styles.paragraph, { fontWeight: '600', fontFamily: fontFamily.semiBold }]}>
            What Counts
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>{'\u2022'} Overtime payments</Text>
            <Text style={styles.listItem}>{'\u2022'} Bank shifts worked through your Trust</Text>
            <Text style={styles.listItem}>{'\u2022'} Unsocial hours premiums</Text>
            <Text style={styles.listItem}>{'\u2022'} On-call payments</Text>
            <Text style={styles.listItem}>{'\u2022'} Any other earnings subject to National Insurance</Text>
          </View>

          <Text style={[styles.paragraph, { fontWeight: '600', fontFamily: fontFamily.semiBold }]}>
            What May NOT Count
          </Text>
          <Text style={styles.paragraph}>
            Bank shifts through <Text style={styles.bold}>NHS Professionals (NHSP)</Text> or external agencies may{' '}
            <Text style={styles.bold}>not</Text> count towards your AWE. These organisations are technically a different employer,
            so their payments may not appear on your Trust payslip.
          </Text>

          <Text style={[styles.paragraph, { fontWeight: '600', fontFamily: fontFamily.semiBold }]}>
            Practical Steps
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>{'\u2022'} Identify your qualifying week (15 weeks before your EWC)</Text>
            <Text style={styles.listItem}>{'\u2022'} Work backwards to find which 2 monthly payslips will be used</Text>
            <Text style={styles.listItem}>{'\u2022'} Factor in payroll lag — shifts worked in Month X typically appear on Month X+1 payslip</Text>
            <Text style={styles.listItem}>{'\u2022'} Confirm with your Trust's HR or payroll team exactly which pay periods count</Text>
            <Text style={styles.listItem}>{'\u2022'} Use our calculator's "Bank Shifts & Overtime" feature to model the impact on your take-home pay</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Part-Time Staff</Text>
          <Text style={styles.paragraph}>
            If you work part-time, your maternity pay will be calculated based on your part-time salary.
            You'll still receive the same proportion of pay (full pay for 8 weeks, half pay + SMP for 18 weeks, etc.),
            but the amounts will be pro-rated to your working hours.
          </Text>
        </View>

        <AdUnit slot="GUIDE_INCONTENT_SLOT" format="auto" />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tax and National Insurance</Text>
          <Text style={styles.paragraph}>
            Maternity pay is subject to income tax and National Insurance contributions, just like your regular salary.
            However, because you're receiving less income during maternity leave, you may fall into a lower tax bracket
            and pay less tax overall.
          </Text>
          <Text style={styles.paragraph}>
            Our calculator automatically deducts tax and National Insurance to show you your actual take-home pay.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pension Contributions</Text>
          <Text style={styles.paragraph}>
            During your maternity leave, your pension contributions will be based on the maternity pay you actually receive,
            not your full salary. However, your employer's contributions continue to be based on your full salary during
            the period you receive occupational maternity pay (weeks 1-26).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Keeping in Touch (KIT) Days</Text>
          <Text style={styles.paragraph}>
            You can work up to 10 Keeping in Touch (KIT) days during your maternity leave without losing any maternity pay.
            You'll be paid your normal rate for these days, and they won't affect your maternity pay entitlement.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Annual Leave</Text>
          <Text style={styles.paragraph}>
            You continue to accrue annual leave during your maternity leave. This annual leave can be added to the end
            of your maternity leave or taken when you return to work.
          </Text>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Calculate Your Maternity Pay?</Text>
          <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md }}>
            <View style={[styles.ctaButton, shadows.primary]}>
              <Text style={styles.ctaButtonText}>Use the Calculator {'\u2192'}</Text>
            </View>
          </Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More Questions?</Text>
          <Text style={styles.paragraph}>
            Check our <Link to="/faq" style={{ color: colors.primary, textDecorationLine: 'underline' }}>FAQ page</Link> for
            answers to common questions about NHS maternity pay.
          </Text>
        </View>
      </View>
    </ScrollView>
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
  bold: {
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
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
  },
  list: {
    marginBottom: spacing.md,
  },
  listItem: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.xs,
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
});
