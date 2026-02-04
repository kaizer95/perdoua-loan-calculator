export const calculateMonthlyPayment = (principal, rate, years) => {
    if (years <= 0) return 0;
    // If rate is 0, just divide principal by months
    if (rate <= 0) return principal / (years * 12);

    const totalInterest = principal * (rate / 100) * years;
    const totalLoan = principal + totalInterest;
    const monthly = totalLoan / (years * 12);

    return monthly;
};

export const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-MY', {
        style: 'currency',
        currency: 'MYR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
};
