import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = () => {
    // This is a placeholder - you'll integrate with a real form submission service later
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          Have questions, feedback, or spotted an error? We'd love to hear from you.
        </Text>

        <View style={styles.mainSection}>
          {/* Contact Form */}
          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Send Us a Message</Text>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your name"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.name}
                  onChangeText={(text) => setFormData({ ...formData, name: text })}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="your.email@example.com"
                  placeholderTextColor={colors.textSecondary}
                  keyboardType="email-address"
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Subject</Text>
                <TextInput
                  style={styles.input}
                  placeholder="What's this about?"
                  placeholderTextColor={colors.textSecondary}
                  value={formData.subject}
                  onChangeText={(text) => setFormData({ ...formData, subject: text })}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={[styles.input, styles.textarea]}
                  placeholder="Your message..."
                  placeholderTextColor={colors.textSecondary}
                  multiline
                  numberOfLines={6}
                  value={formData.message}
                  onChangeText={(text) => setFormData({ ...formData, message: text })}
                />
              </View>

              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Contact Information */}
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Other Ways to Reach Us</Text>

            <View style={styles.contactMethod}>
              <Text style={styles.contactMethodIcon}>📧</Text>
              <View style={styles.contactMethodContent}>
                <Text style={styles.contactMethodTitle}>Email</Text>
                <Text style={styles.contactMethodText}>support@nhsmatpay.com</Text>
                <Text style={styles.contactMethodNote}>We respond within 48 hours</Text>
              </View>
            </View>

            <View style={styles.contactMethod}>
              <Text style={styles.contactMethodIcon}>🏢</Text>
              <View style={styles.contactMethodContent}>
                <Text style={styles.contactMethodTitle}>For NHS Trusts</Text>
                <Text style={styles.contactMethodText}>trusts@nhsmatpay.com</Text>
                <Text style={styles.contactMethodNote}>Interested in our white-label solution?</Text>
              </View>
            </View>

            <View style={styles.contactMethod}>
              <Text style={styles.contactMethodIcon}>🐛</Text>
              <View style={styles.contactMethodContent}>
                <Text style={styles.contactMethodTitle}>Report an Error</Text>
                <Text style={styles.contactMethodText}>errors@nhsmatpay.com</Text>
                <Text style={styles.contactMethodNote}>
                  Please include details of the calculation and expected vs actual results
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Before You Contact Us</Text>
          <Text style={styles.faqDescription}>
            Many common questions are already answered in our FAQ page
          </Text>

          <View style={styles.commonQuestions}>
            <View style={styles.questionCard}>
              <Text style={styles.questionCardTitle}>How is my maternity pay calculated?</Text>
              <Text style={styles.questionCardAnswer}>
                See our complete guide explaining NHS occupational maternity pay structure
              </Text>
            </View>

            <View style={styles.questionCard}>
              <Text style={styles.questionCardTitle}>Is my data stored?</Text>
              <Text style={styles.questionCardAnswer}>
                No - all calculations happen in your browser. We don't store any personal data.
              </Text>
            </View>

            <View style={styles.questionCard}>
              <Text style={styles.questionCardTitle}>Are the results accurate?</Text>
              <Text style={styles.questionCardAnswer}>
                We update rates quarterly and strive for accuracy, but always verify with your HR department.
              </Text>
            </View>
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
  mainSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xl,
    marginBottom: spacing.xl * 2,
  },
  formSection: {
    flex: 1,
    minWidth: 300,
    backgroundColor: colors.cardBackground,
    padding: spacing.xl,
    borderRadius: 12,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
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
    color: colors.text,
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
    minHeight: 120,
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
  infoSection: {
    flex: 1,
    minWidth: 300,
    gap: spacing.lg,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  contactMethod: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: 8,
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
    color: colors.text,
    marginBottom: spacing.xs,
  },
  contactMethodText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    marginBottom: spacing.xs,
  },
  contactMethodNote: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  faqSection: {
    backgroundColor: colors.cardBackground,
    padding: spacing.xl,
    borderRadius: 12,
    marginBottom: spacing.xl,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  faqDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  commonQuestions: {
    gap: spacing.md,
  },
  questionCard: {
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  questionCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  questionCardAnswer: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  responseSection: {
    backgroundColor: colors.primary + '10',
    padding: spacing.lg,
    borderRadius: 8,
  },
  responseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  responseText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});
