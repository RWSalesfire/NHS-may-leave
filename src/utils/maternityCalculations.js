/**
 * NHS Maternity Pay Calculator Utilities
 *
 * Calculates maternity pay based on NHS and statutory maternity pay rules
 */

import {
  calculateHolidayAccrual,
  calculateHolidayValue,
  calculateKITDaysPay
} from '../constants/nhsData.js';

// 2025/26 UK Tax and NI rates
export const TAX_RATES = {
  personalAllowance: 12570,
  basicRate: 0.20,
  basicRateThreshold: 50270,
  higherRate: 0.40,
  higherRateThreshold: 125140,
  additionalRate: 0.45,
};

export const NI_RATES = {
  threshold: 12570, // Annual primary threshold
  basicRate: 0.08, // 8% on earnings between £12,570 and £50,270
  higherRate: 0.02, // 2% on earnings above £50,270
};

// Statutory Maternity Pay rates 2025/26
export const SMP_RATES = {
  higherRateWeeks: 6, // First 6 weeks at 90% of average weekly earnings
  standardRateWeeks: 33, // Next 33 weeks at standard rate or 90% (whichever is lower)
  standardRateAmount: 184.75, // Weekly standard rate (2025/26)
  totalWeeks: 39,
  lastUpdated: '2025/26',
};

// NHS Enhanced Maternity Pay (Agenda for Change) rates
export const NHS_ENHANCED_RATES = {
  fullPayWeeks: 8, // First 8 weeks at 100% salary
  halfPayPlusSMPWeeks: 18, // Next 18 weeks at 50% salary + SMP
  smpOnlyWeeks: 13, // Final 13 weeks at SMP only
  totalWeeks: 39,
  lastUpdated: '2025/26',
};

/**
 * Validate maternity leave duration
 * @param {number} weeks - Number of weeks
 * @returns {object} Validation result with { valid, error?, weeks? }
 */
export const validateMaternityWeeks = (weeks) => {
  const parsedWeeks = parseFloat(weeks);

  if (isNaN(parsedWeeks)) {
    return { valid: false, error: 'Please enter a valid number of weeks' };
  }

  if (parsedWeeks < 1) {
    return { valid: false, error: 'Duration must be at least 1 week' };
  }

  if (parsedWeeks > 52) {
    return { valid: false, error: 'Duration cannot exceed 52 weeks (1 year)' };
  }

  if (!Number.isInteger(parsedWeeks)) {
    return { valid: false, error: 'Please enter whole weeks only' };
  }

  return { valid: true, weeks: parsedWeeks };
};

/**
 * Calculate average weekly earnings
 * @param {number} annualSalary - Annual gross salary
 * @param {number} additionalWeeklyEarnings - Extra weekly earnings from bank shifts, overtime, etc.
 * @returns {number} Average weekly earnings
 */
export const calculateAverageWeeklyEarnings = (annualSalary, additionalWeeklyEarnings = 0) => {
  return (annualSalary / 52) + additionalWeeklyEarnings;
};

/**
 * Calculate Statutory Maternity Pay (SMP) for each period
 * @param {number} annualSalary - Annual gross salary
 * @param {number} customWeeks - Custom maternity leave duration in weeks (default 39)
 * @returns {object} Breakdown of maternity pay periods
 */
export const calculateMaternityPay = (annualSalary, customWeeks = 39, additionalWeeklyEarnings = 0) => {
  const averageWeeklyEarnings = calculateAverageWeeklyEarnings(annualSalary, additionalWeeklyEarnings);

  // Calculate dynamic week breakdown
  // If duration <= 6 weeks, all weeks are at higher rate (90%)
  // If duration > 6 weeks, first 6 weeks at higher rate, rest at standard rate
  const higherRateWeeks = Math.min(customWeeks, SMP_RATES.higherRateWeeks);
  const standardRateWeeks = Math.max(0, customWeeks - SMP_RATES.higherRateWeeks);

  // First 6 weeks (or less): 90% of average weekly earnings
  const higherRateWeekly = averageWeeklyEarnings * 0.9;
  const higherRateTotalGross = higherRateWeekly * higherRateWeeks;

  // Next weeks: Lower of 90% or standard rate
  const standardRateWeekly = Math.min(
    averageWeeklyEarnings * 0.9,
    SMP_RATES.standardRateAmount
  );
  const standardRateTotalGross = standardRateWeekly * standardRateWeeks;

  // Total maternity pay
  const totalGrossMaternityPay = higherRateTotalGross + standardRateTotalGross;

  return {
    averageWeeklyEarnings,
    higherRate: {
      weeks: higherRateWeeks,
      weeklyAmount: higherRateWeekly,
      totalGross: higherRateTotalGross,
    },
    standardRate: {
      weeks: standardRateWeeks,
      weeklyAmount: standardRateWeekly,
      totalGross: standardRateTotalGross,
    },
    totalWeeks: customWeeks,
    totalGrossMaternityPay,
    paymentType: 'smp',
  };
};

