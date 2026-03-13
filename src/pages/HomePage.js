import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import usePageMeta from '../hooks/usePageMeta';
import { H1, H2, Section, Article } from '../components/SemanticWeb';
import AdUnit from '../components/AdUnit';

/* ─── Custom Icons (replacing emojis) ─── */

function IconBars() {
  return (
    <View style={[iconStyles.wrapperCircle, { backgroundColor: colors.primarySurface }]}>
      <View style={iconStyles.barsContainer}>
        <View style={[iconStyles.bar, { height: 10, backgroundColor: colors.primaryMuted }]} />
        <View style={[iconStyles.bar, { height: 18, backgroundColor: colors.primary }]} />
        <View style={[iconStyles.bar, { height: 14, backgroundColor: colors.primaryLight }]} />
      </View>
    </View>
  );
}

function IconTarget() {
  return (
    <View style={[iconStyles.wrapperCircle, { backgroundColor: colors.sageSoft }]}>
      <View style={iconStyles.targetOuter}>
        <View style={iconStyles.targetMiddle}>
          <View style={iconStyles.targetInner} />
        </View>
      </View>
    </View>
  );
}

function IconClock() {
  return (
    <View style={[iconStyles.wrapperCircle, { backgroundColor: colors.accentSoft }]}>
      <View style={iconStyles.clockFace}>
        <View style={iconStyles.clockHandV} />
        <View style={iconStyles.clockHandH} />
        <View style={iconStyles.clockCenter} />
      </View>
    </View>
  );
}

function IconShield() {
  return (
    <View style={[iconStyles.wrapperCircle, { backgroundColor: colors.primarySurface }]}>
      <View style={iconStyles.shield}>
        <View style={iconStyles.shieldCheck}>
          <View style={iconStyles.checkShort} />
          <View style={iconStyles.checkLong} />
        </View>
      </View>
    </View>
  );
}

const iconStyles = StyleSheet.create({
  wrapperCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
  },
  bar: {
    width: 6,
    borderRadius: 3,
  },
  targetOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: colors.sage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetMiddle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.sage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetInner: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.sage,
  },
  clockFace: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockHandV: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: colors.accent,
    top: 4,
    borderRadius: 1,
  },
  clockHandH: {
    position: 'absolute',
    width: 6,
    height: 2,
    backgroundColor: colors.accent,
    right: 4,
    top: 10,
    borderRadius: 1,
  },
  clockCenter: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.accent,
  },
  shield: {
    width: 20,
    height: 24,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldCheck: {
    width: 12,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkShort: {
    position: 'absolute',
    width: 2,
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    transform: [{ rotate: '-45deg' }],
    left: 2,
    top: 3,
  },
  checkLong: {
    position: 'absolute',
    width: 2,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    transform: [{ rotate: '35deg' }],
    right: 2,
    top: -1,
  },
});

/* ─── Sub-components ─── */

function TrustPill({ text }) {
  return (
    <View style={styles.trustPill}>
      <View style={styles.trustDot} />
      <Text style={styles.trustPillText}>{text}</Text>
    </View>
  );
}

