export type DonationType =
  | "Tithe"
  | "Offering"
  | "Church Building Fund"
  | "Evangelism Fund"
  | "Media Ministry"
  | "Hope Channel Philippines"
  | "Adventist World Radio 89.1 FM"
  | "Other";

export type Recipient = "Local Church" | "Mission" | "Hope Channel Philippines" | "Adventist World Radio 89.1 FM";

export type PaymentMethod = "GCash" | "Maya" | "Bank Transfer" | "Debit/Credit Card" | "Over-the-Counter Deposit";

export type Donation = {
  id: string;
  donorName: string;
  email: string;
  mobile: string;
  donationType: DonationType;
  recipient: Recipient | string;
  amount: number;
  paymentMethod: PaymentMethod;
  message?: string;
  date: string;
  status: "Demo Pending" | "Demo Confirmed";
};

export type Church = {
  id: string;
  name: string;
  location: string;
  missionConference: string;
  contactEmail: string;
};

export type Ministry = {
  id: string;
  name: string;
  description: string;
  focus: string;
  href?: string;
};

export type DashboardStats = {
  totalDonations: number;
  donorCount: number;
  byCategory: { label: string; value: number }[];
  byRecipient: { label: string; value: number }[];
  recentDonations: Donation[];
};
