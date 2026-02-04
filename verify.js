import { calculateMonthlyPayment, formatCurrency } from './src/utils/calculator.js';

console.log("Verifying Car Loan Calculator Logic...");

// Scenario from screenshot
// Car Price: 70,671.00 (Alza 1.5 H)
// Downpayment: 7,000.00
// Loan Amount: 63,671.00
// Interest Rate: 2.60%

const loanAmount = 63671.00;
const rate = 2.60;

const testCases = [
    { years: 9, expected: "RM 727.50" }, // Approximate from screenshot
    { years: 7, expected: "RM 895.94" },
    { years: 5, expected: "RM 1,199.14" }
];

testCases.forEach(test => {
    const monthly = calculateMonthlyPayment(loanAmount, rate, test.years);
    const formatted = formatCurrency(monthly); // Note: formatCurrency adds spacing "RM 1,234.56" usually, or "RM1,234.56" depending on locale.
    // My util uses 'en-MY' which usually outputs "RM 1,234.56".
    // Let's print roughly.

    console.log(`[${test.years} YEARS] Expected: ~${test.expected} | Actual: ${formatted}`);
});
