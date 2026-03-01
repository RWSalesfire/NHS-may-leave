/**
 * NHS Pay Bands and Reference Data
 * Based on NHS Agenda for Change 2025/26
 */

// NHS Pay Bands with salary ranges (2025/26 estimates)
export const NHS_PAY_BANDS = [
  {
    id: 'band2',
    label: 'Band 2 - Healthcare Assistant',
    minSalary: 23500,
    maxSalary: 25000,
    midpoint: 24250,
  },
  {
    id: 'band3',
    label: 'Band 3 - Support Worker',
    minSalary: 25000,
    maxSalary: 26500,
    midpoint: 25750,
  },
  {
    id: 'band4',
    label: 'Band 4 - Senior Support Worker',
    minSalary: 26500,
    maxSalary: 29000,
    midpoint: 27750,
  },
  {
    id: 'band5',
    label: 'Band 5 - Nurse/AHP',
    minSalary: 31000,
    maxSalary: 34500,
    midpoint: 32750,
  },
  {
    id: 'band6',
    label: 'Band 6 - Senior Nurse',
    minSalary: 37500,
    maxSalary: 44000,
    midpoint: 40750,
  },
  {
    id: 'band7',
    label: 'Band 7 - Team Lead',
    minSalary: 45000,
    maxSalary: 52000,
    midpoint: 48500,
  },
  {
    id: 'band8a',
    label: 'Band 8a - Manager',
    minSalary: 53000,
    maxSalary: 62000,
    midpoint: 57500,
  },
  {
    id: 'band8b',
    label: 'Band 8b - Senior Manager',
    minSalary: 63000,
    maxSalary: 72000,
    midpoint: 67500,
  },
  {
    id: 'custom',
    label: 'Custom Salary',
    minSalary: null,
    maxSalary: null,
    midpoint: null,
  },
];

// Get pay band by ID
export const getPayBandById = (id) => {
  return NHS_PAY_BANDS.find((band) => band.id === id);
};

// Get pay band label for display
export const getPayBandLabel = (id) => {
  const band = getPayBandById(id);
  return band ? band.label : 'Unknown';
};

// Get salary range string for display
export const getSalaryRangeDisplay = (id) => {
  const band = getPayBandById(id);
  if (!band || band.id === 'custom') return null;

  return `£${band.minSalary.toLocaleString()} - £${band.maxSalary.toLocaleString()}`;
};

/**
 * Holiday Accrual Calculation
 * NHS staff typically get 27 days annual leave + 8 bank holidays = 35 days
 * This accrues during maternity leave
 */
export const NHS_HOLIDAY_ENTITLEMENT = {
  defaultAnnualLeaveDays: 27,
  bankHolidayDays: 8,
  totalDays: 35,
  workingDaysPerYear: 260, // 52 weeks × 5 days
};

/**
 * Calculate holiday days accrued during maternity leave
 * @param {number} weeks - Number of weeks of maternity leave
 * @param {number} annualHolidayDays - Annual holiday entitlement in days (default 27)
 * @returns {object} Holiday accrual breakdown
 */
export const calculateHolidayAccrual = (weeks, annualHolidayDays = 27) => {
  // Total holiday days including bank holidays
  const totalHolidayDays = annualHolidayDays + NHS_HOLIDAY_ENTITLEMENT.bankHolidayDays;

  // Days accrued per week
  const daysPerWeek = totalHolidayDays / 52;

  // Total days accrued during maternity
  const daysAccrued = Math.round(daysPerWeek * weeks * 10) / 10; // Round to 1 decimal

  return {
    daysAccrued,
    annualHolidayDays,
    totalHolidayDays,
  };
};

/**
 * Calculate monetary value of accrued holiday
 * @param {number} daysAccrued - Number of holiday days accrued
 * @param {number} annualSalary - Annual gross salary
 * @returns {number} Monetary value of accrued holiday
 */
export const calculateHolidayValue = (daysAccrued, annualSalary) => {
  const dailyRate = annualSalary / NHS_HOLIDAY_ENTITLEMENT.workingDaysPerYear;
  return daysAccrued * dailyRate;
};

/**
 * KIT Days (Keeping in Touch) Calculation
 * Up to 10 paid days during maternity leave at normal rate
 */
export const KIT_DAYS = {
  maxDays: 10,
  minDays: 0,
};

/**
 * Calculate KIT days pay
 * @param {number} kitDays - Number of KIT days (0-10)
 * @param {number} annualSalary - Annual gross salary
 * @returns {number} Total pay for KIT days
 */
export const calculateKITDaysPay = (kitDays, annualSalary) => {
  if (kitDays < KIT_DAYS.minDays || kitDays > KIT_DAYS.maxDays) {
    return 0;
  }

  const dailyRate = annualSalary / NHS_HOLIDAY_ENTITLEMENT.workingDaysPerYear;
  return kitDays * dailyRate;
};
