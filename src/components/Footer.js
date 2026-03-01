import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing } from '../constants/theme';

export default function Footer() {
  // For non-web platforms, show minimal footer
  if (Platform.OS !== 'web') {
    return (
      <View style={styles.footer}>
        <Text style={styles.disclaimer}>
          Not affiliated with or endorsed by the NHS
        </Text>
        <Text style={styles.copyright}>
          © {new Date().getFullYear()} NHS Maternity Pay Calculator
        </Text>
      </View>
    );
  }

  // For web platform, show full footer with navigation
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View style={styles.footerSection}>
          <Text style={styles.footerSectionTitle}>Quick Links</Text>
          <Link to="/calculator" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>Calculator</Text>
          </Link>
          <Link to="/guide" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>How It Works</Text>
          </Link>
          <Link to="/faq" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>FAQ</Text>
          </Link>
          <Link to="/blog" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>Resources</Text>
          </Link>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerSectionTitle}>Company</Text>
          <Link to="/about" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>About Us</Text>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>Contact</Text>
          </Link>
          <Link to="/for-trusts" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>For NHS Trusts</Text>
          </Link>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerSectionTitle}>Legal</Text>
          <Link to="/terms" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>Terms of Service</Text>
          </Link>
          <Link to="/privacy" style={{ textDecoration: 'none', marginBottom: spacing.xs }}>
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </Link>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Text style={styles.disclaimer}>
          Not affiliated with or endorsed by the NHS
        </Text>
        <Text style={styles.copyright}>
          © {new Date().getFullYear()} NHS Maternity Pay Calculator. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.cardBackground,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  footerSection: {
    minWidth: 150,
  },
  footerSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  footerLink: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  disclaimer: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xs,
    fontStyle: 'italic',
  },
  copyright: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
