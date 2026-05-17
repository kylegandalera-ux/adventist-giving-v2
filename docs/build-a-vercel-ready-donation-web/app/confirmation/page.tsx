import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <section className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
        <CheckCircle2 className="mx-auto text-gold-500" size={54} aria-hidden="true" />
        <h1 className="mt-6 font-serif text-4xl font-bold text-navy-950">Thank you for your faithful support.</h1>
        <p className="mt-5 text-lg leading-8 text-navy-900/72">
          Your giving helps advance God&apos;s work across Luzon.
        </p>
        <p className="mt-5 rounded-2xl bg-cloud p-4 text-sm leading-6 text-navy-900/65">
          This is a donor confirmation demo. No payment was processed, no official receipt was issued, and no donor information was stored.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/donate" className="focus-ring rounded-full bg-gold-500 px-6 py-3 text-sm font-black text-navy-950">Give Again</Link>
          <Link href="/" className="focus-ring rounded-full border border-navy-900/12 px-6 py-3 text-sm font-bold text-navy-900">Return Home</Link>
        </div>
      </div>
    </section>
  );
}