/**
 * Calculate NHS Enhanced Maternity Pay (Agenda for Change) for each period
 * @param {number} annualSalary - Annual gross salary
 * @param {number} customWeeks - Custom maternity leave duration in weeks (default 39)
 * @returns {object} Breakdown of NHS Enhanced maternity pay periods
 */
export const calculateNHSEnhancedPay = (annualSalary, customWeeks = 39, additionalWeeklyEarnings = 0) => {
  const averageWeeklyEarnings = calculateAverageWeeklyEarnings(annualSalary, additionalWeeklyEarnings);

  // Phase 1: Full pay (100% of salary)
  // Up to first 8 weeks or customWeeks if less
  const fullPayWeeks = Math.min(customWeeks, NHS_ENHANCED_RATES.fullPayWeeks);
  const fullPayWeekly = averageWeeklyEarnings;
  const fullPayTotalGross = fullPayWeekly * fullPayWeeks;

  // Phase 2: Half pay + SMP (50% salary + £184.75/week)
  // Weeks 9-26 (18 weeks total) or remaining weeks if less
  const remainingAfterFullPay = Math.max(0, customWeeks - fullPayWeeks);
  const halfPayPlusSMPWeeks = Math.min(
    remainingAfterFullPay,
    NHS_ENHANCED_RATES.halfPayPlusSMPWeeks
  );
  const halfPayPlusSMPWeekly = averageWeeklyEarnings * 0.5 + SMP_RATES.standardRateAmount;
  const halfPayPlusSMPTotalGross = halfPayPlusSMPWeekly * halfPayPlusSMPWeeks;

  // Phase 3: SMP only (£184.75/week or 90% if lower)
  // Weeks 27-39 (13 weeks total) or remaining weeks if less
  const remainingAfterHalfPay = Math.max(0, customWeeks - fullPayWeeks - halfPayPlusSMPWeeks);
  const smpOnlyWeeks = Math.min(
    remainingAfterHalfPay,
    NHS_ENHANCED_RATES.smpOnlyWeeks
  );
  const smpOnlyWeekly = Math.min(
    averageWeeklyEarnings * 0.9,
    SMP_RATES.standardRateAmount
  );
  const smpOnlyTotalGross = smpOnlyWeekly * smpOnlyWeeks;

  // Total maternity pay
  const totalGrossMaternityPay =
    fullPayTotalGross + halfPayPlusSMPTotalGross + smpOnlyTotalGross;

  return {
    averageWeeklyEarnings,
    fullPay: {
      weeks: fullPayWeeks,
      weeklyAmount: fullPayWeekly,
      totalGross: fullPayTotalGross,
    },
    halfPayPlusSMP: {
      weeks: halfPayPlusSMPWeeks,
      weeklyAmount: halfPayPlusSMPWeekly,
      totalGross: halfPayPlusSMPTotalGross,
    },
    smpOnly: {
      weeks: smpOnlyWeeks,
      weeklyAmount: smpOnlyWeekly,
      totalGross: smpOnlyTotalGross,
    },
    totalWeeks: customWeeks,
    totalGrossMaternityPay,
    paymentType: 'nhsEnhanced',
  };
};

/**
 * Calculate annual income tax
 * @param {number} annualIncome - Annual gross income
 * @returns {number} Total annual income tax
 */
export const calculateIncomeTax = (annualIncome) => {
  if (annualIncome <= TAX_RATES.personalAllowance) {
    return 0;
  }

  let tax = 0;
  const taxableIncome = annualIncome - TAX_RATES.personalAllowance;

  if (annualIncome <= TAX_RATES.basicRateThreshold) {
    // Basic rate only
    tax = taxableIncome * TAX_RATES.basicRate;
  } else if (annualIncome <= TAX_RATES.higherRateThreshold) {
    // Basic rate + Higher rate
    const basicRateTax =
      (TAX_RATES.basicRateThreshold - TAX_RATES.personalAllowance) *
      TAX_RATES.basicRate;
    const higherRateTax =
      (annualIncome - TAX_RATES.basicRateThreshold) * TAX_RATES.higherRate;
    tax = basicRateTax + higherRateTax;
  } else {
    // Basic rate + Higher rate + Additional rate
    const basicRateTax =
      (TAX_RATES.basicRateThreshold - TAX_RATES.personalAllowance) *
      TAX_RATES.basicRate;
    const higherRateTax =
      (TAX_RATES.higherRateThreshold - TAX_RATES.basicRateThreshold) *
      TAX_RATES.higherRate;
    const additionalRateTax =
      (annualIncome - TAX_RATES.higherRateThreshold) * TAX_RATES.additionalRate;
    tax = basicRateTax + higherRateTax + additionalRateTax;
  }

  return tax;
};

/**
 * Calculate National Insurance contributions
 * @param {number} annualIncome - Annual gross income
 * @returns {number} Total annual NI contributions
 */
