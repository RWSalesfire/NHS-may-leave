import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { colors, spacing, fontFamily, borderRadius } from '../constants/theme';
import usePageMeta from '../hooks/usePageMeta';
import { H1 } from '../components/SemanticWeb';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | mymatpay.com',
    description: 'The page you are looking for could not be found. Use our NHS maternity pay calculator or browse our guide and FAQ.',
  });
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  return (
    <View style={[styles.container, styles.content]}>
      <View style={[styles.card, isMobile && styles.cardMobile]}>
        <Text style={styles.errorCode}>404</Text>
        <H1 style={styles.title}>Page Not Found</H1>
        <Text style={styles.description}>
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigate('/calculator')}
            accessibilityRole="button"
          >
            <Text style={styles.primaryButtonText}>Go to Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigate('/')}
            accessibilityRole="button"
          >
            <Text style={styles.secondaryButtonText}>Back to Home</Text>
          </TouchableOpacity>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    minHeight: 500,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    padding: spacing.xxl,
    alignItems: 'center',
    maxWidth: 480,
    width: '100%',
  },
  cardMobile: {
    padding: spacing.lg,
  },
  errorCode: {
    fontSize: 80,
    fontFamily: fontFamily.bold,
    color: colors.primaryLight,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  buttonRow: {
    flexDirection: 'column',
    gap: spacing.sm,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fontFamily.medium,
  },
});
