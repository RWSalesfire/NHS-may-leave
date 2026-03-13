import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Link, useParams } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import { Article } from '../components/SemanticWeb';
import UnderstandingNHSMaternityPay from './blog/UnderstandingNHSMaternityPay';
import BudgetingForMaternityLeave from './blog/BudgetingForMaternityLeave';
import MaternityPayByBand from './blog/MaternityPayByBand';
import NHSMaternityLeaveRights from './blog/NHSMaternityLeaveRights';
import ReturningToWorkAfterMaternity from './blog/ReturningToWorkAfterMaternity';
import KITDaysExplained from './blog/KITDaysExplained';

const BLOG_POSTS = [
  {
    title: "How Bank Shifts Can Boost Your NHS Maternity Pay",
    excerpt: "A practical guide to strategically timing extra shifts to maximise your average weekly earnings and increase your maternity pay. Learn what counts, what doesn't, and how to plan.",
    date: "March 2, 2026",
    category: "Financial Planning",
    slug: "bank-shifts-maternity-pay"
  },
  {
    title: "Understanding NHS Maternity Pay: A Complete Guide",
    excerpt: "Everything you need to know about NHS occupational maternity pay, including eligibility, payment structure, and how it compares to statutory maternity pay.",
    date: "March 1, 2026",
    category: "NHS Policy",
    slug: "understanding-nhs-maternity-pay"
  },
  {
    title: "Budgeting for Maternity Leave: Financial Planning Tips for NHS Staff",
    excerpt: "Practical advice on how to prepare financially for maternity leave, including budgeting strategies and money-saving tips.",
    date: "February 28, 2026",
    category: "Financial Planning",
    slug: "budgeting-for-maternity-leave"
  },
  {
    title: "Maternity Pay Differences: Band 2 vs Band 5 vs Band 8",
    excerpt: "How maternity pay varies across different NHS bands and what you can expect based on your salary grade.",
    date: "February 25, 2026",
    category: "NHS Specific",
    slug: "maternity-pay-by-band"
  },
  {
    title: "Your Rights: NHS Maternity Leave Policy Explained",
    excerpt: "A comprehensive guide to your legal rights during maternity leave, including job protection and return-to-work options.",
    date: "February 20, 2026",
    category: "Legal & Policy",
    slug: "nhs-maternity-leave-rights"
  },
  {
    title: "Returning to NHS Work After Maternity Leave: What to Expect",
    excerpt: "Tips and guidance for planning your return to work, including flexible working options and childcare considerations.",
    date: "February 15, 2026",
    category: "Returning to Work",
    slug: "returning-to-work-after-maternity"
  },
  {
    title: "Keeping in Touch (KIT) Days: How They Work",
    excerpt: "Everything you need to know about KIT days, including how to use them and how they affect your maternity pay.",
    date: "February 10, 2026",
    category: "NHS Policy",
    slug: "kit-days-explained"
  },
];

const CATEGORY_COLORS = {
  'NHS Policy': colors.primary,
  'Financial Planning': colors.sage,
  'NHS Specific': colors.accent,
  'Legal & Policy': colors.primaryDark,
  'Returning to Work': colors.sage,
};

