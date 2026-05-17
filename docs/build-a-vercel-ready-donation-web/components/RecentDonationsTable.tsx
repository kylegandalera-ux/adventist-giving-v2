import type { Donation } from "@/lib/types";

export function RecentDonationsTable({ donations }: { donations: Donation[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-navy-900/10 text-left text-sm">
          <thead className="bg-cloud text-xs uppercase tracking-[0.14em] text-navy-900/60">
            <tr>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Donor</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Recipient</th>
              <th className="px-5 py-4 text-right">Amount</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/10">
            {donations.map((donation) => (
              <tr key={donation.id} className="text-navy-900/72">
                <td className="px-5 py-4">{donation.date}</td>
                <td className="px-5 py-4 font-semibold text-navy-950">{donation.donorName}</td>
                <td className="px-5 py-4">{donation.donationType}</td>
                <td className="px-5 py-4">{donation.recipient}</td>
                <td className="px-5 py-4 text-right font-bold text-navy-950">₱{donation.amount.toLocaleString()}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-navy-900">{donation.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
