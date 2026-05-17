import { Radio } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

const options = ["Radio Broadcast Support", "Digital Evangelism", "Listener Care and Follow-up", "Equipment and Studio Support", "Evangelistic Programs"];

export default function AwrPage() {
  return (
    <>
      <PageHeader
        eyebrow="Adventist World Radio 89.1 FM"
        title="Carrying the gospel through radio, digital outreach, and listener care."
        description="A dedicated demo page for supporting radio ministry and follow-up work connected to AWR 89.1 FM."
      />
      <section className="bg-linen px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <Radio className="text-gold-500" size={36} />
            <h2 className="mt-5 font-serif text-3xl font-bold text-navy-950">Mission-focused donation message</h2>
            <p className="mt-4 leading-8 text-navy-900/70">
              Support broadcast programming, listener response, Bible study connections, and evangelistic messages that can reach homes, vehicles, and communities.
            </p>
            <ButtonLink href="/donate" className="mt-7">Donate to AWR 89.1 FM</ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft">
                <p className="text-xl font-black text-navy-950">{option}</p>
                <p className="mt-3 leading-7 text-navy-900/66">A sample giving option prepared for future official fund mapping.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Support Adventist World Radio 89.1 FM" />
    </>
  );
}
