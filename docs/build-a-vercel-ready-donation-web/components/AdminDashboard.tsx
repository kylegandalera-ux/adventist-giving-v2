"use client";

import { Download } from "lucide-react";
import { dashboard } from "@/data/sample";
import { calculateDonationBreakdown, MAINTENANCE_FEE_RATE } from "@/lib/fees";
import { RecentDonationsTable } from "@/components/RecentDonationsTable";
import { StatCard } from "@/components/StatCard";

export function AdminDashboard() {
  const maintenanceFees = dashboard.recentDonations.reduce((total, donation) => {
    return total + calculateDonationBreakdown(donation.amount).maintenanceFee;
  }, 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        <StatCard label="Total donations" value={`₱${dashboard.totalDonations.toLocaleString()}`} helper="Sample data only" />
        <StatCard label="Number of donors" value={dashboard.donorCount.toString()} helper="Demo donor count" />
        <StatCard label="Maintenance fees" value={`₱${maintenanceFees.toLocaleString()}`} helper={`${(MAINTENANCE_FEE_RATE * 100).toFixed(0)}% shown on recent demo gifts`} />
      </div>

      <div className="mt-8 rounded-[2rem] border border-navy-900/10 bg-white p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-4">
          <input type="date" className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm" />
          <select className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm">
            <option>All categories</option>
            {dashboard.byCategory.map((item) => <option key={item.label}>{item.label}</option>)}
          </select>
          <select className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm">
            <option>All recipients</option>
            {dashboard.byRecipient.map((item) => <option key={item.label}>{item.label}</option>)}
          </select>
          <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-navy-900 px-4 py-3 text-sm font-bold text-white">
            <Download size={16} /> Export Placeholder
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Breakdown title="Donations by Category" items={dashboard.byCategory} />
        <Breakdown title="Donations by Recipient" items={dashboard.byRecipient} />
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-black text-navy-950">Recent Donations</h2>
        <RecentDonationsTable donations={dashboard.recentDonations} />
      </div>
    </section>
  );
}

function Breakdown({ title, items }: { title: string; items: { label: string; value: number }[] }) {
  const max = Math.max(...items.map((item) => item.value));
  return (
    <div className="rounded-[2rem] border border-navy-900/10 bg-white p-6 shadow-soft">
      <h2 className="text-xl font-black text-navy-950">{title}</h2>
      <div className="mt-6 grid gap-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-bold text-navy-900">{item.label}</span>
              <span className="text-navy-900/62">₱{item.value.toLocaleString()}</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-cloud">
              <div className="h-full rounded-full bg-gold-500" style={{ width: `${(item.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
