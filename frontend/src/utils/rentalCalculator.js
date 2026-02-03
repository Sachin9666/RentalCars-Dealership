export const calculateRentalTotal = (pricePerDay, startDate, endDate) => {
    if (!startDate || !endDate) return { base: 0, taxes: 0, insurance: 0, total: 0, days: 1 };

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const days = diffDays > 0 ? diffDays : 1;

    const base = pricePerDay * days;
    const taxes = Math.round(base * 0.18);
    const insurance = days * 200;
    const total = base + taxes + insurance;

    return { base, taxes, insurance, total, days };
};
