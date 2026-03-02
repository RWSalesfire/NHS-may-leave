import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { colors, spacing, borderRadius, typography, fontFamily, shadows } from '../constants/theme';
import { validateMaternityWeeks } from '../utils/maternityCalculations';
import { NHS_PAY_BANDS, getSalaryRangeDisplay } from '../constants/nhsData';
import ValidatedInput from './ValidatedInput';
import useReducedMotion from '../hooks/useReducedMotion';
import { trackEvent } from '../utils/analytics';

const STEPS = [
  { key: 'employment', label: 'Employment' },
  { key: 'salary', label: 'Salary' },
  { key: 'leave', label: 'Leave Details' },
];

const HOURS_OPTIONS = [
  { hours: 15, fte: 0.4, label: '15h' },
  { hours: 22.5, fte: 0.6, label: '22.5h' },
  { hours: 30, fte: 0.8, label: '30h' },
  { hours: 37.5, fte: 1.0, label: '37.5h', sub: 'Full-time' },
];

const FULL_TIME_HOURS = 37.5;

export default function CalculatorWizard({ onCalculate }) {
  const prefersReducedMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);

  // Form state
  const [paymentType, setPaymentType] = useState('nhsEnhanced');
  const [selectedPayBand, setSelectedPayBand] = useState('custom');
  const [fte, setFte] = useState(1.0);
  const [selectedHours, setSelectedHours] = useState('37.5');
  const [isCustomHours, setIsCustomHours] = useState(false);
  const [customHoursInput, setCustomHoursInput] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');
  const [pensionPercentage, setPensionPercentage] = useState('5');
  const [extraPayslip1, setExtraPayslip1] = useState('');
  const [extraPayslip2, setExtraPayslip2] = useState('');
  const [showBankShiftSection, setShowBankShiftSection] = useState(false);
  const [maternityWeeks, setMaternityWeeks] = useState('39');
  const [isCustomDuration, setIsCustomDuration] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [annualHolidayDays, setAnnualHolidayDays] = useState('27');
  const [kitDays, setKitDays] = useState(0);
  const [stepErrors, setStepErrors] = useState({});
  const [salaryFromBand, setSalaryFromBand] = useState(false);

  // Slide animation
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const animateTransition = (direction) => {
    if (prefersReducedMotion) return;
    const offset = direction === 'forward' ? 40 : -40;
    fadeAnim.setValue(0);
    slideAnim.setValue(offset);
    Animated.parallel([
      Animated.spring(slideAnim, { toValue: 0, useNativeDriver: true, tension: 60, friction: 10 }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
    ]).start();
  };

  // Validation
  const validateSalary = (val) => {
    if (!val) return null; // Don't show error for empty before blur
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) return 'Please enter a valid annual salary';
    if (num < 1000) return 'Salary must be at least \u00A31,000';
    if (num > 1000000) return 'Salary must be less than \u00A31,000,000';
    return null;
  };

  const validatePension = (val) => {
    if (!val) return null;
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return 'Please enter a valid percentage';
    if (num > 100) return 'Cannot exceed 100%';
    return null;
  };

  const validatePayslipExtra = (val) => {
    if (!val) return null;
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return 'Please enter a valid amount';
    if (num > 20000) return 'Cannot exceed \u00A320,000 per payslip';
    return null;
  };

  const validateWeeks = (val) => {
    if (!val) return null;
    const result = validateMaternityWeeks(val);
    return result.valid ? null : result.error;
  };

  const validateHoliday = (val) => {
    if (!val) return null;
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return 'Please enter valid holiday days';
    if (num < 20) return 'Must be at least 20 days';
    if (num > 35) return 'Cannot exceed 35 days';
    return null;
  };

  const validateCustomHours = (val) => {
    if (!val) return null;
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) return 'Please enter valid hours';
    if (num < 1) return 'Must be at least 1 hour';
    if (num > FULL_TIME_HOURS) return `Cannot exceed ${FULL_TIME_HOURS} hours`;
    return null;
  };

  const handleHoursSelect = (option) => {
    setIsCustomHours(false);
    setCustomHoursInput('');
    setSelectedHours(option.hours.toString());
    setFte(option.fte);
  };

  const handleCustomHoursToggle = () => {
    setIsCustomHours(true);
    setSelectedHours('custom');
    setCustomHoursInput('');
  };

  const handleCustomHoursChange = (text) => {
    const cleaned = text.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    const formatted = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : cleaned;
    setCustomHoursInput(formatted);
    const num = parseFloat(formatted);
    if (!isNaN(num) && num >= 1 && num <= FULL_TIME_HOURS) {
      setFte(Math.round((num / FULL_TIME_HOURS) * 1000) / 1000);
    }
  };

  const getDisplayHours = () => {
    if (isCustomHours && customHoursInput) {
      const num = parseFloat(customHoursInput);
      if (!isNaN(num) && num >= 1 && num <= FULL_TIME_HOURS) return num;
    }
    return fte * FULL_TIME_HOURS;
  };

  const formatNumericInput = (text) => {
    const cleaned = text.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length > 2) return parts[0] + '.' + parts.slice(1).join('');
    return cleaned;
  };

  const formatSalaryDisplay = (val) => {
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    return '\u00A3' + num.toLocaleString('en-GB');
  };

  const handlePayBandSelect = (bandId) => {
    setSelectedPayBand(bandId);
    const band = NHS_PAY_BANDS.find((b) => b.id === bandId);
    if (band && band.midpoint) {
      setAnnualSalary(band.midpoint.toString());
      setSalaryFromBand(true);
    } else if (bandId === 'custom') {
      setAnnualSalary('');
      setSalaryFromBand(false);
    }
  };

  const validateCurrentStep = () => {
    const errors = {};

    if (currentStep === 1) {
      // Salary step
      const salary = parseFloat(annualSalary);
      if (!annualSalary || isNaN(salary) || salary <= 0) {
        errors.annualSalary = 'Please enter a valid annual salary';
      } else if (salary < 1000) {
        errors.annualSalary = 'Salary must be at least \u00A31,000';
      } else if (salary > 1000000) {
        errors.annualSalary = 'Salary must be less than \u00A31,000,000';
      }

      const pension = parseFloat(pensionPercentage);
      if (!pensionPercentage || isNaN(pension) || pension < 0) {
        errors.pensionPercentage = 'Please enter a valid pension percentage';
      } else if (pension > 100) {
        errors.pensionPercentage = 'Cannot exceed 100%';
      }

      if (showBankShiftSection) {
        if (extraPayslip1) {
          const p1 = parseFloat(extraPayslip1);
          if (isNaN(p1) || p1 < 0) {
            errors.extraPayslip1 = 'Please enter a valid amount';
          } else if (p1 > 20000) {
            errors.extraPayslip1 = 'Cannot exceed \u00A320,000 per payslip';
          }
        }
        if (extraPayslip2) {
          const p2 = parseFloat(extraPayslip2);
          if (isNaN(p2) || p2 < 0) {
            errors.extraPayslip2 = 'Please enter a valid amount';
          } else if (p2 > 20000) {
            errors.extraPayslip2 = 'Cannot exceed \u00A320,000 per payslip';
          }
        }
      }
    }

    if (currentStep === 2) {
      // Leave step
      const weeksResult = validateMaternityWeeks(maternityWeeks);
      if (!weeksResult.valid) {
        errors.maternityWeeks = weeksResult.error;
      }
      if (showAdvancedOptions) {
        const holiday = parseFloat(annualHolidayDays);
        if (!annualHolidayDays || isNaN(holiday) || holiday < 20) {
          errors.annualHolidayDays = 'Must be at least 20 days';
        } else if (holiday > 35) {
          errors.annualHolidayDays = 'Cannot exceed 35 days';
        }
      }
    }

    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setStepErrors({});
    if (currentStep === 0) {
      trackEvent('calculator_started', { payment_type: paymentType });
    }
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      animateTransition('forward');
    }
  };

  const handleBack = () => {
    setStepErrors({});
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      animateTransition('back');
    }
  };

  const handleCalculate = () => {
    if (!validateCurrentStep()) return;
    const p1 = extraPayslip1 ? parseFloat(extraPayslip1) : 0;
    const p2 = extraPayslip2 ? parseFloat(extraPayslip2) : 0;
    const additionalWeeklyEarnings = (p1 + p2) / 8;

    onCalculate({
      annualSalary: parseFloat(annualSalary),
      pensionPercentage: parseFloat(pensionPercentage),
      maternityWeeks: parseFloat(maternityWeeks),
      paymentType,
      fte,
      annualHolidayDays: parseFloat(annualHolidayDays),
      kitDays,
      additionalWeeklyEarnings,
    });
  };

  // Step indicator
  const renderStepIndicator = () => (
    <View style={styles.stepIndicator}>
      <View style={styles.stepDots}>
        {STEPS.map((step, index) => (
          <View key={step.key} style={styles.stepItem}>
            <View
              style={[
                styles.stepDot,
                index === currentStep && styles.stepDotActive,
                index < currentStep && styles.stepDotCompleted,
              ]}
            >
              {index < currentStep ? (
                <Text style={styles.stepDotCheck}>{'\u2713'}</Text>
              ) : (
                <Text
                  style={[
                    styles.stepDotNumber,
                    index === currentStep && styles.stepDotNumberActive,
                  ]}
                >
                  {index + 1}
                </Text>
              )}
            </View>
            <Text
              style={[
                styles.stepLabel,
                index === currentStep && styles.stepLabelActive,
              ]}
            >
              {step.label}
            </Text>
          </View>
        ))}
      </View>
      {/* Progress bar */}
      <View style={styles.progressBarBg}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${((currentStep + 1) / STEPS.length) * 100}%` },
          ]}
        />
      </View>
    </View>
  );

  // Step 1: Employment
  const renderStep1 = () => (
    <View>
      <Text style={styles.stepTitle}>Your Employment</Text>
      <Text style={styles.stepDescription}>Tell us about your NHS role</Text>

      {/* Payment Type */}
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Payment Type</Text>
        <View style={styles.pillRow}>
          <TouchableOpacity
            style={[styles.pillButton, paymentType === 'smp' && styles.pillButtonActive]}
            onPress={() => setPaymentType('smp')}
            activeOpacity={0.7}
          >
            <Text style={[styles.pillButtonText, paymentType === 'smp' && styles.pillButtonTextActive]}>
              Statutory SMP
            </Text>
            <Text style={[styles.pillButtonLabel, paymentType === 'smp' && styles.pillButtonLabelActive]}>
              Basic entitlement
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.pillButton, paymentType === 'nhsEnhanced' && styles.pillButtonActive]}
            onPress={() => setPaymentType('nhsEnhanced')}
            activeOpacity={0.7}
          >
            <Text style={[styles.pillButtonText, paymentType === 'nhsEnhanced' && styles.pillButtonTextActive]}>
              NHS Enhanced
            </Text>
            <Text style={[styles.pillButtonLabel, paymentType === 'nhsEnhanced' && styles.pillButtonLabelActive]}>
              Recommended
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.helperText}>
          {paymentType === 'smp'
            ? 'Standard UK Statutory Maternity Pay (6 weeks at 90%, then \u00A3184.75/week)'
            : 'NHS Agenda for Change (8 weeks full pay, 18 weeks half pay + SMP, 13 weeks SMP)'}
        </Text>
      </View>

      {/* Pay Band */}
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>NHS Pay Band (Optional)</Text>
        <View style={styles.chipGrid}>
          {NHS_PAY_BANDS.map((band) => (
            <TouchableOpacity
              key={band.id}
              style={[styles.chip, selectedPayBand === band.id && styles.chipActive]}
              onPress={() => handlePayBandSelect(band.id)}
              activeOpacity={0.7}
            >
              <Text style={[styles.chipText, selectedPayBand === band.id && styles.chipTextActive]}>
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

      {/* Contracted Hours */}
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Contracted Hours Per Week</Text>
        <View style={styles.chipGrid}>
          {HOURS_OPTIONS.map((option) => {
            const isSelected = !isCustomHours && selectedHours === option.hours.toString();
            return (
              <TouchableOpacity
                key={option.hours}
                style={[styles.chip, isSelected && styles.chipActive]}
                onPress={() => handleHoursSelect(option)}
                activeOpacity={0.7}
              >
                <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                  {option.label}
                </Text>
                {option.sub && (
                  <Text style={[styles.chipSub, isSelected && styles.chipSubActive]}>{option.sub}</Text>
                )}
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={[styles.chip, isCustomHours && styles.chipActive]}
            onPress={handleCustomHoursToggle}
            activeOpacity={0.7}
          >
            <Text style={[styles.chipText, isCustomHours && styles.chipTextActive]}>
              Custom
            </Text>
          </TouchableOpacity>
        </View>
        {isCustomHours && (
          <ValidatedInput
            value={customHoursInput}
            onChangeText={handleCustomHoursChange}
            validate={validateCustomHours}
            placeholder="Enter hours (1-37.5)"
            keyboardType="decimal-pad"
            returnKeyType="done"
            error={stepErrors.customHours}
          />
        )}
        <Text style={styles.helperText}>
          Standard NHS full-time is 37.5 hours. Common part-time: 30h (4 days), 22.5h (3 days), 15h (2 days).
        </Text>
      </View>
    </View>
  );

  // Step 2: Salary
  const renderStep2 = () => (
    <View>
      <Text style={styles.stepTitle}>Your Salary</Text>
      <Text style={styles.stepDescription}>Enter your annual salary and pension details</Text>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Annual Salary ({'\u00A3'})</Text>
        {salaryFromBand && selectedPayBand !== 'custom' && (
          <View style={styles.bandHint}>
            <Text style={styles.bandHintText}>
              Based on {NHS_PAY_BANDS.find(b => b.id === selectedPayBand)?.label.split(' - ')[0]} midpoint — you can override
            </Text>
          </View>
        )}
        <ValidatedInput
          value={annualSalary}
          onChangeText={(text) => {
            setAnnualSalary(text);
            if (salaryFromBand) setSalaryFromBand(false);
          }}
          validate={validateSalary}
          formatValue={formatNumericInput}
          formatDisplay={formatSalaryDisplay}
          placeholder="e.g. 35000"
          keyboardType="decimal-pad"
          returnKeyType="next"
          error={stepErrors.annualSalary}
        />
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Pension Contribution (%)</Text>
        <ValidatedInput
          value={pensionPercentage}
          onChangeText={setPensionPercentage}
          validate={validatePension}
          formatValue={formatNumericInput}
          placeholder="e.g. 5"
          keyboardType="decimal-pad"
          returnKeyType="done"
          hint="Typical NHS range: 5-13.5%"
          error={stepErrors.pensionPercentage}
        />
      </View>

      {/* Bank Shifts & Overtime */}
      <TouchableOpacity
        onPress={() => setShowBankShiftSection(!showBankShiftSection)}
        style={styles.advancedToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.advancedToggleText}>
          {showBankShiftSection ? '\u25BC' : '\u25B6'} Bank Shifts & Overtime
        </Text>
      </TouchableOpacity>

      {showBankShiftSection && (
        <View style={styles.advancedSection}>
          <Text style={styles.helperText}>
            Enter the extra earnings (overtime, bank shifts, unsocial hours) on each of the 2 monthly payslips used to calculate your average weekly earnings.
          </Text>

          <View style={[styles.fieldGroup, { marginTop: spacing.md }]}>
            <Text style={styles.label}>Extra on Payslip 1 ({'\u00A3'})</Text>
            <ValidatedInput
              value={extraPayslip1}
              onChangeText={setExtraPayslip1}
              validate={validatePayslipExtra}
              formatValue={formatNumericInput}
              placeholder="e.g. 800"
              keyboardType="decimal-pad"
              returnKeyType="next"
              hint="Additional earnings on your first monthly payslip"
              error={stepErrors.extraPayslip1}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Extra on Payslip 2 ({'\u00A3'})</Text>
            <ValidatedInput
              value={extraPayslip2}
              onChangeText={setExtraPayslip2}
              validate={validatePayslipExtra}
              formatValue={formatNumericInput}
              placeholder="e.g. 600"
              keyboardType="decimal-pad"
              returnKeyType="done"
              hint="Additional earnings on your second monthly payslip"
              error={stepErrors.extraPayslip2}
            />
          </View>

          <View style={styles.bandHint}>
            <Text style={styles.bandHintText}>
              Only shifts paid through your Trust's payroll count. Shifts through NHS Professionals (NHSP) or external agencies may not be included as they're technically a different employer.
            </Text>
          </View>
        </View>
      )}
    </View>
  );

  // Step 3: Leave Details
  const renderStep3 = () => (
    <View>
      <Text style={styles.stepTitle}>Leave Details</Text>
      <Text style={styles.stepDescription}>Choose your maternity leave duration</Text>

      {/* Summary of previous steps */}
      <View style={[styles.summaryCard, shadows.sm]}>
        <Text style={styles.summaryTitle}>Your Selections</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Type:</Text>
          <Text style={styles.summaryValue}>
            {paymentType === 'nhsEnhanced' ? 'NHS Enhanced' : 'Statutory SMP'}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Salary:</Text>
          <Text style={styles.summaryValue}>{formatSalaryDisplay(annualSalary)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Hours:</Text>
          <Text style={styles.summaryValue}>{getDisplayHours()}h/week{fte === 1.0 ? ' (Full-time)' : ''}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Pension:</Text>
          <Text style={styles.summaryValue}>{pensionPercentage}%</Text>
        </View>
        {((extraPayslip1 && parseFloat(extraPayslip1) > 0) || (extraPayslip2 && parseFloat(extraPayslip2) > 0)) && (
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Extra earnings:</Text>
            <Text style={styles.summaryValue}>
              {'\u00A3'}{((parseFloat(extraPayslip1) || 0) + (parseFloat(extraPayslip2) || 0)).toLocaleString('en-GB')} over 2 payslips
            </Text>
          </View>
        )}
      </View>

      {/* Duration */}
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Maternity Leave Duration</Text>
        <View style={styles.pillRow}>
          {[
            { value: '26', label: '26 weeks' },
            { value: '39', label: '39 weeks', sub: 'Standard' },
            { value: '52', label: '52 weeks' },
          ].map((item) => {
            const isSelected = !isCustomDuration && maternityWeeks === item.value;
            return (
              <TouchableOpacity
                key={item.value}
                style={[styles.pillButton, isSelected && styles.pillButtonActive]}
                onPress={() => {
                  setIsCustomDuration(false);
                  setMaternityWeeks(item.value);
                }}
                activeOpacity={0.7}
              >
                <Text style={[styles.pillButtonText, isSelected && styles.pillButtonTextActive]}>
                  {item.label}
                </Text>
                {item.sub && (
                  <Text style={[styles.pillButtonLabel, isSelected && styles.pillButtonLabelActive]}>
                    {item.sub}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={[styles.pillButton, isCustomDuration && styles.pillButtonActive]}
            onPress={() => {
              setIsCustomDuration(true);
              setMaternityWeeks('');
            }}
            activeOpacity={0.7}
          >
            <Text style={[styles.pillButtonText, isCustomDuration && styles.pillButtonTextActive]}>
              Custom
            </Text>
          </TouchableOpacity>
        </View>
        {isCustomDuration && (
          <ValidatedInput
            value={maternityWeeks}
            onChangeText={setMaternityWeeks}
            validate={validateWeeks}
            formatValue={formatNumericInput}
            placeholder="Enter weeks (1-52)"
            keyboardType="number-pad"
            returnKeyType="done"
            error={stepErrors.maternityWeeks}
          />
        )}
      </View>

      {/* Advanced Options */}
      <TouchableOpacity
        onPress={() => setShowAdvancedOptions(!showAdvancedOptions)}
        style={styles.advancedToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.advancedToggleText}>
          {showAdvancedOptions ? '\u25BC' : '\u25B6'} Advanced Options
        </Text>
      </TouchableOpacity>

      {showAdvancedOptions && (
        <View style={styles.advancedSection}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Annual Holiday Days</Text>
            <ValidatedInput
              value={annualHolidayDays}
              onChangeText={setAnnualHolidayDays}
              validate={validateHoliday}
              formatValue={formatNumericInput}
              placeholder="e.g. 27"
              keyboardType="number-pad"
              returnKeyType="done"
              hint="NHS standard is 27 days + 8 bank holidays"
              error={stepErrors.annualHolidayDays}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>KIT Days (Keeping in Touch)</Text>
            <View style={styles.chipGrid}>
              {[0, 2, 5, 8, 10].map((value) => (
                <TouchableOpacity
                  key={value}
                  style={[styles.chip, kitDays === value && styles.chipActive]}
                  onPress={() => setKitDays(value)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.chipText, kitDays === value && styles.chipTextActive]}>
                    {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.helperText}>
              Optional paid workdays during maternity leave (max 10)
            </Text>
          </View>
        </View>
      )}
    </View>
  );

  const stepContent = [renderStep1, renderStep2, renderStep3];

  return (
    <View style={styles.container}>
      {renderStepIndicator()}

      <View style={[styles.stepCard, shadows.sm]}>
        <Animated.View
          style={
            prefersReducedMotion
              ? undefined
              : { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }
          }
        >
          {stepContent[currentStep]()}
        </Animated.View>
      </View>

      {/* Navigation */}
      <View style={styles.navRow}>
        {currentStep > 0 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1 }} />
        {currentStep < STEPS.length - 1 ? (
          <TouchableOpacity
            style={[styles.nextButton, shadows.primary]}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.calculateButton, shadows.primary]}
            onPress={handleCalculate}
            activeOpacity={0.8}
          >
            <Text style={styles.calculateButtonText}>Calculate My Pay</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },

  // Step Indicator
  stepIndicator: {
    marginBottom: spacing.lg,
  },
  stepDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.xl,
    marginBottom: spacing.md,
  },
  stepItem: {
    alignItems: 'center',
  },
  stepDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  stepDotActive: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  stepDotCompleted: {
    backgroundColor: colors.sage,
    borderColor: colors.sage,
  },
  stepDotNumber: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  stepDotNumberActive: {
    color: colors.primaryDark,
  },
  stepDotCheck: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  stepLabel: {
    ...typography.caption,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
  },
  stepLabelActive: {
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  progressBarBg: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },

  // Step Card
  stepCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  stepDescription: {
    ...typography.body,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  // Fields
  fieldGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    fontWeight: '600',
  },
  helperText: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  // Pill buttons
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

  // Chips
  chipGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  chip: {
    backgroundColor: colors.inputBackground,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 70,
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: colors.primarySurface,
    borderColor: colors.primary,
  },
  chipText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  chipTextActive: {
    color: colors.primaryDark,
  },
  chipSub: {
    ...typography.caption,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  chipSubActive: {
    color: colors.primaryDark,
  },

  // Band hint
  bandHint: {
    backgroundColor: colors.primarySurface,
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    marginBottom: spacing.sm,
  },
  bandHintText: {
    ...typography.small,
    fontFamily: fontFamily.medium,
    color: colors.primaryDark,
  },

  // Summary card (Step 3)
  summaryCard: {
    backgroundColor: colors.primarySurface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  summaryTitle: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primaryDark,
    marginBottom: spacing.sm,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  summaryLabel: {
    ...typography.small,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
  },
  summaryValue: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  // Advanced
  advancedToggle: {
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
  },
  advancedToggleText: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    fontWeight: '600',
  },
  advancedSection: {
    marginTop: spacing.sm,
  },

  // Navigation
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  backButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: colors.border,
  },
  backButtonText: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  nextButtonText: {
    ...typography.subheading,
    fontFamily: fontFamily.semiBold,
    color: colors.cardBackground,
    fontWeight: '600',
  },
  calculateButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    flex: 1,
    marginLeft: spacing.sm,
  },
  calculateButtonText: {
    ...typography.subheading,
    fontFamily: fontFamily.bold,
    color: colors.cardBackground,
    fontWeight: '700',
  },
});
