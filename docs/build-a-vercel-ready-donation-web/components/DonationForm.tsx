"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Info, ReceiptText, ShieldCheck } from "lucide-react";
import { calculateDonationBreakdown, MAINTENANCE_FEE_RATE, maintenanceFeeAccount } from "@/lib/fees";
import type { DonationInvoice } from "@/lib/types";
import { DigitalInvoice } from "@/components/DigitalInvoice";

const donationTypes = [
  "Tithe",
  "Offering",
  "Church Building Fund",
  "Evangelism Fund",
  "Media Ministry",
  "Hope Channel Philippines",
  "Adventist World Radio 89.1 FM",
  "Other"
];

const recipients = ["Local Church", "Mission", "Hope Channel Philippines", "Adventist World Radio 89.1 FM"];
const paymentMethods = ["GCash", "Maya", "Bank Transfer", "Debit/Credit Card", "Over-the-Counter Deposit"];

const inputClass =
  "focus-ring w-full rounded-2xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-950 shadow-sm outline-none transition placeholder:text-navy-900/40";

export function DonationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState("");
  const [invoice, setInvoice] = useState<DonationInvoice | null>(null);
  const breakdown = calculateDonationBreakdown(Number(amount));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    ["donorName", "email", "mobile", "amount"].forEach((field) => {
      if (!String(form.get(field) || "").trim()) nextErrors[field] = "This field is required.";
    });

    const email = String(form.get("email") || "");
    const submittedAmount = Number(form.get("amount"));
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!Number.isFinite(submittedAmount) || submittedAmount <= 0) nextErrors.amount = "Enter an amount greater than zero.";
    if (!form.get("consent")) nextErrors.consent = "Please confirm data privacy consent for this demo submission.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      const submittedBreakdown = calculateDonationBreakdown(submittedAmount);
      setInvoice({
        invoiceNumber: createInvoiceNumber(),
        issuedAt: new Date().toLocaleString("en-PH", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }),
        donorName: String(form.get("donorName") || ""),
        email: String(form.get("email") || ""),
        mobile: String(form.get("mobile") || ""),
        donationType: String(form.get("donationType") || ""),
        recipient: String(form.get("recipient") || ""),
        donationAmount: submittedBreakdown.donationAmount,
        maintenanceFee: submittedBreakdown.maintenanceFee,
        totalCharge: submittedBreakdown.totalCharge,
        paymentMethod: String(form.get("paymentMethod") || ""),
        message: String(form.get("message") || "").trim()
      });
      setSubmitted(true);
      setAmount("");
      event.currentTarget.reset();
    }
  }

  if (submitted) {
    return (
      <div>
        <div className="rounded-[2rem] border border-gold-500/40 bg-white p-8 shadow-soft">
          <CheckCircle2 className="text-gold-500" size={42} aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl font-bold text-navy-950">Thank you for your faithful support.</h2>
          <p className="mt-4 text-lg leading-8 text-navy-900/70">
            Your giving helps advance God&apos;s work across Luzon.
          </p>
          <p className="mt-4 rounded-2xl bg-cloud p-4 text-sm leading-6 text-navy-900/70">
            Demo notice: no real payment was processed, no donor record was saved, and no maintenance fee was transferred.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => {
                setSubmitted(false);
                setInvoice(null);
              }}
              className="focus-ring rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-gold-400"
            >
              Make Another Demo Gift
            </button>
            <Link href="/confirmation" className="focus-ring rounded-full border border-navy-900/10 px-5 py-3 text-center text-sm font-bold text-navy-900">
              View Confirmation Page
            </Link>
          </div>
        </div>
        {invoice ? <DigitalInvoice invoice={invoice} /> : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-navy-900/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-8 flex items-start gap-4 rounded-3xl bg-navy-950 p-5 text-white">
        <ShieldCheck className="mt-1 text-gold-400" size={24} aria-hidden="true" />
        <div>
          <h2 className="font-bold">Demo giving form</h2>
          <p className="mt-1 text-sm leading-6 text-white/70">Payment buttons are prepared for future gateway integration but remain disabled from real processing.</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl border border-gold-500/40 bg-gold-100/60 p-5">
        <div className="flex items-start gap-3">
          <Info className="mt-1 shrink-0 text-gold-500" size={20} aria-hidden="true" />
          <div>
            <h2 className="font-black text-navy-950">Maintenance fee disclosure</h2>
            <p className="mt-1 text-sm leading-6 text-navy-900/70">
              A {(MAINTENANCE_FEE_RATE * 100).toFixed(0)}% platform maintenance fee is added to each demo transaction. This fee is shown separately and is intended for platform maintenance, hosting, support, and administration.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Donor Name" error={errors.donorName}>
            <input name="donorName" className={inputClass} placeholder="Juan Dela Cruz" />
          </Field>
          <Field label="Email Address" error={errors.email}>
            <input name="email" className={inputClass} placeholder="juan@example.com" />
          </Field>
          <Field label="Mobile Number" error={errors.mobile}>
            <input name="mobile" className={inputClass} placeholder="09XX XXX XXXX" />
          </Field>
          <Field label="Donation Type">
            <select name="donationType" className={inputClass}>
              {donationTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
          </Field>
          <Field label="Select Recipient">
            <select name="recipient" className={inputClass}>
              {recipients.map((recipient) => <option key={recipient}>{recipient}</option>)}
            </select>
          </Field>
          <Field label="Donation Amount" error={errors.amount}>
            <input
              name="amount"
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className={inputClass}
              placeholder="1000"
            />
          </Field>
          <Field label="Payment Method">
            <select name="paymentMethod" className={inputClass}>
              {paymentMethods.map((method) => <option key={method}>{method}</option>)}
            </select>
          </Field>
          <Field label="Message or Prayer Request">
            <textarea name="message" className={`${inputClass} min-h-28 resize-y`} placeholder="Optional" />
          </Field>
        </div>

        <aside className="grid gap-4 self-start">
          <div className="rounded-3xl border border-navy-900/10 bg-cloud p-5">
            <div className="flex items-center gap-3">
              <ReceiptText className="text-gold-500" size={22} aria-hidden="true" />
              <h2 className="font-black text-navy-950">Transaction breakdown</h2>
            </div>
            <dl className="mt-5 grid gap-3 text-sm">
              <BreakdownRow label="Donation to selected recipient" value={breakdown.donationAmount} />
              <BreakdownRow label="2% maintenance fee" value={breakdown.maintenanceFee} />
              <div className="mt-2 border-t border-navy-900/10 pt-4">
                <BreakdownRow label="Total demo charge" value={breakdown.totalCharge} strong />
              </div>
            </dl>
            <p className="mt-4 text-xs leading-5 text-navy-900/60">
              In a live gateway, this should be implemented as an approved split or transfer rule, not by manually handling donor funds.
            </p>
          </div>

          <div className="rounded-3xl border border-navy-900/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-500">Maintenance fee destination</p>
            <h3 className="mt-3 font-black text-navy-950">{maintenanceFeeAccount.accountName}</h3>
            <div className="mt-4 grid gap-2 text-sm text-navy-900/70">
              <p>Owner: {maintenanceFeeAccount.accountOwner}</p>
              <p>Bank: {maintenanceFeeAccount.bankName}</p>
              <p>Account No.: {maintenanceFeeAccount.accountNumber}</p>
              <p>GCash: {maintenanceFeeAccount.gcashNumber}</p>
              <p>Maya: {maintenanceFeeAccount.mayaNumber}</p>
              <p>Email: {maintenanceFeeAccount.email}</p>
            </div>
          </div>
        </aside>
      </div>

      <label className="mt-6 flex gap-3 rounded-2xl bg-cloud p-4 text-sm leading-6 text-navy-900/70">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-navy-900/20 text-gold-500" />
        <span>I understand this is a demo, consent to the sample form flow, and acknowledge that a separately disclosed 2% maintenance fee would be added in a future live transaction.</span>
      </label>
      {errors.consent ? <p className="mt-2 text-sm font-semibold text-red-700">{errors.consent}</p> : null}

      <button type="submit" className="focus-ring mt-7 w-full rounded-full bg-gold-500 px-6 py-4 text-base font-black text-navy-950 shadow-glow transition hover:bg-gold-400">
        Submit Demo Donation
      </button>
    </form>
  );
}

function createInvoiceNumber() {
  const date = new Date();
  const stamp = date.toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `AGL-${stamp}-${suffix}`;
}

function BreakdownRow({ label, value, strong = false }: { label: string; value: number; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-4 ${strong ? "text-base font-black text-navy-950" : "text-navy-900/70"}`}>
      <dt>{label}</dt>
      <dd className="font-black text-navy-950">₱{value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</dd>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-navy-900">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-red-700">{error}</span> : null}
    </label>
  );
}
