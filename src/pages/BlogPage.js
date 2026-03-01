import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing } from '../constants/theme';

// Placeholder blog posts
const BLOG_POSTS = [
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

export default function BlogPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Resources & Guides</Text>
        <Text style={styles.subtitle}>
          Helpful articles, tips, and guides for NHS maternity leave
        </Text>

        <View style={styles.blogGrid}>
          {BLOG_POSTS.map((post, index) => (
            <View key={index} style={styles.blogCard}>
              <Text style={styles.blogCategory}>{post.category}</Text>
              <Text style={styles.blogTitle}>{post.title}</Text>
              <Text style={styles.blogDate}>{post.date}</Text>
              <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', marginTop: spacing.md }}>
                <Text style={styles.readMore}>Read more →</Text>
              </Link>
            </View>
          ))}
        </View>

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonTitle}>More Articles Coming Soon!</Text>
          <Text style={styles.comingSoonText}>
            We're working on creating comprehensive guides and resources for NHS staff.
            Check back regularly for new articles.
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
    maxWidth: 1200,
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
    marginBottom: spacing.xl * 2,
  },
  blogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  blogCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: spacing.lg,
    width: '100%',
    maxWidth: 550,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  blogCategory: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
    marginBottom: spacing.xs,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  blogDate: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  blogExcerpt: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  readMore: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  comingSoon: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: spacing.xl,
    marginTop: spacing.xl * 2,
    alignItems: 'center',
  },
  comingSoonTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  comingSoonText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
