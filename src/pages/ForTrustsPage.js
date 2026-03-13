import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import { H2, Section } from '../components/SemanticWeb';

export default function ForTrustsPage() {
  usePageMeta({
    title: 'For NHS Trusts | Maternity Pay Calculator',
    description: 'White-label NHS maternity pay calculator for NHS Trusts. Help your staff understand their maternity pay entitlements with an accurate, easy-to-use tool.',
  });
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  const [formData, setFormData] = useState({ trustName: '', name: '', role: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleDemoSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.trustName.trim()) {
      setError('Please fill in trust name, your name, and email.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xkgwlpdn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, _subject: 'Trust Demo Request' }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ trustName: '', name: '', role: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try emailing us directly at trusts@nhsmatpay.com.');
      }
    } catch {
      setError('Something went wrong. Please try emailing us directly at trusts@nhsmatpay.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <PageHeader
            title="White-Label Calculator for NHS Trusts"
            subtitle="Empower your staff with accurate maternity pay calculations"
          />
        </View>

        {/* Problem Statement */}
        <View style={styles.section}>
          <H2 style={styles.sectionTitle}>The Challenge</H2>
          <Text style={styles.paragraph}>
            HR departments spend countless hours answering maternity pay questions and helping staff
            calculate their entitlements. Staff often feel uncertain about their financial situation
            during a time that should be focused on their growing family.
          </Text>
        </View>

        {/* Solution */}
        <View style={styles.section}>
          <H2 style={styles.sectionTitle}>Our Solution</H2>
          <Text style={styles.paragraph}>
            A white-label maternity pay calculator that integrates seamlessly with your Trust's intranet
            or HR portal, providing staff with instant, accurate calculations while reducing the burden
            on your HR team.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <H2 style={styles.sectionTitle}>Features</H2>

          <View style={styles.featuresList}>
            {[
              { icon: '\uD83C\uDFA8', title: 'Custom Branding', desc: "Your Trust's logo, colors, and branding throughout the calculator" },
              { icon: '\u2699\uFE0F', title: 'Trust-Specific Settings', desc: 'Customize for your local policies, additional benefits, or special circumstances' },
              { icon: '\uD83D\uDCCA', title: 'Usage Analytics', desc: 'Track usage metrics to understand staff engagement and common queries' },
              { icon: '\u2705', title: 'Always Up-to-Date', desc: 'Automatically updated with latest tax rates and NHS pay scales' },
              { icon: '\uD83D\uDD12', title: 'GDPR Compliant', desc: 'All calculations happen in the browser - no personal data is stored' },
              { icon: '\uD83D\uDCBB', title: 'Easy Integration', desc: 'Simple embed code or iframe integration with your existing systems' },
            ].map((feature, i) => (
              <View key={i} style={[styles.featureItem, shadows.md]}>
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <H2 style={styles.sectionTitle}>Benefits for Your Trust</H2>

          <View style={styles.benefitsList}>
            {[
              { icon: '\u23F1\uFE0F', title: 'Reduce HR Workload', desc: 'Estimated 200+ hours saved per year on maternity pay queries' },
              { icon: '\uD83D\uDE0A', title: 'Improve Staff Experience', desc: 'Empower staff with self-service tools and instant answers' },
              { icon: '\uD83D\uDCC8', title: 'Better Planning', desc: 'Help staff plan financially for maternity leave, reducing stress' },
            ].map((benefit, i) => (
              <View key={i} style={styles.benefitItem}>
                <Text style={styles.benefitNumber}>{benefit.icon}</Text>
                <View style={styles.benefitContent}>
                  <Text style={styles.benefitTitle}>{benefit.title}</Text>
                  <Text style={styles.benefitDescription}>{benefit.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Form */}
        <View style={[styles.contactSection, shadows.md]}>
          <Text style={styles.contactTitle}>Request a Demo</Text>
          <Text style={styles.contactDescription}>
            Interested in bringing this calculator to your Trust? Get in touch for a personalized demo.
          </Text>

          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Trust Name" placeholderTextColor={colors.textSecondary} value={formData.trustName} onChangeText={(text) => setFormData({ ...formData, trustName: text })} accessibilityLabel="Trust name" autoComplete="organization" />
            <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor={colors.textSecondary} value={formData.name} onChangeText={(text) => setFormData({ ...formData, name: text })} accessibilityLabel="Your name" autoComplete="name" />
            <TextInput style={styles.input} placeholder="Your Role (e.g., HR Director)" placeholderTextColor={colors.textSecondary} value={formData.role} onChangeText={(text) => setFormData({ ...formData, role: text })} accessibilityLabel="Your role" />
            <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor={colors.textSecondary} keyboardType="email-address" value={formData.email} onChangeText={(text) => setFormData({ ...formData, email: text })} accessibilityLabel="Email address" autoComplete="email" />
            <TextInput style={[styles.input, styles.textarea]} placeholder="Message (optional)" placeholderTextColor={colors.textSecondary} multiline numberOfLines={4} value={formData.message} onChangeText={(text) => setFormData({ ...formData, message: text })} accessibilityLabel="Message" />

            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}

            {submitted ? (
              <View style={styles.successBox}>
                <Text style={styles.successText}>Thank you for your interest. We will be in touch within 48 hours.</Text>
              </View>
            ) : (
              <TouchableOpacity
                style={[styles.submitButton, shadows.primary, submitting && { opacity: 0.6 }]}
                onPress={handleDemoSubmit}
                disabled={submitting}
                accessibilityRole="button"
                accessibilityLabel={submitting ? 'Sending demo request' : 'Request demo'}
              >
                <Text style={styles.submitButtonText}>{submitting ? 'Sending...' : 'Request Demo'}</Text>
              </TouchableOpacity>
            )}

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
            <View style={[styles.tryButton, shadows.primary]}>
              <Text style={styles.tryButtonText}>Use the Calculator {'\u2192'}</Text>
            </View>
          </Link>
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
    maxWidth: 900,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl * 2,
  },
  hero: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.xl * 2,
  },
  sectionTitle: {
    fontSize: 28,
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
  },
  featuresList: {
    gap: spacing.lg,
  },
  featureItem: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
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
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
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
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  benefitDescription: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl * 2,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  contactDescription: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.md,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  submitButtonText: {
    color: colors.cardBackground,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  formNote: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  email: {
    color: colors.primary,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  trySection: {
    backgroundColor: colors.primarySurface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
  },
  tryTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  tryDescription: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'center',
  },
  tryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
  },
  tryButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  errorText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: '#D32F2F',
  },
  successBox: {
    backgroundColor: '#E8F5E9',
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
  successText: {
    fontSize: 15,
    fontFamily: fontFamily.medium,
    color: '#2E7D32',
    textAlign: 'center',
  },
});
