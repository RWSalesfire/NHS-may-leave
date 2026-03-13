import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontFamily } from '../constants/theme';
import { H1, P } from './SemanticWeb';

export default function PageHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <H1 style={styles.title}>{title}</H1>
      {subtitle && <P style={styles.subtitle}>{subtitle}</P>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 26,
  },
});
