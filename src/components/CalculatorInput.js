import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function CalculatorInput({ onCalculate }) {
  const [annualSalary, setAnnualSalary] = useState('');
  const [pensionPercentage, setPensionPercentage] = useState('5');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    // Validate annual salary
    const salary = parseFloat(annualSalary);
    if (!annualSalary || isNaN(salary) || salary <= 0) {
      newErrors.annualSalary = 'Please enter a valid annual salary';
    } else if (salary < 1000) {
      newErrors.annualSalary = 'Salary must be at least £1,000';
    } else if (salary > 1000000) {
      newErrors.annualSalary = 'Salary must be less than £1,000,000';
    }

    // Validate pension percentage
    const pension = parseFloat(pensionPercentage);
    if (!pensionPercentage || isNaN(pension) || pension < 0) {
      newErrors.pensionPercentage = 'Please enter a valid pension percentage';
    } else if (pension > 100) {
      newErrors.pensionPercentage = 'Pension percentage cannot exceed 100%';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateInputs()) {
      onCalculate({
        annualSalary: parseFloat(annualSalary),
        pensionPercentage: parseFloat(pensionPercentage),
      });
    }
  };

  const formatSalaryInput = (text) => {
    // Remove non-numeric characters except decimal point
    const cleaned = text.replace(/[^0-9.]/g, '');
    // Prevent multiple decimal points
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      return parts[0] + '.' + parts.slice(1).join('');
    }
    return cleaned;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NHS Maternity Pay Calculator</Text>
      <Text style={styles.subtitle}>
        Calculate your take-home maternity pay after tax, NI, and pension deductions
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Annual Salary (£)</Text>
        <TextInput
          style={[styles.input, errors.annualSalary && styles.inputError]}
          value={annualSalary}
          onChangeText={(text) => setAnnualSalary(formatSalaryInput(text))}
          placeholder="e.g. 35000"
          placeholderTextColor={colors.textSecondary}
          keyboardType="decimal-pad"
          returnKeyType="next"
        />
        {errors.annualSalary && (
          <Text style={styles.errorText}>{errors.annualSalary}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pension Contribution (%)</Text>
        <TextInput
          style={[styles.input, errors.pensionPercentage && styles.inputError]}
          value={pensionPercentage}
          onChangeText={(text) => setPensionPercentage(formatSalaryInput(text))}
          placeholder="e.g. 5"
          placeholderTextColor={colors.textSecondary}
          keyboardType="decimal-pad"
          returnKeyType="done"
        />
        {errors.pensionPercentage && (
          <Text style={styles.errorText}>{errors.pensionPercentage}</Text>
        )}
        <Text style={styles.helperText}>
          Typical NHS pension contribution is 5-13.5%
        </Text>
      </View>

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={handleCalculate}
        activeOpacity={0.8}
      >
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  title: {
    ...typography.title,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    textAlign: 'center',
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.subheading,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...typography.body,
    color: colors.textPrimary,
  },
  inputError: {
    borderColor: colors.accent,
  },
  errorText: {
    ...typography.small,
    color: colors.accent,
    marginTop: spacing.xs,
  },
  helperText: {
    ...typography.small,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  calculateButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  calculateButtonText: {
    ...typography.subheading,
    color: colors.cardBackground,
    fontWeight: '600',
  },
});