function BankShiftsBlogPost({ post }) {
  return (
    <View>
      <View style={[styles.categoryPill, { backgroundColor: (CATEGORY_COLORS[post.category] || colors.primary) + '20', marginBottom: spacing.md }]}>
        <Text style={[styles.blogCategory, { color: CATEGORY_COLORS[post.category] || colors.primary }]}>
          {post.category}
        </Text>
      </View>
      <Text style={styles.articleTitle}>{post.title}</Text>
      <Text style={styles.articleDate}>{post.date}</Text>

      <Text style={styles.articleBody}>
        If you're expecting a baby and work for the NHS, there's a well-known strategy that could put hundreds — or even thousands — of extra pounds in your pocket during maternity leave: strategically picking up extra shifts before your maternity pay is calculated.
      </Text>

      <Text style={styles.articleHeading}>How Average Weekly Earnings (AWE) Works</Text>
      <Text style={styles.articleBody}>
        Your NHS maternity pay — both Statutory Maternity Pay (SMP) and Occupational Maternity Pay (OMP) — is calculated based on your <Text style={styles.articleBold}>average weekly earnings</Text> during a specific "relevant period." For monthly-paid staff, this is your <Text style={styles.articleBold}>last 2 monthly payslips</Text> before the Saturday of the qualifying week (the 15th week before your expected week of childbirth).
      </Text>
      <Text style={styles.articleBody}>
        Crucially, all earnings subject to National Insurance are included: base pay, overtime, bank shifts, unsocial hours premiums, on-call payments, and bonuses. The higher your AWE, the higher your maternity pay for the entire leave period.
      </Text>

      <Text style={styles.articleHeading}>Step-by-Step: Timing Your Extra Shifts</Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>1. Find your expected week of childbirth (EWC)</Text>{'\n'}
        This is the week your baby is due, starting from the Sunday.{'\n\n'}
        <Text style={styles.articleBold}>2. Count back 15 weeks</Text>{'\n'}
        This gives you your qualifying week. The Saturday of this week is the key date.{'\n\n'}
        <Text style={styles.articleBold}>3. Identify your last 2 monthly payslips before that Saturday</Text>{'\n'}
        These are the payslips that determine your AWE.{'\n\n'}
        <Text style={styles.articleBold}>4. Account for payroll lag</Text>{'\n'}
        Remember: it's when you're <Text style={styles.articleBold}>paid</Text>, not when you worked. Most NHS Trusts have a ~1 month lag, so shifts worked in January typically appear on your February payslip.{'\n\n'}
        <Text style={styles.articleBold}>5. Pick up extra shifts during the right window</Text>{'\n'}
        Maximise overtime, bank shifts, and unsocial hours during the period that will appear on those 2 critical payslips.
      </Text>

      <Text style={styles.articleHeading}>NHSP vs Trust Bank: An Important Distinction</Text>
      <Text style={styles.articleBody}>
        This is where many people get caught out. Bank shifts worked through <Text style={styles.articleBold}>NHS Professionals (NHSP)</Text> or external staffing agencies may <Text style={styles.articleBold}>not</Text> count towards your AWE. Why? Because NHSP and agencies are technically a different employer — their payments don't appear on your Trust payslip.
      </Text>
      <Text style={styles.articleBody}>
        Only extra shifts paid through your <Text style={styles.articleBold}>substantive employer's payroll</Text> (your Trust) are guaranteed to be included. If your Trust runs its own internal bank, those shifts will count. Always check with your payroll department if you're unsure.
      </Text>

      <Text style={styles.articleHeading}>Worked Example: The Financial Impact</Text>
      <Text style={styles.articleBody}>
        Let's say you're a Band 5 nurse earning {'\u00A3'}35,000 per year (approximately {'\u00A3'}673/week). During the 2-month calculation window, you pick up an average of {'\u00A3'}200/week in extra bank shifts through your Trust.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Without extra shifts:</Text> AWE = {'\u00A3'}673/week{'\n'}
        <Text style={styles.articleBold}>With extra shifts:</Text> AWE = {'\u00A3'}873/week{'\n\n'}
        On NHS Enhanced pay, that {'\u00A3'}200/week increase in AWE boosts your total gross maternity pay by over {'\u00A3'}3,000 across 39 weeks — with the biggest impact during the first 8 weeks (100% pay) and weeks 9-26 (50% pay + SMP).
      </Text>

      <Text style={styles.articleHeading}>Try It in Our Calculator</Text>
      <Text style={styles.articleBody}>
        We've added a "Bank Shifts & Overtime" feature to our maternity pay calculator. Enter your average extra weekly earnings during the calculation period, and you'll see exactly how much it boosts your take-home pay — with a side-by-side comparison of your pay with and without the extra shifts.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Try the Calculator {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This information is for general guidance only. Every Trust may handle payroll slightly differently. Always confirm the details with your Trust's HR or payroll team before making financial decisions based on this strategy.
      </Text>
    </View>
  );
}

function BlogPostView({ slug }) {
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <View style={styles.container}>
        <View style={styles.articleContent}>
          <Text style={styles.articleTitle}>Post Not Found</Text>
          <Text style={styles.articleBody}>This blog post doesn't exist yet.</Text>
          <Link to="/blog" style={{ textDecoration: 'none', marginTop: spacing.md }}>
            <Text style={styles.readMore}>{'\u2190'} Back to all articles</Text>
          </Link>
        </View>
      </View>
    );
  }

  const renderContent = () => {
    switch (slug) {
      case 'bank-shifts-maternity-pay':
        return <BankShiftsBlogPost post={post} />;
      case 'understanding-nhs-maternity-pay':
        return <UnderstandingNHSMaternityPay post={post} styles={styles} CATEGORY_COLORS={CATEGORY_COLORS} />;
      case 'budgeting-for-maternity-leave':
        return <BudgetingForMaternityLeave post={post} styles={styles} CATEGORY_COLORS={CATEGORY_COLORS} />;
      case 'maternity-pay-by-band':
        return <MaternityPayByBand post={post} styles={styles} CATEGORY_COLORS={CATEGORY_COLORS} />;
      case 'nhs-maternity-leave-rights':
        return <NHSMaternityLeaveRights post={post} styles={styles} CATEGORY_COLORS={CATEGORY_COLORS} />;
      case 'returning-to-work-after-maternity':
        return <ReturningToWorkAfterMaternity post={post} styles={styles} CATEGORY_COLORS={CATEGORY_COLORS} />;
      case 'kit-days-explained':
        return <KITDaysExplained post={post} styles={styles} CATEGORY_COLORS={CATEGORY_COLORS} />;
      default:
        return null;
    }
  };

  return (
    <Article style={styles.container}>
      <View style={styles.articleContent}>
        <Link to="/blog" style={{ textDecoration: 'none', marginBottom: spacing.lg }}>
          <Text style={styles.readMore}>{'\u2190'} Back to all articles</Text>
        </Link>
        {renderContent()}
      </View>
    </Article>
  );
}

