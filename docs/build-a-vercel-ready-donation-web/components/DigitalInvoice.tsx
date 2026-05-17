"use client";

import { Printer } from "lucide-react";
import type { DonationInvoice as DonationInvoiceType } from "@/lib/types";
import { MAINTENANCE_FEE_RATE, maintenanceFeeAccount } from "@/lib/fees";

export function DigitalInvoice({ invoice }: { invoice: DonationInvoiceType }) {
  return (
    <section className="mt-8 rounded-[2rem] border border-navy-900/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-4 border-b border-navy-900/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-500">Digital acknowledgment</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy-950">Donation Invoice</h2>
          <p className="mt-2 text-sm leading-6 text-navy-900/60">
            Demo invoice only. This is not an official receipt and no payment has been processed.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white print:hidden"
        >
          <Printer size={16} aria-hidden="true" />
          Print / Save PDF
        </button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <InfoGroup
          title="Invoice Details"
          rows={[
            ["Invoice No.", invoice.invoiceNumber],
            ["Issued", invoice.issuedAt],
            ["Status", "Demo Pending"]
          ]}
        />
        <InfoGroup
          title="Donor"
          rows={[
            ["Name", invoice.donorName],
            ["Email", invoice.email],
            ["Mobile", invoice.mobile]
          ]}
        />
        <InfoGroup
          title="Giving Details"
          rows={[
            ["Donation Type", invoice.donationType],
            ["Recipient", invoice.recipient],
            ["Payment Method", invoice.paymentMethod]
          ]}
        />
        <InfoGroup
          title="Maintenance Fee Destination"
          rows={[
            ["Account", maintenanceFeeAccount.accountName],
            ["Owner", maintenanceFeeAccount.accountOwner],
            ["Bank", maintenanceFeeAccount.bankName],
            ["Account No.", maintenanceFeeAccount.accountNumber]
          ]}
        />
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-navy-900/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-cloud text-xs uppercase tracking-[0.14em] text-navy-900/60">
            <tr>
              <th className="px-5 py-4">Description</th>
              <th className="px-5 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/10">
            <InvoiceRow label={`Donation to ${invoice.recipient}`} value={invoice.donationAmount} />
            <InvoiceRow label={`${(MAINTENANCE_FEE_RATE * 100).toFixed(0)}% platform maintenance fee`} value={invoice.maintenanceFee} />
            <tr className="bg-gold-100/60 text-base font-black text-navy-950">
              <td className="px-5 py-4">Total demo charge</td>
              <td className="px-5 py-4 text-right">{formatPeso(invoice.totalCharge)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {invoice.message ? (
        <div className="mt-6 rounded-3xl bg-cloud p-5">
          <p className="text-sm font-black text-navy-950">Message or Prayer Request</p>
          <p className="mt-2 text-sm leading-6 text-navy-900/70">{invoice.message}</p>
        </div>
      ) : null}

      <p className="mt-6 text-xs leading-5 text-navy-900/60">
        Production note: official donation receipts should be generated only after confirmed payment settlement and according to the authorized church/ministry accounting process.
      </p>
    </section>
  );
}

function InfoGroup({ title, rows }: { title: string; rows: [string, string | number][] }) {
  return (
    <div className="rounded-3xl bg-cloud p-5">
      <h3 className="font-black text-navy-950">{title}</h3>
      <dl className="mt-4 grid gap-2 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 sm:grid-cols-[120px_1fr]">
            <dt className="text-navy-900/55">{label}</dt>
            <dd className="font-semibold text-navy-900">{value || "To be provided"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function InvoiceRow({ label, value }: { label: string; value: number }) {
  return (
    <tr>
      <td className="px-5 py-4 text-navy-900/70">{label}</td>
      <td className="px-5 py-4 text-right font-black text-navy-950">{formatPeso(value)}</td>
    </tr>
  );
}

function formatPeso(value: number) {
  return `₱${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
