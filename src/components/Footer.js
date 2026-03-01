import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function Footer({ onTermsPress, onPrivacyPress }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.disclaimer}>
        Not affiliated with or endorsed by the NHS
      </Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={onTermsPress}>
          <Text style={styles.link}>Terms of Service</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity onPress={onPrivacyPress}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyright}>
        © {new Date().getFullYear()} NHS Maternity Pay Calculator
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.background,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    alignItems: 'center',
  },
  disclaimer: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xs,
    fontStyle: 'italic',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  link: {
    fontSize: 12,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  separator: {
    fontSize: 12,
    color: colors.textSecondary,
    marginHorizontal: spacing.sm,
  },
  copyright: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
