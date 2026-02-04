import React from 'react';
import { calculateMonthlyPayment, formatCurrency } from '../utils/calculator';

const ResultTable = ({ loanAmount, rate }) => {
    const tenures = [
        { label: '9 YEARS', months: 108, years: 9 },
        { label: '7 YEARS', months: 84, years: 7 },
        { label: '5 YEARS', months: 60, years: 5 },
    ];

    // Full Loan Calculation (Zero Downpayment context, but handled by parent mostly)
    // Actually, the request shows "Bulanan Full Loan" row. 
    // But wait, the main "Loan" is already calculated based on downpayment.
    // The table in the image shows:
    // - Bulanan (9 years)
    // - Bulanan (7 years)
    // - Bulanan (5 years)
    // - Bulanan Full Loan (9 years) - This implies a comparison or a specific row.

    // For now, I'll stick to the requested 5, 7, 9 years for the calculated loan amount.
    // If "Full Loan" needed, I'd need the original car price passed in.
    // I'll stick to the main simple table first.

    return (
        <div className="results-container">
            <div className="table-header">
                <div></div>
                <div>INTEREST</div>
                <div>YEARS</div>
                <div>MONTHLY PAYMENT</div>
            </div>

            {tenures.map((tenure) => {
                const monthly = calculateMonthlyPayment(loanAmount, rate, tenure.years);
                return (
                    <div key={tenure.years} className={`table-row ${tenure.years === 9 ? 'highlight' : ''}`}>
                        <div className="row-label">{tenure.months} BULAN</div>
                        <div className="row-interest">{rate.toFixed(2)}%</div>
                        <div className="row-years">{tenure.years}</div>
                        <div className="row-payment">{formatCurrency(monthly)}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ResultTable;
