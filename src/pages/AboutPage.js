import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'About mymatpay.com | Free NHS Maternity Pay Calculator',
    description: 'Learn about mymatpay.com, the free NHS maternity pay calculator built to help NHS staff understand their maternity pay entitlements.',
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="About NHS Maternity Pay Calculator"
          subtitle="Our mission is to help NHS staff understand their maternity pay entitlements"
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.paragraph}>
            We created the NHS Maternity Pay Calculator after hearing from countless NHS staff members
            who struggled to understand their maternity pay entitlements. The combination of occupational
            maternity pay, statutory maternity pay, tax, and National Insurance makes calculations complex
            and confusing.
          </Text>
          <Text style={styles.paragraph}>
            Our goal is simple: provide NHS staff with accurate, instant calculations so they can plan
            their finances with confidence during this important time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Values</Text>

          <View style={styles.valuesList}>
            {[
              { icon: '\uD83C\uDFAF', title: 'Accuracy', desc: "We keep our calculator updated with the latest tax rates, National Insurance thresholds, and NHS pay scales to ensure accurate results." },
              { icon: '\uD83D\uDD12', title: 'Privacy', desc: "All calculations happen in your browser. We don't store any personal information or salary data - your privacy is paramount." },
              { icon: '\uD83D\uDC99', title: 'NHS-Focused', desc: 'We built this specifically for NHS staff, with deep understanding of Agenda for Change terms and occupational maternity pay.' },
              { icon: '\uD83E\uDD1D', title: 'Transparency', desc: "We're transparent about how we make money (ads and affiliate partnerships) and how our calculations work." },
            ].map((value, i) => (
              <View key={i} style={[styles.valueItem, shadows.md]}>
                <Text style={styles.valueIcon}>{value.icon}</Text>
                <View style={styles.valueContent}>
                  <Text style={styles.valueTitle}>{value.title}</Text>
                  <Text style={styles.valueDescription}>{value.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How We Make Money</Text>
          <Text style={styles.paragraph}>
            This calculator is completely free to use. We generate revenue through:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              {'\u2022'} <Text style={styles.bold}>Advertisements:</Text> Non-intrusive ads displayed on some pages
            </Text>
            <Text style={styles.listItem}>
              {'\u2022'} <Text style={styles.bold}>Affiliate Partnerships:</Text> If you click on recommended
              financial products (like savings accounts or insurance), we may earn a small commission
            </Text>
            <Text style={styles.listItem}>
              {'\u2022'} <Text style={styles.bold}>B2B Licensing:</Text> We offer white-label calculator solutions
              to NHS Trusts who want to provide this tool to their staff
            </Text>
          </View>
          <Text style={styles.paragraph}>
            These revenue streams allow us to keep the calculator free for individual NHS staff members
            while continuing to maintain and improve the service.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Accuracy Commitment</Text>
          <Text style={styles.paragraph}>
            We update our calculator quarterly (or more frequently if tax rates or NHS pay scales change)
            to ensure accuracy. Our calculations are based on:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>{'\u2022'} Latest HMRC tax rates and thresholds</Text>
            <Text style={styles.listItem}>{'\u2022'} Current National Insurance contribution rates</Text>
            <Text style={styles.listItem}>{'\u2022'} NHS Agenda for Change terms and conditions</Text>
            <Text style={styles.listItem}>{'\u2022'} Current Statutory Maternity Pay rates</Text>
          </View>
          <Text style={styles.paragraph}>
            While we strive for accuracy, we always recommend verifying final amounts with your
            Trust's HR department, as individual circumstances may vary.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Commitment</Text>
          <Text style={styles.paragraph}>
            We take your privacy seriously:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              {'\u2022'} All calculations happen locally in your browser - we never see your salary or personal data
            </Text>
            <Text style={styles.listItem}>
              {'\u2022'} We don't require registration or login to use the calculator
            </Text>
            <Text style={styles.listItem}>
              {'\u2022'} We use analytics cookies to understand how visitors use the site, but these don't track personal information
            </Text>
            <Text style={styles.listItem}>
              {'\u2022'} We comply with GDPR and UK data protection laws
            </Text>
          </View>
          <Text style={styles.paragraph}>
            Read our full{' '}
            <Link to="/privacy" style={{ color: colors.primary, textDecorationLine: 'underline' }}>
              Privacy Policy
            </Link>
            {' '}for more details.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.paragraph}>
            Have feedback, questions, or spotted an error? We'd love to hear from you.
          </Text>
          <Link to="/contact" style={{ textDecoration: 'none', marginTop: spacing.md }}>
            <View style={[styles.contactButton, shadows.primary]}>
              <Text style={styles.contactButtonText}>Get in Touch {'\u2192'}</Text>
            </View>
          </Link>
        </View>

        <View style={styles.disclaimerSection}>
          <Text style={styles.disclaimerTitle}>Important Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            This calculator is for informational purposes only and should not be considered financial
            or legal advice. While we strive for accuracy, individual circumstances may affect your
            actual maternity pay. Always verify your entitlements with your Trust's HR department.
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
    marginBottom: spacing.xl * 2,
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
  valuesList: {
    gap: spacing.lg,
  },
  valueItem: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
  },
  valueIcon: {
    fontSize: 32,
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  valueDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },
  contactButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  disclaimerSection: {
    backgroundColor: colors.warningSurface,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  disclaimerText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