export const calculateNationalInsurance = (annualIncome) => {
  if (annualIncome <= NI_RATES.threshold) {
    return 0;
  }

  let ni = 0;

  if (annualIncome <= TAX_RATES.basicRateThreshold) {
    // Basic rate only
    ni = (annualIncome - NI_RATES.threshold) * NI_RATES.basicRate;
  } else {
    // Basic rate + Higher rate
    const basicNI =
      (TAX_RATES.basicRateThreshold - NI_RATES.threshold) * NI_RATES.basicRate;
    const higherNI =
      (annualIncome - TAX_RATES.basicRateThreshold) * NI_RATES.higherRate;
    ni = basicNI + higherNI;
  }

  return ni;
};

/**
 * Calculate pension contributions
 * @param {number} annualIncome - Annual gross income
 * @param {number} pensionPercentage - Pension contribution percentage (default 5%)
 * @returns {number} Annual pension contributions
 */
export const calculatePensionContributions = (
  annualIncome,
  pensionPercentage = 5
) => {
  return (annualIncome * pensionPercentage) / 100;
};

/**
 * Calculate net (take-home) maternity pay after all deductions
 * @param {number} annualSalary - Annual gross salary
 * @param {number} pensionPercentage - Pension contribution percentage (default 5%)
 * @param {number} customWeeks - Custom maternity leave duration in weeks (default 39)
 * @param {string} paymentType - Type of payment: 'smp' or 'nhsEnhanced' (default 'smp')
 * @param {number} fte - Full-Time Equivalent (0.5-1.0, default 1.0)
 * @param {number} annualHolidayDays - Annual holiday entitlement in days (default 27)
 * @param {number} kitDays - Number of KIT days (0-10, default 0)
 * @returns {object} Complete breakdown of maternity pay and deductions
 */
export const calculateNetMaternityPay = (
  annualSalary,
  pensionPercentage = 5,
  customWeeks = 39,
  paymentType = 'smp',
  fte = 1.0,
  annualHolidayDays = 27,
  kitDays = 0,
  additionalWeeklyEarnings = 0
) => {
  // Calculate gross maternity pay with custom duration and payment type
  const maternityPay =
    paymentType === 'nhsEnhanced'
      ? calculateNHSEnhancedPay(annualSalary, customWeeks, additionalWeeklyEarnings)
      : calculateMaternityPay(annualSalary, customWeeks, additionalWeeklyEarnings);

  const grossMaternityPay = maternityPay.totalGrossMaternityPay;

  // Calculate deductions based on maternity pay period
  const incomeTax = calculateIncomeTax(grossMaternityPay);
  const nationalInsurance = calculateNationalInsurance(grossMaternityPay);
  const pensionContributions = calculatePensionContributions(
    grossMaternityPay,
    pensionPercentage
  );

  // Calculate net pay
  const totalDeductions = incomeTax + nationalInsurance + pensionContributions;
  const netMaternityPay = grossMaternityPay - totalDeductions;

  // Weekly and monthly breakdowns
  const netWeekly = netMaternityPay / customWeeks;
  const netMonthly = netMaternityPay / (customWeeks / 52 * 12); // Accurate monthly calculation

  // Calculate holiday accrual during maternity leave
  const holidayAccrual = calculateHolidayAccrual(customWeeks, annualHolidayDays, fte);
  const holidayValue = calculateHolidayValue(holidayAccrual.daysAccrued, annualSalary, fte);

  // Calculate KIT days pay
  const kitDaysPay = calculateKITDaysPay(kitDays, annualSalary, fte);

  // Calculate bank shift boost if additional earnings provided
  let bankShiftBoost = null;
  if (additionalWeeklyEarnings > 0) {
    const baselineMaternityPay =
      paymentType === 'nhsEnhanced'
        ? calculateNHSEnhancedPay(annualSalary, customWeeks, 0)
        : calculateMaternityPay(annualSalary, customWeeks, 0);
    const baselineGross = baselineMaternityPay.totalGrossMaternityPay;
    const baselineTax = calculateIncomeTax(baselineGross);
    const baselineNI = calculateNationalInsurance(baselineGross);
    const baselinePension = calculatePensionContributions(baselineGross, pensionPercentage);
    const baselineNet = baselineGross - baselineTax - baselineNI - baselinePension;

    bankShiftBoost = {
      additionalWeeklyEarnings,
      boostAmount: netMaternityPay - baselineNet,
      baselineTotal: baselineNet,
    };
  }

  return {
    gross: {
      total: grossMaternityPay,
      weekly: grossMaternityPay / customWeeks,
      monthly: grossMaternityPay / (customWeeks / 52 * 12),
      breakdown: maternityPay,
    },
    deductions: {
      incomeTax,
      nationalInsurance,
      pensionContributions,
      total: totalDeductions,
    },
    net: {
      total: netMaternityPay,
      weekly: netWeekly,
      monthly: netMonthly,
    },
    additionalBenefits: {
      holidayAccrual: {
        daysAccrued: holidayAccrual.daysAccrued,
        value: holidayValue,
        annualHolidayDays,
      },
      kitDays: {
        days: kitDays,
        pay: kitDaysPay,
      },
      total: holidayValue + kitDaysPay,
    },
    bankShiftBoost,
    pensionPercentage,
    paymentType,
    fte,
  };
};

/**
 * Format currency for display
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