function FeatureCard({ icon, title, description, isMobile }) {
  if (isMobile) {
    return (
      <View style={[styles.featureCardMobile, shadows.sm]}>
        <View style={styles.featureHeaderMobile}>
          {icon}
          <Text style={styles.featureTitleMobile}>{title}</Text>
        </View>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    );
  }
  return (
    <View style={[styles.featureCard, shadows.sm]}>
      <View style={{ marginBottom: spacing.md }}>{icon}</View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

function StepItemMobile({ number, title, description, isLast }) {
  return (
    <View style={styles.stepMobile}>
      <View style={styles.stepLeftMobile}>
        <View style={styles.stepCircle}>
          <Text style={styles.stepNumber}>{number}</Text>
        </View>
        {!isLast && <View style={styles.stepLineMobile} />}
      </View>
      <View style={styles.stepBodyMobile}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDesc}>{description}</Text>
      </View>
    </View>
  );
}

function StepItemDesktop({ number, title, description, isLast }) {
  return (
    <View style={styles.stepDesktop}>
      <View style={styles.stepTopRow}>
        <View style={styles.stepCircle}>
          <Text style={styles.stepNumber}>{number}</Text>
        </View>
        {!isLast && <View style={styles.stepLineDesktop} />}
      </View>
      <Text style={styles.stepTitleDesktop}>{title}</Text>
      <Text style={styles.stepDescDesktop}>{description}</Text>
    </View>
  );
}

function BlogCard({ title, excerpt, to, isMobile }) {
  return (
    <View style={[
      styles.blogCard,
      shadows.sm,
      isMobile && styles.blogCardMobile,
    ]}>
      <View style={styles.blogAccent} />
      <View style={styles.blogContent}>
        <Text style={styles.blogTitle}>{title}</Text>
        <Text style={styles.blogExcerpt}>{excerpt}</Text>
        <Link to={to} style={{ textDecoration: 'none', marginTop: spacing.sm + 4 }}>
          <Text style={styles.blogLink}>Read article</Text>
        </Link>
      </View>
    </View>
  );
}

/* ─── Main Page ─── */

export default function HomePage() {
  usePageMeta({
    title: 'NHS Maternity Pay Calculator - Free Estimate for NHS Staff',
    description: 'Free NHS maternity pay calculator. Estimate your Occupational Maternity Pay, SMP, and total leave income based on your NHS pay band. Instant results, no sign-up.',
  });
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  const isDesktop = width >= 1024;

  const steps = [
    { number: '1', title: 'Enter your details', description: 'Your salary, NHS band, pension rate, and how long you plan to take' },
    { number: '2', title: 'See your breakdown', description: 'Total maternity pay, weekly amounts, and net take-home after tax' },
    { number: '3', title: 'Plan your finances', description: 'Use the results to budget confidently for your maternity leave' },
  ];

  const blogs = [
    { title: 'Understanding NHS Maternity Pay', excerpt: 'A complete guide to NHS occupational maternity pay vs statutory maternity pay', to: '/blog/understanding-nhs-maternity-pay' },
    { title: 'Budgeting for Maternity Leave', excerpt: 'Financial planning tips for NHS staff going on maternity leave', to: '/blog/budgeting-for-maternity-leave' },
    { title: 'How Bank Shifts Boost Your Pay', excerpt: 'Strategically timing extra shifts to maximise your average weekly earnings', to: '/blog/bank-shifts-maternity-pay' },
  ];

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <LinearGradient
        colors={[colors.heroGradientStart, colors.heroGradientEnd]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.heroGradient}
      >
        <View style={[styles.heroInner, isMobile && styles.heroInnerMobile]}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Updated for 2026/27 Tax Year</Text>
          </View>

          <H1 style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
            Know exactly what{'\n'}you'll take home on{' '}
            <Text style={styles.heroTitleAccent}>maternity leave</Text>
          </H1>

          <Text style={[styles.heroDescription, isMobile && styles.heroDescMobile]}>
            The free calculator built specifically for NHS staff. Get your week-by-week
            maternity pay breakdown in seconds, including occupational and statutory pay.
          </Text>

          <Link to="/calculator" style={{ textDecoration: 'none', marginTop: isMobile ? spacing.lg : spacing.xl }}>
            <View style={[styles.ctaButton, shadows.primary]}>
              <Text style={styles.ctaText}>Calculate your maternity pay</Text>
              <View style={styles.ctaArrow}>
                <Text style={styles.ctaArrowText}>{'\u2192'}</Text>
              </View>
            </View>
          </Link>

          <View style={[styles.trustRow, isMobile && styles.trustRowMobile]}>
            <TrustPill text="Latest NHS AFC rates" />
            <TrustPill text="100% free, no sign-up" />
            <TrustPill text="Includes occupational pay" />
          </View>
        </View>
      </LinearGradient>

      <View style={[styles.content, isMobile && styles.contentMobile]}>
        {/* Features Section */}
        <Section style={[styles.section, isMobile && styles.sectionMobile]}>
          <Text style={styles.sectionLabel}>Why this calculator</Text>
          <H2 style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            Built for NHS staff, by people who understand the system
          </H2>

          <View style={[styles.featureGrid, isMobile && styles.featureGridMobile]}>
            <FeatureCard
              icon={<IconBars />}
              title="NHS-specific"
              description="Designed around Agenda for Change pay bands and NHS occupational maternity pay rules"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<IconTarget />}
              title="Accurate results"
              description="Calculates both occupational and statutory maternity pay with current tax rates and NI"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<IconClock />}
              title="Instant breakdown"
              description="See your week-by-week take-home pay in seconds, so you can plan with confidence"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<IconShield />}
              title="Private and secure"
              description="Everything runs in your browser. We never store your salary or personal details"
              isMobile={isMobile}
            />
          </View>
        </Section>

        {/* How It Works */}
        <Section style={[styles.section, isMobile && styles.sectionMobile]}>
          <Text style={styles.sectionLabel}>How it works</Text>
          <H2 style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            Three steps to clarity
          </H2>

          {isDesktop ? (
            <View style={styles.stepsRow}>
              {steps.map((s, i) => (
                <StepItemDesktop key={i} {...s} isLast={i === steps.length - 1} />
              ))}
            </View>
          ) : (
            <View style={styles.stepsColumn}>
              {steps.map((s, i) => (
                <StepItemMobile key={i} {...s} isLast={i === steps.length - 1} />
              ))}
            </View>
          )}

          <Link to="/guide" style={{ textDecoration: 'none', alignSelf: 'center', marginTop: isMobile ? spacing.lg : spacing.xl }}>
            <Text style={styles.textLink}>Learn more about NHS maternity pay</Text>
          </Link>
        </Section>

        <AdUnit slot="2240359644" style={{ marginVertical: spacing.md }} />

        {/* NHS Trust CTA */}
        <View style={[styles.trustCta, shadows.sm, isMobile && styles.trustCtaMobile]}>
          <View style={styles.trustCtaAccent} />
          <View style={[styles.trustCtaContent, isMobile && styles.trustCtaContentMobile]}>
            <Text style={styles.trustCtaLabel}>For NHS Trusts</Text>
            <Text style={[styles.trustCtaTitle, isMobile && styles.trustCtaTitleMobile]}>
              Support your staff with a white-label calculator
            </Text>
            <Text style={styles.trustCtaDesc}>
              Offer your employees a branded maternity pay tool as part of your HR resources
            </Text>
            <Link to="/for-trusts" style={{ textDecoration: 'none', marginTop: spacing.md, alignSelf: 'flex-start' }}>
              <View style={styles.trustCtaBtn}>
                <Text style={styles.trustCtaBtnText}>Find out more</Text>
              </View>
            </Link>
          </View>
        </View>

        {/* Resources */}
        <Section style={[styles.section, isMobile && styles.sectionMobile]}>
          <Text style={styles.sectionLabel}>Resources</Text>
          <H2 style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            Guides to help you prepare
          </H2>

          <View style={[styles.blogGrid, isMobile && styles.blogGridMobile]}>
            {blogs.map((post, i) => (
              <BlogCard key={i} {...post} isMobile={isMobile} />
            ))}
          </View>
        </Section>
      </View>
    </View>
  );
}

