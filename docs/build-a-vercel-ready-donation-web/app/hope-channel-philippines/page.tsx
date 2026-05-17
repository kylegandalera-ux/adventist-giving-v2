import { Tv } from "lucide-react";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

const options = ["Program Production", "Broadcast Support", "Digital Evangelism", "Equipment and Studio Support"];

export default function HopeChannelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hope Channel Philippines"
        title="Sharing Christ-centered hope through television and digital media."
        description="Support sample giving options for programs that encourage faith, family, health, Bible study, and service."
      />
      <MinistryDetail icon={<Tv size={36} />} options={options} />
      <CTASection title="Support Hope Channel Philippines" description="Your demo gift previews how media ministry support can be organized for future official giving." />
    </>
  );
}

function MinistryDetail({ icon, options }: { icon: ReactNode; options: string[] }) {
  return (
    <section className="bg-linen px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="text-gold-500">{icon}</div>
          <h2 className="mt-5 font-serif text-3xl font-bold text-navy-950">Mission-focused giving</h2>
          <p className="mt-4 leading-8 text-navy-900/70">
            Hope Channel Philippines brings biblical encouragement, practical Christian living, and health messages to audiences across the country and online.
          </p>
          <ButtonLink href="/donate" className="mt-7">Donate to Hope Channel</ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {options.map((option) => (
            <div key={option} className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft">
              <p className="text-xl font-black text-navy-950">{option}</p>
              <p className="mt-3 leading-7 text-navy-900/66">A sample designation that can later map to official ministry funds and reporting.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
