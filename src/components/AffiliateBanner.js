import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import { trackEvent } from '../utils/analytics';

export default function AffiliateBanner({ title, description, ctaText, url, affiliateId }) {
  const [hovered, setHovered] = useState(false);

  const handlePress = useCallback(() => {
    trackEvent('affiliate_click', { affiliate_id: affiliateId, url });
    if (Platform.OS === 'web') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      Linking.openURL(url);
    }
  }, [url, affiliateId]);

  if (Platform.OS !== 'web') return null;

  return (
    <View style={[styles.container, shadows.sm]}>
      <Text style={styles.label}>Ad</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        style={[styles.cta, hovered && styles.ctaHovered]}
        onPress={handlePress}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        activeOpacity={0.8}
      >
        <Text style={styles.ctaText}>{ctaText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginVertical: spacing.md,
  },
  label: {
    fontSize: 10,
    fontFamily: fontFamily.semiBold,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: 15,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 19,
    marginBottom: spacing.sm,
  },
  cta: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },
  ctaHovered: {
    opacity: 0.9,
  },
  ctaText: {
    fontSize: 13,
    fontFamily: fontFamily.semiBold,
    color: '#FFFFFF',
  },
});
