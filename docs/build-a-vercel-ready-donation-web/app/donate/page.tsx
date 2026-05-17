import { DonationForm } from "@/components/DonationForm";
import { PageHeader } from "@/components/PageHeader";

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Demo donation"
        title="Give to a church, mission, or media ministry."
        description="Complete the sample form below to preview a future online giving experience for Adventist Giving Luzon."
      />
      <section className="bg-linen px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-[2rem] bg-navy-950 p-7 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">Prepared methods</p>
            <h2 className="mt-4 font-serif text-3xl font-bold">Future-ready payment structure</h2>
            <p className="mt-4 leading-7 text-white/70">
              GCash, Maya, PayMongo, bank transfer, debit and credit card flows can be connected when official accounts and compliance are ready.
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm font-bold text-gold-400">Maintenance fee model</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                The demo now calculates a disclosed 2% platform maintenance fee on top of each gift. Live implementation should use approved gateway split payments or transfer rules.
              </p>
            </div>
          </aside>
          <DonationForm />
        </div>
      </section>
    </>
  );
}