export default function BlogPage() {
  const { slug } = useParams();
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  const cardWidth = isMobile ? '100%' : 520;

  // Find the post for per-post meta, or use blog index meta
  const post = slug ? BLOG_POSTS.find(p => p.slug === slug) : null;

  usePageMeta(post ? {
    title: `${post.title} | mymatpay.com`,
    description: post.excerpt,
  } : {
    title: 'NHS Maternity Pay Blog | Tips & Updates',
    description: 'Tips, guides, and updates about NHS maternity pay. Learn how to maximise your pay, budget for maternity leave, and understand your rights.',
  });

  if (slug) {
    return <BlogPostView slug={slug} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="Resources & Guides"
          subtitle="Helpful articles, tips, and guides for NHS maternity leave"
        />

        <View style={styles.blogGrid}>
          {BLOG_POSTS.map((post, index) => (
            <View key={index} style={[styles.blogCard, shadows.md, { width: cardWidth }]}>
              <View style={[styles.categoryPill, { backgroundColor: (CATEGORY_COLORS[post.category] || colors.primary) + '20' }]}>
                <Text style={[styles.blogCategory, { color: CATEGORY_COLORS[post.category] || colors.primary }]}>
                  {post.category}
                </Text>
              </View>
              <Text style={styles.blogTitle}>{post.title}</Text>
              <Text style={styles.blogDate}>{post.date}</Text>
              <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', marginTop: spacing.md }}>
                <Text style={styles.readMore}>Read more {'\u2192'}</Text>
              </Link>
            </View>
          ))}
        </View>
      </View>
    </View>
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
    paddingVertical: spacing.xl * 2,
  },
  blogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  blogCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm + 2,
    borderRadius: borderRadius.pill,
    marginBottom: spacing.sm,
  },
  blogCategory: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  blogDate: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  blogExcerpt: {
    fontSize: 15,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  readMore: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  articleContent: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl * 2,
  },
  articleTitle: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
    marginBottom: spacing.sm,
    lineHeight: 36,
  },
  articleDate: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  articleHeading: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  articleBody: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
  articleBold: {
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
});
