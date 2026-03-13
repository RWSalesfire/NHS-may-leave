import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily } from '../constants/theme';
import { FooterEl } from './SemanticWeb';

export default function Footer() {
  if (Platform.OS !== 'web') {
    return (
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          {'\u00A9'} {new Date().getFullYear()} NHS Maternity Pay Calculator {'\u00B7'} Not affiliated with the NHS
        </Text>
      </View>
    );
  }

  return <WebFooter />;
}

function FooterLink({ to, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none' }}
    >
      <Text style={[styles.footerLink, hovered && styles.footerLinkHover]}>
        {children}
      </Text>
    </Link>
  );
}

function WebFooter() {
  return (
    <FooterEl style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.brand}>NHS Maternity Pay Calculator</Text>

        <View style={styles.linksRow}>
          <FooterLink to="/calculator">Calculator</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <FooterLink to="/guide">How It Works</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <FooterLink to="/faq">FAQ</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <FooterLink to="/about">About</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <FooterLink to="/contact">Contact</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <FooterLink to="/terms">Terms</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <FooterLink to="/privacy">Privacy</FooterLink>
          <Text style={styles.sep}>{'\u00B7'}</Text>
          <CookieSettingsLink />
        </View>

        <Text style={styles.copyright}>
          {'\u00A9'} {new Date().getFullYear()} NHS Maternity Pay Calculator {'\u00B7'} Not affiliated with or endorsed by the NHS
        </Text>
      </View>
    </FooterEl>
  );
}

function CookieSettingsLink() {
  const [hovered, setHovered] = useState(false);

  const handlePress = useCallback(() => {
    if (typeof window !== 'undefined' && window.revisitCkyConsent) {
      window.revisitCkyConsent();
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={handlePress}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text style={[styles.footerLink, hovered && styles.footerLinkHover]}>
        Cookie Settings
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.text,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  footerContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    gap: spacing.xs + 2,
  },
  brand: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: 'rgba(255,255,255,0.7)',
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
  },
  footerLink: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: 'rgba(255,255,255,0.55)',
  },
  footerLinkHover: {
    color: 'rgba(255,255,255,0.9)',
  },
  sep: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.25)',
  },
  copyright: {
    fontSize: 11,
    fontFamily: fontFamily.regular,
    color: 'rgba(255,255,255,0.35)',
    textAlign: 'center',
  },
});
