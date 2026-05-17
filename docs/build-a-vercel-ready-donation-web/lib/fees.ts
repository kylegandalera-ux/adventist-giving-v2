export const MAINTENANCE_FEE_RATE = 0.02;

export const maintenanceFeeAccount = {
  accountName: "Platform Maintenance Account",
  accountOwner: "Your Name / Registered Operator",
  bankName: "To be provided",
  accountNumber: "To be provided",
  gcashNumber: "To be provided",
  mayaNumber: "To be provided",
  email: "maintenance@example.org"
};

export function calculateDonationBreakdown(amount: number) {
  const safeAmount = Number.isFinite(amount) && amount > 0 ? amount : 0;
  const maintenanceFee = roundCurrency(safeAmount * MAINTENANCE_FEE_RATE);
  const totalCharge = roundCurrency(safeAmount + maintenanceFee);

  return {
    donationAmount: roundCurrency(safeAmount),
    maintenanceFee,
    totalCharge
  };
}

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}
