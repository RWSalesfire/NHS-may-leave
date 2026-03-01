import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing } from '../constants/theme';

export default function GuidePage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How NHS Maternity Pay Works</Text>
        <Text style={styles.subtitle}>
          A complete guide to understanding your maternity pay entitlements
        </Text>

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
            <View style={styles.payPeriod}>
              <Text style={styles.payPeriodTitle}>Weeks 1-8: Full Pay</Text>
              <Text style={styles.payPeriodDescription}>
                You receive your full salary, minus the amount of Statutory Maternity Pay (SMP) you're entitled to.
              </Text>
            </View>

            <View style={styles.payPeriod}>
              <Text style={styles.payPeriodTitle}>Weeks 9-26: Half Pay + SMP</Text>
              <Text style={styles.payPeriodDescription}>
                You receive half of your full salary plus SMP. However, the total cannot exceed your full pay.
              </Text>
            </View>

            <View style={styles.payPeriod}>
              <Text style={styles.payPeriodTitle}>Weeks 27-39: SMP Only</Text>
              <Text style={styles.payPeriodDescription}>
                You receive only Statutory Maternity Pay (£184.03 per week for 2026/27 tax year).
              </Text>
            </View>

            <View style={styles.payPeriod}>
              <Text style={styles.payPeriodTitle}>Weeks 40-52: Unpaid</Text>
              <Text style={styles.payPeriodDescription}>
                These weeks are unpaid, but you still have the right to return to your job.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
          <Text style={styles.paragraph}>
            To qualify for NHS occupational maternity pay, you must:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Have at least 12 months of continuous NHS service at the beginning of the 11th week before your baby is due</Text>
            <Text style={styles.listItem}>• Provide the required notice to your employer (usually at least 28 days before you intend to start maternity leave)</Text>
            <Text style={styles.listItem}>• Intend to return to work for at least 3 months after your maternity leave</Text>
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
            <Text style={styles.listItem}>• Your basic salary</Text>
            <Text style={styles.listItem}>• Regular overtime payments</Text>
            <Text style={styles.listItem}>• Shift allowances (e.g., unsocial hours payments)</Text>
            <Text style={styles.listItem}>• Any other regular payments</Text>
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
            <View style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Use the Calculator →</Text>
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
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  paragraph: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  bold: {
    fontWeight: '600',
  },
  payStructure: {
    gap: spacing.md,
  },
  payPeriod: {
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  payPeriodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  payPeriodDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  list: {
    marginBottom: spacing.md,
  },
  listItem: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.xs,
  },
  ctaSection: {
    backgroundColor: colors.primary + '10',
    padding: spacing.xl,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
  },
});
