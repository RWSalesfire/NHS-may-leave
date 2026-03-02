import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, fontFamily } from '../constants/theme';

/**
 * ValidatedInput — TextInput with real-time validation feedback
 *
 * Props:
 *  - value, onChangeText — standard controlled input
 *  - validate(value) → error message string | null
 *  - formatValue(rawText) → cleaned string (optional, e.g. strip non-digits)
 *  - formatDisplay(value) → display string for blurred state (optional, e.g. "£45,000")
 *  - hint — helper text below input
 *  - placeholder, keyboardType, returnKeyType — forwarded to TextInput
 *  - error — external error message (from parent validation)
 */
export default function ValidatedInput({
  value,
  onChangeText,
  validate,
  formatValue,
  formatDisplay,
  hint,
  error: externalError,
  placeholder,
  keyboardType,
  returnKeyType,
  style,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasBlurred, setHasBlurred] = useState(false);

  const internalError = hasBlurred && validate ? validate(value) : null;
  const error = externalError || internalError;
  const isValid = hasBlurred && !error && value && value.length > 0;

  const handleChangeText = useCallback(
    (text) => {
      const cleaned = formatValue ? formatValue(text) : text;
      onChangeText(cleaned);
    },
    [formatValue, onChangeText]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setHasBlurred(true);
  }, []);

  // Display value: when blurred, use formatDisplay if provided
  const displayValue =
    !isFocused && formatDisplay && value ? formatDisplay(value) : value;

  const borderColor = error
    ? colors.error
    : isValid
      ? colors.sage
      : isFocused
        ? colors.primary
        : colors.border;

  return (
    <View style={style}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, { borderColor }]}
          value={displayValue}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
        />
        {isValid && (
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>{'\u2713'}</Text>
          </View>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {hint && !error && <Text style={styles.hintText}>{hint}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    paddingRight: spacing.xl + spacing.md,
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textPrimary,
  },
  checkmark: {
    position: 'absolute',
    right: spacing.md,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  errorText: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.error,
    marginTop: spacing.xs,
  },
  hintText: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});
