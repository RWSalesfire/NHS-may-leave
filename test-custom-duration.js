/**
 * Test custom maternity duration feature
 * Tests all edge cases and validation scenarios
 */

const {
  calculateNetMaternityPay,
  validateMaternityWeeks,
  formatCurrency,
} = require('./src/utils/maternityCalculations.js');

console.log('='.repeat(70));
console.log('NHS Maternity Pay Calculator - Custom Duration Tests');
console.log('='.repeat(70));

const testSalary = 35000;
const testPension = 5;

// Test validation
console.log('\n📋 VALIDATION TESTS');
console.log('-'.repeat(70));

const validationTests = [
  { input: '1', expected: true, desc: 'Minimum (1 week)' },
  { input: '39', expected: true, desc: 'Standard (39 weeks)' },
  { input: '52', expected: true, desc: 'Maximum (52 weeks)' },
  { input: '0', expected: false, desc: 'Invalid: Zero weeks' },
  { input: '-5', expected: false, desc: 'Invalid: Negative' },
  { input: '53', expected: false, desc: 'Invalid: Over 52 weeks' },
  { input: '2.5', expected: false, desc: 'Invalid: Decimal' },
  { input: 'abc', expected: false, desc: 'Invalid: Non-numeric' },
];

validationTests.forEach(test => {
  const result = validateMaternityWeeks(test.input);
  const status = result.valid === test.expected ? '✓' : '✗';
  console.log(`${status} ${test.desc}: ${result.valid ? 'PASS' : result.error}`);
});

// Test calculations for different durations
console.log('\n\n💰 CALCULATION TESTS (£35,000 salary, 5% pension)');
console.log('-'.repeat(70));

const durationTests = [
  { weeks: 1, desc: 'Very short (1 week)' },
  { weeks: 5, desc: 'Below higher rate (5 weeks)' },
  { weeks: 6, desc: 'Exactly higher rate (6 weeks)' },
  { weeks: 7, desc: 'Just above higher rate (7 weeks)' },
  { weeks: 26, desc: 'Half standard (26 weeks)' },
  { weeks: 39, desc: 'Standard NHS (39 weeks)' },
  { weeks: 45, desc: 'Extended with unpaid (45 weeks)' },
  { weeks: 52, desc: 'Maximum (52 weeks)' },
];

durationTests.forEach(test => {
  console.log(`\n${test.desc} (${test.weeks} weeks):`);
  console.log('-'.repeat(70));

  const result = calculateNetMaternityPay(testSalary, testPension, test.weeks);

  console.log(`Higher Rate Period: ${result.gross.breakdown.higherRate.weeks} weeks @ ${formatCurrency(result.gross.breakdown.higherRate.weeklyAmount)}/week`);
  console.log(`  Total: ${formatCurrency(result.gross.breakdown.higherRate.totalGross)}`);

  if (result.gross.breakdown.standardRate.weeks > 0) {
    console.log(`Standard Rate Period: ${result.gross.breakdown.standardRate.weeks} weeks @ ${formatCurrency(result.gross.breakdown.standardRate.weeklyAmount)}/week`);
    console.log(`  Total: ${formatCurrency(result.gross.breakdown.standardRate.totalGross)}`);
  } else {
    console.log(`Standard Rate Period: None (all weeks at higher rate)`);
  }

  console.log(`\nGross Total: ${formatCurrency(result.gross.total)}`);
  console.log(`Deductions: ${formatCurrency(result.deductions.total)}`);
  console.log(`  - Tax: ${formatCurrency(result.deductions.incomeTax)}`);
  console.log(`  - NI: ${formatCurrency(result.deductions.nationalInsurance)}`);
  console.log(`  - Pension: ${formatCurrency(result.deductions.pensionContributions)}`);
  console.log(`\nNet Take-Home: ${formatCurrency(result.net.total)}`);
  console.log(`  Weekly: ${formatCurrency(result.net.weekly)}`);
  console.log(`  Monthly: ${formatCurrency(result.net.monthly)}`);

  if (test.weeks > 39) {
    console.log(`\n⚠️  WARNING: Weeks 40-${test.weeks} would be UNPAID leave`);
  }
});

