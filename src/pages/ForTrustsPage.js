import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing } from '../constants/theme';

export default function ForTrustsPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>White-Label Calculator for NHS Trusts</Text>
          <Text style={styles.heroSubtitle}>
            Empower your staff with accurate maternity pay calculations
          </Text>
        </View>

        {/* Problem Statement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Challenge</Text>
          <Text style={styles.paragraph}>
            HR departments spend countless hours answering maternity pay questions and helping staff
            calculate their entitlements. Staff often feel uncertain about their financial situation
            during a time that should be focused on their growing family.
          </Text>
        </View>

        {/* Solution */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Solution</Text>
          <Text style={styles.paragraph}>
            A white-label maternity pay calculator that integrates seamlessly with your Trust's intranet
            or HR portal, providing staff with instant, accurate calculations while reducing the burden
            on your HR team.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>

          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎨</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Custom Branding</Text>
                <Text style={styles.featureDescription}>
                  Your Trust's logo, colors, and branding throughout the calculator
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>⚙️</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Trust-Specific Settings</Text>
                <Text style={styles.featureDescription}>
                  Customize for your local policies, additional benefits, or special circumstances
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📊</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Usage Analytics</Text>
                <Text style={styles.featureDescription}>
                  Track usage metrics to understand staff engagement and common queries
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>✅</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Always Up-to-Date</Text>
                <Text style={styles.featureDescription}>
                  Automatically updated with latest tax rates and NHS pay scales
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🔒</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>GDPR Compliant</Text>
                <Text style={styles.featureDescription}>
                  All calculations happen in the browser - no personal data is stored
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>💻</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Easy Integration</Text>
                <Text style={styles.featureDescription}>
                  Simple embed code or iframe integration with your existing systems
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits for Your Trust</Text>

          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitNumber}>⏱️</Text>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Reduce HR Workload</Text>
                <Text style={styles.benefitDescription}>
                  Estimated 200+ hours saved per year on maternity pay queries
                </Text>
              </View>
            </View>

            <View style={styles.benefitItem}>
              <Text style={styles.benefitNumber}>😊</Text>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Improve Staff Experience</Text>
                <Text style={styles.benefitDescription}>
                  Empower staff with self-service tools and instant answers
                </Text>
              </View>
            </View>

            <View style={styles.benefitItem}>
              <Text style={styles.benefitNumber}>📈</Text>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Better Planning</Text>
                <Text style={styles.benefitDescription}>
                  Help staff plan financially for maternity leave, reducing stress
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Request a Demo</Text>
          <Text style={styles.contactDescription}>
            Interested in bringing this calculator to your Trust? Get in touch for a personalized demo.
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Trust Name"
              placeholderTextColor={colors.textSecondary}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor={colors.textSecondary}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Role (e.g., HR Director)"
              placeholderTextColor={colors.textSecondary}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor={colors.textSecondary}
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Message (optional)"
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={4}
            />

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Request Demo</Text>
            </TouchableOpacity>

            <Text style={styles.formNote}>
              Or email us directly at: <Text style={styles.email}>trusts@nhsmatpay.com</Text>
            </Text>
          </View>
        </View>

        {/* Try It First */}
        <View style={styles.trySection}>
          <Text style={styles.tryTitle}>Try It Yourself First</Text>
          <Text style={styles.tryDescription}>
            See how the calculator works before requesting a demo
          </Text>
          <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md }}>
            <View style={styles.tryButton}>
              <Text style={styles.tryButtonText}>Use the Calculator →</Text>
            </View>
          </Link>
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
    maxWidth: 900,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl * 2,
  },
  hero: {
    alignItems: 'center',
    marginBottom: spacing.xl * 2,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    fontSize: 20,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    marginBottom: spacing.xl * 2,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  paragraph: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  featuresList: {
    gap: spacing.lg,
  },
  featureItem: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: 8,
  },
  featureIcon: {
    fontSize: 32,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  benefitsList: {
    gap: spacing.lg,
  },
  benefitItem: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  benefitNumber: {
    fontSize: 32,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  benefitDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: spacing.xl,
    marginBottom: spacing.xl * 2,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  contactDescription: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.md,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  submitButtonText: {
    color: colors.cardBackground,
    fontSize: 18,
    fontWeight: '600',
  },
  formNote: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  email: {
    color: colors.primary,
    fontWeight: '600',
  },
  trySection: {
    backgroundColor: colors.primary + '10',
    borderRadius: 12,
    padding: spacing.xl,
    alignItems: 'center',
  },
  tryTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  tryDescription: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
  tryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
  },
  tryButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
  },
});
