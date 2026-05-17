import type { Church, DashboardStats, Ministry } from "@/lib/types";

export const churches: Church[] = [
  {
    id: "quezon-city-central",
    name: "Quezon City Central Seventh-day Adventist Church",
    location: "Quezon City, Metro Manila",
    missionConference: "Central Luzon Conference",
    contactEmail: "giving.qccentral@example.org"
  },
  {
    id: "baguio-mission",
    name: "Baguio Mission Seventh-day Adventist Church",
    location: "Baguio City, Benguet",
    missionConference: "Northern Luzon Mission",
    contactEmail: "baguiomission@example.org"
  },
  {
    id: "naga-adventist",
    name: "Naga Adventist Worship Center",
    location: "Naga City, Camarines Sur",
    missionConference: "South-Central Luzon Conference",
    contactEmail: "nagaadventist@example.org"
  },
  {
    id: "san-fernando-sda",
    name: "San Fernando Seventh-day Adventist Church",
    location: "San Fernando, Pampanga",
    missionConference: "Central Luzon Conference",
    contactEmail: "sanfernando.sda@example.org"
  },
  {
    id: "legazpi-city",
    name: "Legazpi City Seventh-day Adventist Church",
    location: "Legazpi City, Albay",
    missionConference: "Southern Luzon Mission",
    contactEmail: "legazpigiving@example.org"
  },
  {
    id: "tuguegarao",
    name: "Tuguegarao Adventist Church",
    location: "Tuguegarao City, Cagayan",
    missionConference: "Northern Luzon Mission",
    contactEmail: "tuguegarao.adventist@example.org"
  }
];

export const ministries: Ministry[] = [
  {
    id: "local-church",
    name: "Local Church Ministries",
    description: "Support worship, pastoral care, Sabbath School, community outreach, and local discipleship across Luzon.",
    focus: "Church life and member care"
  },
  {
    id: "evangelism",
    name: "Evangelism and Bible Study Work",
    description: "Help fund Bible studies, evangelistic meetings, small groups, and follow-up care for new interests.",
    focus: "Making disciples"
  },
  {
    id: "youth",
    name: "Youth Ministries",
    description: "Strengthen young people through camps, leadership training, service projects, and campus ministry.",
    focus: "Next generation"
  },
  {
    id: "health",
    name: "Health Ministries",
    description: "Support health lectures, community screening, wellness education, and compassionate service.",
    focus: "Whole-person care"
  },
  {
    id: "digital",
    name: "Digital Evangelism",
    description: "Extend Bible truth through livestreaming, social media, content production, and online Bible interest care.",
    focus: "Online mission"
  },
  {
    id: "hope",
    name: "Hope Channel Philippines",
    description: "Help produce and distribute Christ-centered television and digital programs for Filipino homes.",
    focus: "Media ministry",
    href: "/hope-channel-philippines"
  },
  {
    id: "awr",
    name: "Adventist World Radio 89.1 FM",
    description: "Support radio broadcast, listener follow-up, and gospel programming that reaches communities daily.",
    focus: "Radio outreach",
    href: "/awr-891-fm"
  }
];

export const dashboard: DashboardStats = {
  totalDonations: 428650,
  donorCount: 184,
  byCategory: [
    { label: "Tithe", value: 160000 },
    { label: "Offering", value: 78000 },
    { label: "Evangelism Fund", value: 62500 },
    { label: "Media Ministry", value: 84850 },
    { label: "Church Building Fund", value: 43300 }
  ],
  byRecipient: [
    { label: "Local Churches", value: 214500 },
    { label: "Mission", value: 81000 },
    { label: "Hope Channel Philippines", value: 77250 },
    { label: "AWR 89.1 FM", value: 55900 }
  ],
  recentDonations: [
    {
      id: "D-1008",
      donorName: "Sample Donor",
      email: "donor@example.org",
      mobile: "09170000000",
      donationType: "Hope Channel Philippines",
      recipient: "Hope Channel Philippines",
      amount: 5000,
      paymentMethod: "GCash",
      date: "2026-05-16",
      status: "Demo Confirmed"
    },
    {
      id: "D-1007",
      donorName: "Church Member",
      email: "member@example.org",
      mobile: "09180000000",
      donationType: "Evangelism Fund",
      recipient: "Mission",
      amount: 3500,
      paymentMethod: "Bank Transfer",
      date: "2026-05-15",
      status: "Demo Pending"
    },
    {
      id: "D-1006",
      donorName: "Guest Supporter",
      email: "guest@example.org",
      mobile: "09190000000",
      donationType: "Adventist World Radio 89.1 FM",
      recipient: "Adventist World Radio 89.1 FM",
      amount: 2500,
      paymentMethod: "Maya",
      date: "2026-05-14",
      status: "Demo Confirmed"
    }
  ]
};
