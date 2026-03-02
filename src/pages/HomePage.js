import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import usePageMeta from '../hooks/usePageMeta';

function TrustBadge({ text }) {
  return (
    <View style={styles.trustItem}>
      <View style={styles.trustBadge}>
        <Text style={styles.trustCheck}>{'\u2713'}</Text>
      </View>
      <Text style={styles.trustText}>{text}</Text>
    </View>
  );
}

function FeatureCard({ icon, title, description, cardWidth }) {
  return (
    <View style={[styles.featureCard, shadows.md, { width: cardWidth }]}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

function StepItem({ number, title, description, isLast }) {
  return (
    <View style={styles.step}>
      <View style={styles.stepLeft}>
        <View style={styles.stepRing}>
          <Text style={styles.stepNumberText}>{number}</Text>
        </View>
        {!isLast && <View style={styles.stepConnector} />}
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  );
}

export default function HomePage() {
  usePageMeta({
    title: 'NHS Maternity Pay Calculator \u2014 Free Estimate for NHS Staff',
    description: 'Free NHS maternity pay calculator. Estimate your Occupational Maternity Pay, SMP, and total leave income based on your NHS pay band. Instant results, no sign-up.',
  });
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  const isDesktop = width >= 1024;

  const featureCardWidth = isDesktop ? 260 : isMobile ? '100%' : 280;
  const blogCardWidth = isDesktop ? 350 : isMobile ? '100%' : 350;

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
            <View style={[styles.ctaButton, shadows.primary]}>
              <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
            </View>
          </Link>
        </View>

        {/* Trust Signals */}
        <View style={styles.trustSignals}>
          <TrustBadge text="Updated with latest NHS AFC rates" />
          <TrustBadge text="100% free, no registration required" />
          <TrustBadge text="Accounts for occupational maternity pay" />
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Use Our Calculator?</Text>

          <View style={styles.featureGrid}>
            <FeatureCard
              icon={'\uD83D\uDCCA'}
              title="NHS-Specific"
              description="Built specifically for NHS staff with occupational maternity pay calculations"
              cardWidth={featureCardWidth}
            />
            <FeatureCard
              icon={'\uD83D\uDCB0'}
              title="Accurate Results"
              description="Calculates both occupational and statutory maternity pay with latest tax rates"
              cardWidth={featureCardWidth}
            />
            <FeatureCard
              icon={'\u26A1'}
              title="Instant Calculation"
              description="Get your results in seconds with detailed week-by-week breakdown"
              cardWidth={featureCardWidth}
            />
            <FeatureCard
              icon={'\uD83D\uDD12'}
              title="Privacy First"
              description="Your data stays in your browser. We don't store any personal information"
              cardWidth={featureCardWidth}
            />
          </View>
        </View>

        {/* How It Works Section */}
        <View style={styles.howItWorksSection}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.sectionDescription}>
            Calculate your NHS maternity pay in 3 simple steps
          </Text>

          <View style={styles.stepsList}>
            <StepItem
              number="1"
              title="Enter Your Details"
              description="Annual salary, NHS band, pension percentage, and maternity leave duration"
            />
            <StepItem
              number="2"
              title="Get Instant Results"
              description="See your total maternity pay, weekly breakdown, and net take-home after tax"
            />
            <StepItem
              number="3"
              title="Plan Your Finances"
              description="Use the results to budget for your maternity leave period"
              isLast
            />
          </View>

          <Link to="/guide" style={{ textDecoration: 'none', alignSelf: 'center', marginTop: spacing.lg }}>
            <Text style={styles.link}>Learn more about NHS maternity pay {'\u2192'}</Text>
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
            {[
              { title: 'Understanding NHS Maternity Pay', excerpt: 'A complete guide to NHS occupational maternity pay vs statutory maternity pay', to: '/blog' },
              { title: 'Budgeting for Maternity Leave', excerpt: 'Financial planning tips for NHS staff going on maternity leave', to: '/blog' },
              { title: 'Maternity Pay FAQ', excerpt: 'Common questions about NHS maternity pay answered', to: '/faq' },
            ].map((post, i) => (
              <View key={i} style={[styles.blogCard, shadows.md, { width: blogCardWidth }]}>
                <Text style={styles.blogTitle}>{post.title}</Text>
                <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
                <Link to={post.to} style={{ textDecoration: 'none', marginTop: spacing.sm }}>
                  <Text style={styles.link}>Read more {'\u2192'}</Text>
                </Link>
              </View>
            ))}
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
    fontSize: 44,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
    lineHeight: 52,
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  heroDescription: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.xl + 8,
    borderRadius: borderRadius.md,
  },
  ctaButtonText: {
    color: colors.cardBackground,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  trustSignals: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: spacing.xl,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.xl,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    marginVertical: spacing.xs,
  },
  trustBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.sage,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  trustCheck: {
    fontSize: 14,
    color: colors.cardBackground,
    fontWeight: '700',
  },
  trustText: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.text,
    fontWeight: '500',
  },
  featuresSection: {
    paddingVertical: spacing.xl,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
  },
  featureCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    margin: spacing.xs,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: spacing.md,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
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
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepLeft: {
    alignItems: 'center',
    marginRight: spacing.md,
  },
  stepRing: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  stepConnector: {
    width: 2,
    height: 32,
    backgroundColor: colors.border,
    borderStyle: 'dashed',
    marginVertical: spacing.xs,
  },
  stepContent: {
    flex: 1,
    paddingBottom: spacing.lg,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  stepDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    textDecorationLine: 'underline',
  },
  trustCta: {
    backgroundColor: colors.primarySurface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginVertical: spacing.xl,
    alignItems: 'center',
  },
  trustCtaTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  trustCtaDescription: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'center',
    maxWidth: 600,
  },
  trustCtaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
  },
  trustCtaButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  blogPreview: {
    paddingVertical: spacing.xl,
  },
  blogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
  },
  blogCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  blogExcerpt: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