// Edge case verification
console.log('\n\n🔍 EDGE CASE VERIFICATION');
console.log('-'.repeat(70));

// Test that 1 week = all at higher rate
const oneWeek = calculateNetMaternityPay(testSalary, testPension, 1);
console.log(`✓ 1 week test: Higher=${oneWeek.gross.breakdown.higherRate.weeks}, Standard=${oneWeek.gross.breakdown.standardRate.weeks}`);
console.log(`  Expected: Higher=1, Standard=0 ${oneWeek.gross.breakdown.higherRate.weeks === 1 && oneWeek.gross.breakdown.standardRate.weeks === 0 ? '✓ PASS' : '✗ FAIL'}`);

// Test that 6 weeks = all at higher rate
const sixWeeks = calculateNetMaternityPay(testSalary, testPension, 6);
console.log(`✓ 6 weeks test: Higher=${sixWeeks.gross.breakdown.higherRate.weeks}, Standard=${sixWeeks.gross.breakdown.standardRate.weeks}`);
console.log(`  Expected: Higher=6, Standard=0 ${sixWeeks.gross.breakdown.higherRate.weeks === 6 && sixWeeks.gross.breakdown.standardRate.weeks === 0 ? '✓ PASS' : '✗ FAIL'}`);

// Test that 7 weeks = 6 higher + 1 standard
const sevenWeeks = calculateNetMaternityPay(testSalary, testPension, 7);
console.log(`✓ 7 weeks test: Higher=${sevenWeeks.gross.breakdown.higherRate.weeks}, Standard=${sevenWeeks.gross.breakdown.standardRate.weeks}`);
console.log(`  Expected: Higher=6, Standard=1 ${sevenWeeks.gross.breakdown.higherRate.weeks === 6 && sevenWeeks.gross.breakdown.standardRate.weeks === 1 ? '✓ PASS' : '✗ FAIL'}`);

// Test that 39 weeks = 6 higher + 33 standard (default)
const thirtyNine = calculateNetMaternityPay(testSalary, testPension, 39);
console.log(`✓ 39 weeks test: Higher=${thirtyNine.gross.breakdown.higherRate.weeks}, Standard=${thirtyNine.gross.breakdown.standardRate.weeks}`);
console.log(`  Expected: Higher=6, Standard=33 ${thirtyNine.gross.breakdown.higherRate.weeks === 6 && thirtyNine.gross.breakdown.standardRate.weeks === 33 ? '✓ PASS' : '✗ FAIL'}`);

// Test that 52 weeks = 6 higher + 46 standard
const fiftyTwo = calculateNetMaternityPay(testSalary, testPension, 52);
console.log(`✓ 52 weeks test: Higher=${fiftyTwo.gross.breakdown.higherRate.weeks}, Standard=${fiftyTwo.gross.breakdown.standardRate.weeks}`);
console.log(`  Expected: Higher=6, Standard=46 ${fiftyTwo.gross.breakdown.higherRate.weeks === 6 && fiftyTwo.gross.breakdown.standardRate.weeks === 46 ? '✓ PASS' : '✗ FAIL'}`);

// Test totalWeeks is correctly passed through
console.log(`✓ Total weeks verification:`);
console.log(`  1 week: ${oneWeek.gross.breakdown.totalWeeks === 1 ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  6 weeks: ${sixWeeks.gross.breakdown.totalWeeks === 6 ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  39 weeks: ${thirtyNine.gross.breakdown.totalWeeks === 39 ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  52 weeks: ${fiftyTwo.gross.breakdown.totalWeeks === 52 ? '✓ PASS' : '✗ FAIL'}`);

console.log('\n' + '='.repeat(70));
console.log('All tests completed!');
console.log('='.repeat(70));
