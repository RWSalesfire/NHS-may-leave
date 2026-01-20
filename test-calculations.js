/**
 * Simple test to verify maternity pay calculations
 */

const {
  calculateNetMaternityPay,
  formatCurrency,
} = require('./src/utils/maternityCalculations.js');

console.log('='.repeat(60));
console.log('NHS Maternity Pay Calculator - Test Results');
console.log('='.repeat(60));

// Test Case 1: Average NHS nurse salary (£35,000)
console.log('\nTest Case 1: £35,000 annual salary, 5% pension');
console.log('-'.repeat(60));
const result1 = calculateNetMaternityPay(35000, 5);
console.log('Gross Maternity Pay:', formatCurrency(result1.gross.total));
console.log('Income Tax:', formatCurrency(result1.deductions.incomeTax));
console.log('National Insurance:', formatCurrency(result1.deductions.nationalInsurance));
console.log('Pension (5%):', formatCurrency(result1.deductions.pensionContributions));
console.log('Total Deductions:', formatCurrency(result1.deductions.total));
console.log('Net Take-Home:', formatCurrency(result1.net.total));
console.log('Weekly Net:', formatCurrency(result1.net.weekly));
console.log('Monthly Net:', formatCurrency(result1.net.monthly));

// Test Case 2: Higher salary (£50,000)
console.log('\n\nTest Case 2: £50,000 annual salary, 8% pension');
console.log('-'.repeat(60));
const result2 = calculateNetMaternityPay(50000, 8);
console.log('Gross Maternity Pay:', formatCurrency(result2.gross.total));
console.log('Income Tax:', formatCurrency(result2.deductions.incomeTax));
console.log('National Insurance:', formatCurrency(result2.deductions.nationalInsurance));
console.log('Pension (8%):', formatCurrency(result2.deductions.pensionContributions));
console.log('Total Deductions:', formatCurrency(result2.deductions.total));
console.log('Net Take-Home:', formatCurrency(result2.net.total));
console.log('Weekly Net:', formatCurrency(result2.net.weekly));
console.log('Monthly Net:', formatCurrency(result2.net.monthly));

// Test Case 3: Lower salary (£25,000)
console.log('\n\nTest Case 3: £25,000 annual salary, 5% pension');
console.log('-'.repeat(60));
const result3 = calculateNetMaternityPay(25000, 5);
console.log('Gross Maternity Pay:', formatCurrency(result3.gross.total));
console.log('Income Tax:', formatCurrency(result3.deductions.incomeTax));
console.log('National Insurance:', formatCurrency(result3.deductions.nationalInsurance));
console.log('Pension (5%):', formatCurrency(result3.deductions.pensionContributions));
console.log('Total Deductions:', formatCurrency(result3.deductions.total));
console.log('Net Take-Home:', formatCurrency(result3.net.total));
console.log('Weekly Net:', formatCurrency(result3.net.weekly));
console.log('Monthly Net:', formatCurrency(result3.net.monthly));

console.log('\n' + '='.repeat(60));
console.log('All calculations completed successfully!');
console.log('='.repeat(60));
