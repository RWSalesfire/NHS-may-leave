import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, spacing, borderRadius, typography, fontFamily, shadows } from '../constants/theme';
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

    const salary = parseFloat(annualSalary);
    if (!annualSalary || isNaN(salary) || salary <= 0) {
      newErrors.annualSalary = 'Please enter a valid annual salary';
    } else if (salary < 1000) {
      newErrors.annualSalary = 'Salary must be at least \u00A31,000';
    } else if (salary > 1000000) {
      newErrors.annualSalary = 'Salary must be less than \u00A31,000,000';
    }

    const pension = parseFloat(pensionPercentage);
    if (!pensionPercentage || isNaN(pension) || pension < 0) {
      newErrors.pensionPercentage = 'Please enter a valid pension percentage';
    } else if (pension > 100) {
      newErrors.pensionPercentage = 'Pension percentage cannot exceed 100%';
    }

    const weeksValidation = validateMaternityWeeks(maternityWeeks);
    if (!weeksValidation.valid) {
      newErrors.maternityWeeks = weeksValidation.error;
    }

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
    const cleaned = text.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      return parts[0] + '.' + parts.slice(1).join('');
    }
    return cleaned;
  };

  return (
    <View style={styles.container}>
      {/* Section: Payment Type */}
      <View style={[styles.sectionCard, shadows.sm]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Payment Type</Text>
          <View style={styles.pillRow}>
            <TouchableOpacity
              style={[
                styles.pillButton,
                paymentType === 'smp' && styles.pillButtonActive,
              ]}
              onPress={() => setPaymentType('smp')}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.pillButtonText,
                  paymentType === 'smp' && styles.pillButtonTextActive,
                ]}
              >
                Statutory SMP
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.pillButton,
                paymentType === 'nhsEnhanced' && styles.pillButtonActive,
              ]}
              onPress={() => setPaymentType('nhsEnhanced')}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.pillButtonText,
                  paymentType === 'nhsEnhanced' && styles.pillButtonTextActive,
                ]}
              >
                NHS Enhanced
              </Text>
              <Text style={[
                styles.pillButtonLabel,
                paymentType === 'nhsEnhanced' && styles.pillButtonLabelActive,
              ]}>Recommended</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.helperText}>
            {paymentType === 'smp'
              ? 'Standard UK Statutory Maternity Pay (6 weeks at 90%, then \u00A3184.75/week)'
              : 'NHS Agenda for Change (8 weeks full pay, 18 weeks half pay + SMP, 13 weeks SMP)'}
          </Text>
        </View>
      </View>

      {/* Section: Pay Band & FTE */}
      <View style={[styles.sectionCard, shadows.sm]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NHS Pay Band (Optional)</Text>
          <View style={styles.payBandGrid}>
            {NHS_PAY_BANDS.map((band) => (
              <TouchableOpacity
                key={band.id}
                style={[
                  styles.pillChip,
                  selectedPayBand === band.id && styles.pillChipActive,
                ]}
                onPress={() => handlePayBandSelect(band.id)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.pillChipText,
                    selectedPayBand === band.id && styles.pillChipTextActive,
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
                  styles.pillChip,
                  fte === value && styles.pillChipActive,
                ]}
                onPress={() => setFte(value)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.pillChipText,
                    fte === value && styles.pillChipTextActive,
                  ]}
                >
                  {value}
                </Text>
                {value === 1.0 && (
                  <Text style={[
                    styles.pillChipSub,
                    fte === value && styles.pillChipSubActive,
                  ]}>Full-time</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.helperText}>
            Select your working pattern. Most NHS staff are 1.0 (full-time) or 0.8 (4 days/week).
          </Text>
        </View>
      </View>

      {/* Section: Salary & Pension */}
      <View style={[styles.sectionCard, shadows.sm]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Annual Salary ({'\u00A3'})</Text>
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
      </View>

      {/* Section: Duration */}
      <View style={[styles.sectionCard, shadows.sm]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Maternity Leave Duration (weeks)</Text>

          <View style={styles.pillRow}>
            {[
              { value: '26', label: '26 weeks' },
              { value: '39', label: '39 weeks', sub: 'Standard' },
              { value: '52', label: '52 weeks' },
            ].map((item) => (
              <TouchableOpacity
                key={item.value}
                style={[
                  styles.pillButton,
                  maternityWeeks === item.value && styles.pillButtonActive,
                ]}
                onPress={() => setMaternityWeeks(item.value)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    maternityWeeks === item.value && styles.pillButtonTextActive,
                  ]}
                >
                  {item.label}
                </Text>
                {item.sub && (
                  <Text style={[
                    styles.pillButtonLabel,
                    maternityWeeks === item.value && styles.pillButtonLabelActive,
                  ]}>{item.sub}</Text>
                )}
              </TouchableOpacity>
            ))}
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
      </View>

      {/* Advanced Options */}
      <View style={[styles.sectionCard, shadows.sm]}>
        <TouchableOpacity
          onPress={() => setShowAdvancedOptions(!showAdvancedOptions)}
          style={styles.advancedOptionsToggle}
          activeOpacity={0.7}
        >
          <Text style={styles.advancedOptionsText}>
            {showAdvancedOptions ? '\u25BC' : '\u25B6'} Advanced Options (Optional)
          </Text>
        </TouchableOpacity>

        {showAdvancedOptions && (
          <>
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

            <View style={styles.inputContainer}>
              <Text style={styles.label}>KIT Days (Keeping in Touch)</Text>
              <View style={styles.kitDaysGrid}>
                {[0, 2, 5, 8, 10].map((value) => (
                  <TouchableOpacity
                    key={value}
                    style={[
                      styles.pillChip,
                      kitDays === value && styles.pillChipActive,
                    ]}
                    onPress={() => setKitDays(value)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.pillChipText,
                        kitDays === value && styles.pillChipTextActive,
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
        style={[styles.calculateButton, shadows.primary]}
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
  sectionCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    fontWeight: '600',
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textPrimary,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.error,
    marginTop: spacing.xs,
  },
  helperText: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  calculateButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.md + 2,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  calculateButtonText: {
    ...typography.subheading,
    fontFamily: fontFamily.bold,
    color: colors.cardBackground,
    fontWeight: '700',
  },
  pillRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  pillButton: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  pillButtonActive: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  pillButtonText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  pillButtonTextActive: {
    color: colors.primaryDark,
  },
  pillButtonLabel: {
    ...typography.caption,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  pillButtonLabelActive: {
    color: colors.primaryDark,
  },
  payBandGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  pillChip: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 70,
    alignItems: 'center',
  },
  pillChipActive: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  pillChipText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  pillChipTextActive: {
    color: colors.primaryDark,
  },
  pillChipSub: {
    ...typography.caption,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  pillChipSubActive: {
    color: colors.primaryDark,
  },
  fteGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  kitDaysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  advancedOptionsToggle: {
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
  },
  advancedOptionsText: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    fontWeight: '600',
  },
});
