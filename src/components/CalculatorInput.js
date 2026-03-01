import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, spacing, borderRadius, typography } from '../constants/theme';
import { validateMaternityWeeks } from '../utils/maternityCalculations';
import { NHS_PAY_BANDS, getSalaryRangeDisplay } from '../constants/nhsData';

export default function CalculatorInput({ onCalculate }) {
  const [annualSalary, setAnnualSalary] = useState('');
  const [pensionPercentage, setPensionPercentage] = useState('5');
  const [maternityWeeks, setMaternityWeeks] = useState('39');
  const [paymentType, setPaymentType] = useState('smp');
  const [selectedPayBand, setSelectedPayBand] = useState('custom');
  const [fte, setFte] = useState(1.0);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [annualHolidayDays, setAnnualHolidayDays] = useState('27');
  const [kitDays, setKitDays] = useState(0);
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

    // Validate maternity weeks
    const weeksValidation = validateMaternityWeeks(maternityWeeks);
    if (!weeksValidation.valid) {
      newErrors.maternityWeeks = weeksValidation.error;
    }

    // Validate annual holiday days (if advanced options shown)
    if (showAdvancedOptions) {
      const holidayDays = parseFloat(annualHolidayDays);
      if (!annualHolidayDays || isNaN(holidayDays) || holidayDays < 0) {
        newErrors.annualHolidayDays = 'Please enter valid holiday days';
      } else if (holidayDays < 20) {
        newErrors.annualHolidayDays = 'Holiday days must be at least 20';
      } else if (holidayDays > 35) {
        newErrors.annualHolidayDays = 'Holiday days cannot exceed 35';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateInputs()) {
      onCalculate({
        annualSalary: parseFloat(annualSalary),
        pensionPercentage: parseFloat(pensionPercentage),
        maternityWeeks: parseFloat(maternityWeeks),
        paymentType,
        fte,
        annualHolidayDays: parseFloat(annualHolidayDays),
        kitDays,
      });
    }
  };

  const handlePayBandSelect = (bandId) => {
    setSelectedPayBand(bandId);
    const band = NHS_PAY_BANDS.find((b) => b.id === bandId);
    if (band && band.midpoint) {
      setAnnualSalary(band.midpoint.toString());
    } else if (bandId === 'custom') {
      setAnnualSalary('');
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
        <Text style={styles.label}>Payment Type</Text>
        <View style={styles.presetRow}>
          <TouchableOpacity
            style={[
              styles.presetButton,
              paymentType === 'smp' && styles.presetButtonActive,
            ]}
            onPress={() => setPaymentType('smp')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.presetButtonText,
                paymentType === 'smp' && styles.presetButtonTextActive,
              ]}
            >
              Statutory SMP
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.presetButton,
              paymentType === 'nhsEnhanced' && styles.presetButtonActive,
            ]}
            onPress={() => setPaymentType('nhsEnhanced')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.presetButtonText,
                paymentType === 'nhsEnhanced' && styles.presetButtonTextActive,
              ]}
            >
              NHS Enhanced
            </Text>
            <Text style={styles.presetButtonLabel}>Recommended</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.helperText}>
          {paymentType === 'smp'
            ? 'Standard UK Statutory Maternity Pay (6 weeks at 90%, then £184.75/week)'
            : 'NHS Agenda for Change (8 weeks full pay, 18 weeks half pay + SMP, 13 weeks SMP)'}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>NHS Pay Band (Optional)</Text>
        <View style={styles.payBandGrid}>
          {NHS_PAY_BANDS.map((band) => (
            <TouchableOpacity
              key={band.id}
              style={[
                styles.payBandButton,
                selectedPayBand === band.id && styles.payBandButtonActive,
              ]}
              onPress={() => handlePayBandSelect(band.id)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.payBandButtonText,
                  selectedPayBand === band.id && styles.payBandButtonTextActive,
                ]}
              >
                {band.label.split(' - ')[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedPayBand !== 'custom' && getSalaryRangeDisplay(selectedPayBand) && (
          <Text style={styles.helperText}>
            Salary range: {getSalaryRangeDisplay(selectedPayBand)}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full-Time Equivalent (FTE)</Text>
        <View style={styles.fteGrid}>
          {[0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((value) => (
            <TouchableOpacity
              key={value}
              style={[
                styles.fteButton,
                fte === value && styles.fteButtonActive,
              ]}
              onPress={() => setFte(value)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.fteButtonText,
                  fte === value && styles.fteButtonTextActive,
                ]}
              >
                {value}
              </Text>
              {value === 1.0 && (
                <Text style={styles.fteButtonLabel}>Full-time</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.helperText}>
          Select your working pattern. Most NHS staff are 1.0 (full-time) or 0.8 (4 days/week).
        </Text>
      </View>

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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Maternity Leave Duration (weeks)</Text>

        <View style={styles.presetRow}>
          <TouchableOpacity
            style={[
              styles.presetButton,
              maternityWeeks === '26' && styles.presetButtonActive,
            ]}
            onPress={() => setMaternityWeeks('26')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.presetButtonText,
                maternityWeeks === '26' && styles.presetButtonTextActive,
              ]}
            >
              26 weeks
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.presetButton,
              maternityWeeks === '39' && styles.presetButtonActive,
            ]}
            onPress={() => setMaternityWeeks('39')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.presetButtonText,
                maternityWeeks === '39' && styles.presetButtonTextActive,
              ]}
            >
              39 weeks
            </Text>
            <Text style={styles.presetButtonLabel}>Standard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.presetButton,
              maternityWeeks === '52' && styles.presetButtonActive,
            ]}
            onPress={() => setMaternityWeeks('52')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.presetButtonText,
                maternityWeeks === '52' && styles.presetButtonTextActive,
              ]}
            >
              52 weeks
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={[styles.input, errors.maternityWeeks && styles.inputError]}
          value={maternityWeeks}
          onChangeText={(text) => setMaternityWeeks(formatSalaryInput(text))}
          placeholder="e.g. 39"
          placeholderTextColor={colors.textSecondary}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        {errors.maternityWeeks && (
          <Text style={styles.errorText}>{errors.maternityWeeks}</Text>
        )}
        <Text style={styles.helperText}>
          NHS Statutory Maternity Pay is typically paid for 39 weeks (6 weeks at 90%,
          33 weeks at standard rate). You can calculate up to 52 weeks.
        </Text>
      </View>

      {/* Advanced Options */}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => setShowAdvancedOptions(!showAdvancedOptions)}
          style={styles.advancedOptionsToggle}
          activeOpacity={0.7}
        >
          <Text style={styles.advancedOptionsText}>
            {showAdvancedOptions ? '▼' : '▶'} Advanced Options (Optional)
          </Text>
        </TouchableOpacity>

        {showAdvancedOptions && (
          <>
            {/* Annual Holiday Days */}
            <View style={[styles.inputContainer, { marginBottom: spacing.md }]}>
              <Text style={styles.label}>Annual Holiday Days</Text>
              <TextInput
                style={[styles.input, errors.annualHolidayDays && styles.inputError]}
                value={annualHolidayDays}
                onChangeText={(text) => setAnnualHolidayDays(formatSalaryInput(text))}
                placeholder="e.g. 27"
                placeholderTextColor={colors.textSecondary}
                keyboardType="number-pad"
                returnKeyType="done"
              />
              {errors.annualHolidayDays && (
                <Text style={styles.errorText}>{errors.annualHolidayDays}</Text>
              )}
              <Text style={styles.helperText}>
                NHS standard is 27 days. Some staff get additional days for long service.
              </Text>
            </View>

            {/* KIT Days */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>KIT Days (Keeping in Touch)</Text>
              <View style={styles.kitDaysGrid}>
                {[0, 2, 5, 8, 10].map((value) => (
                  <TouchableOpacity
                    key={value}
                    style={[
                      styles.kitDaysButton,
                      kitDays === value && styles.kitDaysButtonActive,
                    ]}
                    onPress={() => setKitDays(value)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.kitDaysButtonText,
                        kitDays === value && styles.kitDaysButtonTextActive,
                      ]}
                    >
                      {value}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <Text style={styles.helperText}>
                Optional paid workdays during maternity leave (max 10). Most people use 0-5 days.
              </Text>
            </View>
          </>
        )}
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
  presetRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  presetButton: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  presetButtonActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  presetButtonText: {
    ...typography.small,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  presetButtonTextActive: {
    color: colors.primaryDark,
  },
  presetButtonLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  payBandGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  payBandButton: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 80,
  },
  payBandButtonActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  payBandButtonText: {
    ...typography.small,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  payBandButtonTextActive: {
    color: colors.primaryDark,
  },
  fteGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  fteButton: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 70,
    alignItems: 'center',
  },
  fteButtonActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  fteButtonText: {
    ...typography.small,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  fteButtonTextActive: {
    color: colors.primaryDark,
  },
  fteButtonLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  advancedOptionsToggle: {
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
  },
  advancedOptionsText: {
    ...typography.subheading,
    color: colors.primary,
    fontWeight: '600',
  },
  kitDaysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  kitDaysButton: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 60,
    alignItems: 'center',
  },
  kitDaysButtonActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  kitDaysButtonText: {
    ...typography.small,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  kitDaysButtonTextActive: {
    color: colors.primaryDark,
  },
});
