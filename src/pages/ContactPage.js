import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us | mymatpay.com',
    description: 'Get in touch with the mymatpay.com team. We\'d love to hear your feedback or answer any questions about NHS maternity pay.',
  });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  const handleSubmit = () => {
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const inputStyle = (field) => [
    styles.input,
    focusedField === field && styles.inputFocused,
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="Contact Us"
          subtitle="Have questions, feedback, or spotted an error? We'd love to hear from you."
        />

        <View style={[styles.mainSection, isMobile && styles.mainSectionMobile]}>
          {/* Contact Form */}
          <View style={[styles.formSection, shadows.md]}>
            <Text style={styles.formTitle}>Send Us a Message</Text>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={inputStyle('name')}
                  placeholder="Your name"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.name}
                  onChangeText={(text) => setFormData({ ...formData, name: text })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={inputStyle('email')}
                  placeholder="your.email@example.com"
                  placeholderTextColor={colors.textSecondary}
                  keyboardType="email-address"
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Subject</Text>
                <TextInput
                  style={inputStyle('subject')}
                  placeholder="What's this about?"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.subject}
                  onChangeText={(text) => setFormData({ ...formData, subject: text })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={[...inputStyle('message'), styles.textarea]}
                  placeholder="Your message..."
                  placeholderTextColor={colors.textSecondary}
                  multiline
                  numberOfLines={6}
                  value={formData.message}
                  onChangeText={(text) => setFormData({ ...formData, message: text })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              <TouchableOpacity style={[styles.submitButton, shadows.primary]} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Contact Information */}
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Other Ways to Reach Us</Text>

            {[
              { icon: '\uD83D\uDCE7', title: 'Email', text: 'support@nhsmatpay.com', note: 'We respond within 48 hours' },
              { icon: '\uD83C\uDFE2', title: 'For NHS Trusts', text: 'trusts@nhsmatpay.com', note: 'Interested in our white-label solution?' },
              { icon: '\uD83D\uDC1B', title: 'Report an Error', text: 'errors@nhsmatpay.com', note: 'Please include details of the calculation and expected vs actual results' },
            ].map((method, i) => (
              <View key={i} style={[styles.contactMethod, shadows.sm]}>
                <Text style={styles.contactMethodIcon}>{method.icon}</Text>
                <View style={styles.contactMethodContent}>
                  <Text style={styles.contactMethodTitle}>{method.title}</Text>
                  <Text style={styles.contactMethodText}>{method.text}</Text>
                  <Text style={styles.contactMethodNote}>{method.note}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* FAQ Section */}
        <View style={[styles.faqSection, shadows.md]}>
          <Text style={styles.faqTitle}>Before You Contact Us</Text>
          <Text style={styles.faqDescription}>
            Many common questions are already answered in our FAQ page
          </Text>

          <View style={styles.commonQuestions}>
            {[
              { q: 'How is my maternity pay calculated?', a: 'See our complete guide explaining NHS occupational maternity pay structure' },
              { q: 'Is my data stored?', a: "No - all calculations happen in your browser. We don't store any personal data." },
              { q: 'Are the results accurate?', a: 'We update rates quarterly and strive for accuracy, but always verify with your HR department.' },
            ].map((item, i) => (
              <View key={i} style={styles.questionCard}>
                <Text style={styles.questionCardTitle}>{item.q}</Text>
                <Text style={styles.questionCardAnswer}>{item.a}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Response Time */}
        <View style={styles.responseSection}>
          <Text style={styles.responseTitle}>Response Time</Text>
          <Text style={styles.responseText}>
            We typically respond to all inquiries within 48 hours during business days (Monday-Friday).
            For urgent calculation errors, we aim to respond within 24 hours.
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
    maxWidth: 1000,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl * 2,
  },
  mainSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xl,
    marginBottom: spacing.xl * 2,
  },
  mainSectionMobile: {
    flexDirection: 'column',
  },
  formSection: {
    flex: 1,
    minWidth: 300,
    backgroundColor: colors.cardBackground,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  form: {
    gap: spacing.lg,
  },
  inputGroup: {
    gap: spacing.xs,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
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
  inputFocused: {
    borderColor: colors.primary,
  },
  textarea: {
    minHeight: 120,
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
  infoSection: {
    flex: 1,
    minWidth: 300,
    gap: spacing.lg,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  contactMethod: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
  },
  contactMethodIcon: {
    fontSize: 28,
  },
  contactMethodContent: {
    flex: 1,
  },
  contactMethodTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  contactMethodText: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.primary,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },
  contactMethodNote: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  faqSection: {
    backgroundColor: colors.cardBackground,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.xl,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  faqDescription: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  commonQuestions: {
    gap: spacing.md,
  },
  questionCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  questionCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  questionCardAnswer: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  responseSection: {
    backgroundColor: colors.primarySurface,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
  },
  responseTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  responseText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 20,
  },
});
