import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing } from '../constants/theme';

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>NHS Maternity Pay Calculator</Text>
          <Text style={styles.heroSubtitle}>
            Accurate, Updated for 2026/27 Tax Year
          </Text>
          <Text style={styles.heroDescription}>
            Calculate your NHS maternity pay in seconds. Free, accurate, and built specifically for NHS staff.
          </Text>

          <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.lg }}>
            <View style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay →</Text>
            </View>
          </Link>
        </View>

        {/* Trust Signals */}
        <View style={styles.trustSignals}>
          <View style={styles.trustItem}>
            <Text style={styles.trustNumber}>✓</Text>
            <Text style={styles.trustText}>Updated with latest NHS AFC rates</Text>
          </View>
          <View style={styles.trustItem}>
            <Text style={styles.trustNumber}>✓</Text>
            <Text style={styles.trustText}>100% free, no registration required</Text>
          </View>
          <View style={styles.trustItem}>
            <Text style={styles.trustNumber}>✓</Text>
            <Text style={styles.trustText}>Accounts for occupational maternity pay</Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Use Our Calculator?</Text>

          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>📊</Text>
              <Text style={styles.featureTitle}>NHS-Specific</Text>
              <Text style={styles.featureDescription}>
                Built specifically for NHS staff with occupational maternity pay calculations
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>💰</Text>
              <Text style={styles.featureTitle}>Accurate Results</Text>
              <Text style={styles.featureDescription}>
                Calculates both occupational and statutory maternity pay with latest tax rates
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>⚡</Text>
              <Text style={styles.featureTitle}>Instant Calculation</Text>
              <Text style={styles.featureDescription}>
                Get your results in seconds with detailed week-by-week breakdown
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🔒</Text>
              <Text style={styles.featureTitle}>Privacy First</Text>
              <Text style={styles.featureDescription}>
                Your data stays in your browser. We don't store any personal information
              </Text>
            </View>
          </View>
        </View>

        {/* How It Works Section */}
        <View style={styles.howItWorksSection}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.sectionDescription}>
            Calculate your NHS maternity pay in 3 simple steps
          </Text>

          <View style={styles.stepsList}>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Enter Your Details</Text>
                <Text style={styles.stepDescription}>
                  Annual salary, NHS band, pension percentage, and maternity leave duration
                </Text>
              </View>
            </View>

            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Get Instant Results</Text>
                <Text style={styles.stepDescription}>
                  See your total maternity pay, weekly breakdown, and net take-home after tax
                </Text>
              </View>
            </View>

            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Plan Your Finances</Text>
                <Text style={styles.stepDescription}>
                  Use the results to budget for your maternity leave period
                </Text>
              </View>
            </View>
          </View>

          <Link to="/guide" style={{ textDecoration: 'none', alignSelf: 'center', marginTop: spacing.lg }}>
            <Text style={styles.link}>Learn more about NHS maternity pay →</Text>
          </Link>
        </View>

        {/* CTA Section for NHS Trusts */}
        <View style={styles.trustCta}>
          <Text style={styles.trustCtaTitle}>Are you an NHS Trust?</Text>
          <Text style={styles.trustCtaDescription}>
            Learn how we can provide a white-label calculator solution for your staff
          </Text>
          <Link to="/for-trusts" style={{ textDecoration: 'none', marginTop: spacing.md }}>
            <View style={styles.trustCtaButton}>
              <Text style={styles.trustCtaButtonText}>Learn More</Text>
            </View>
          </Link>
        </View>

        {/* Recent Blog Posts Preview */}
        <View style={styles.blogPreview}>
          <Text style={styles.sectionTitle}>Latest Resources</Text>
          <Text style={styles.sectionDescription}>
            Helpful guides and tips for NHS maternity leave
          </Text>

          <View style={styles.blogGrid}>
            <View style={styles.blogCard}>
              <Text style={styles.blogTitle}>Understanding NHS Maternity Pay</Text>
              <Text style={styles.blogExcerpt}>
                A complete guide to NHS occupational maternity pay vs statutory maternity pay
              </Text>
              <Link to="/blog" style={{ textDecoration: 'none', marginTop: spacing.sm }}>
                <Text style={styles.link}>Read more →</Text>
              </Link>
            </View>

            <View style={styles.blogCard}>
              <Text style={styles.blogTitle}>Budgeting for Maternity Leave</Text>
              <Text style={styles.blogExcerpt}>
                Financial planning tips for NHS staff going on maternity leave
              </Text>
              <Link to="/blog" style={{ textDecoration: 'none', marginTop: spacing.sm }}>
                <Text style={styles.link}>Read more →</Text>
              </Link>
            </View>

            <View style={styles.blogCard}>
              <Text style={styles.blogTitle}>Maternity Pay FAQ</Text>
              <Text style={styles.blogExcerpt}>
                Common questions about NHS maternity pay answered
              </Text>
              <Link to="/faq" style={{ textDecoration: 'none', marginTop: spacing.sm }}>
                <Text style={styles.link}>Read more →</Text>
              </Link>
            </View>
          </View>
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
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl * 2,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: spacing.xl * 2,
    paddingHorizontal: spacing.lg,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  heroDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 12,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaButtonText: {
    color: colors.cardBackground,
    fontSize: 18,
    fontWeight: '600',
  },
  trustSignals: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.xl,
    paddingVertical: spacing.xl,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.xl,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  trustNumber: {
    fontSize: 20,
    color: colors.success,
  },
  trustText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  featuresSection: {
    paddingVertical: spacing.xl,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  sectionDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    justifyContent: 'center',
  },
  featureCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: spacing.lg,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: spacing.md,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  howItWorksSection: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
  },
  stepsList: {
    width: '100%',
    maxWidth: 600,
    gap: spacing.lg,
  },
  step: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    color: colors.cardBackground,
    fontSize: 18,
    fontWeight: '700',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  stepDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  trustCta: {
    backgroundColor: colors.primary + '10',
    borderRadius: 12,
    padding: spacing.xl,
    marginVertical: spacing.xl,
    alignItems: 'center',
  },
  trustCtaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  trustCtaDescription: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    maxWidth: 600,
  },
  trustCtaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
  },
  trustCtaButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
  },
  blogPreview: {
    paddingVertical: spacing.xl,
  },
  blogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    justifyContent: 'center',
  },
  blogCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: spacing.lg,
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  blogExcerpt: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