/* ─── Styles ─── */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  /* Hero */
  heroGradient: {
    width: '100%',
  },
  heroInner: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl + 24,
    paddingHorizontal: spacing.lg,
  },
  heroInnerMobile: {
    paddingVertical: spacing.xl + 8,
    paddingHorizontal: spacing.md + 4,
  },
  heroBadge: {
    backgroundColor: colors.cardBackground,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.pill,
    borderWidth: 1,
    borderColor: colors.borderLight,
    marginBottom: spacing.lg,
  },
  heroBadgeText: {
    fontSize: 13,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 0.2,
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 50,
    letterSpacing: -0.5,
  },
  heroTitleMobile: {
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.3,
  },
  heroTitleAccent: {
    color: colors.primary,
  },
  heroDescription: {
    fontSize: 17,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 580,
    lineHeight: 26,
    marginTop: spacing.md,
  },
  heroDescMobile: {
    fontSize: 15,
    lineHeight: 23,
    marginTop: spacing.sm + 4,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingLeft: spacing.xl,
    paddingRight: spacing.md,
    borderRadius: borderRadius.pill,
    gap: spacing.md,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  ctaArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaArrowText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  trustRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  trustRowMobile: {
    marginTop: spacing.lg,
    gap: spacing.sm + 4,
  },
  trustPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  trustDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.sage,
  },
  trustPillText: {
    fontSize: 13,
    fontFamily: fontFamily.medium,
    fontWeight: '500',
    color: colors.textSecondary,
  },

  /* Content wrapper */
  content: {
    maxWidth: 1120,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  contentMobile: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },

  /* Sections */
  section: {
    paddingVertical: spacing.xxl,
    alignItems: 'center',
  },
  sectionMobile: {
    paddingVertical: spacing.xl,
  },
  sectionLabel: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 38,
    letterSpacing: -0.3,
  },
  sectionTitleMobile: {
    fontSize: 22,
    lineHeight: 30,
    marginBottom: spacing.lg,
  },

  /* Feature cards */
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
    width: '100%',
  },
  featureGridMobile: {
    gap: spacing.sm + 4,
  },
  featureCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    width: 260,
  },
  featureCardMobile: {
    width: '100%',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  featureHeaderMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 4,
    marginBottom: spacing.xs + 2,
  },
  featureTitleMobile: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 21,
  },

  /* Steps - Mobile (vertical timeline) */
  stepsColumn: {
    width: '100%',
    maxWidth: 480,
    paddingLeft: spacing.xs,
  },
  stepMobile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepLeftMobile: {
    alignItems: 'center',
    marginRight: spacing.md,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  stepLineMobile: {
    width: 2,
    height: 24,
    backgroundColor: colors.border,
    marginVertical: spacing.xs,
  },
  stepBodyMobile: {
    flex: 1,
    paddingBottom: spacing.md,
    paddingTop: 2,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  stepDesc: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 21,
  },

  /* Steps - Desktop (horizontal) */
  stepsRow: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 800,
    justifyContent: 'center',
  },
  stepDesktop: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  stepTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: spacing.md,
    justifyContent: 'center',
  },
  stepLineDesktop: {
    flex: 1,
    height: 2,
    backgroundColor: colors.border,
    marginLeft: spacing.sm,
  },
  stepTitleDesktop: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  stepDescDesktop: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 21,
    textAlign: 'center',
  },

  textLink: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },

  /* Trust CTA */
  trustCta: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    marginVertical: spacing.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  trustCtaMobile: {
    marginVertical: spacing.md,
  },
  trustCtaAccent: {
    width: 4,
    backgroundColor: colors.primary,
  },
  trustCtaContent: {
    flex: 1,
    padding: spacing.xl + 4,
  },
  trustCtaContentMobile: {
    padding: spacing.lg,
  },
  trustCtaLabel: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: spacing.sm,
  },
  trustCtaTitle: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
    marginBottom: spacing.sm,
    lineHeight: 30,
  },
  trustCtaTitleMobile: {
    fontSize: 19,
    lineHeight: 26,
  },
  trustCtaDesc: {
    fontSize: 15,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 23,
    maxWidth: 520,
  },
  trustCtaBtn: {
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.pill,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  trustCtaBtnText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },

  /* Blog */
  blogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
    width: '100%',
  },
  blogGridMobile: {
    gap: spacing.sm + 4,
  },
  blogCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderLight,
    width: 340,
  },
  blogCardMobile: {
    width: '100%',
  },
  blogAccent: {
    width: 3,
    backgroundColor: colors.accentLight,
  },
  blogContent: {
    flex: 1,
    padding: spacing.md + 4,
  },
  blogTitle: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
    lineHeight: 21,
  },
  blogExcerpt: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  blogLink: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
});
