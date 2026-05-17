import { Tv } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const options = ["Program Production", "Broadcast Support", "Digital Evangelism", "Equipment and Studio Support"];

export default function HopeChannelPage() {
  return (
    <>
      <MediaTabs active="hope" />
      <section className="hope-shell overflow-hidden text-white">
        <div className="signal-lines mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-hope-gold">
              Hope Channel Philippines
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-bold leading-[1.05] sm:text-6xl">
              Sharing Christ-centered hope through television and digital media.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Support sample giving options for programs that encourage faith, family, health, Bible study, and service.
            </p>
            <ButtonLink href="/donate" variant="custom" className="mt-9 bg-hope-gold text-hope-navy shadow-hope hover:bg-gold-400">
              Donate to Hope Channel
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-hope backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-hope-navy">
              <Tv className="text-hope-blue" size={42} />
              <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-hope-blue">Media ministry</p>
              <h2 className="mt-3 text-3xl font-black">Faith, health, family, and Bible-centered programming.</h2>
              <p className="mt-4 leading-7 text-hope-navy/70">
                A dedicated page treatment for visual broadcast ministry while staying connected to the wider Luzon giving platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <MinistryDetail icon={<Tv size={36} />} options={options} />
      <HopeCta />
    </>
  );
}

function MinistryDetail({ icon, options }: { icon: ReactNode; options: string[] }) {
  return (
    <section className="bg-hope-tint px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-hope">
          <div className="text-hope-blue">{icon}</div>
          <h2 className="mt-5 font-serif text-3xl font-bold text-hope-navy">Mission-focused giving</h2>
          <p className="mt-4 leading-8 text-hope-navy/70">
            Hope Channel Philippines brings biblical encouragement, practical Christian living, and health messages to audiences across the country and online.
          </p>
          <ButtonLink href="/donate" variant="custom" className="mt-7 bg-hope-blue text-white shadow-hope hover:bg-hope-navy">Donate to Hope Channel</ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {options.map((option) => (
            <div key={option} className="rounded-3xl border border-hope-blue/10 bg-white p-6 shadow-hope">
              <p className="text-xl font-black text-hope-navy">{option}</p>
              <p className="mt-3 leading-7 text-hope-navy/70">A sample designation that can later map to official ministry funds and reporting.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaTabs({ active }: { active: "hope" | "awr" }) {
  return (
    <div className="bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-3xl border border-navy-900/10 bg-cloud p-2 sm:flex-row">
        <Link
          href="/hope-channel-philippines"
          className={`focus-ring rounded-2xl px-5 py-3 text-center text-sm font-black ${active === "hope" ? "bg-hope-blue text-white shadow-hope" : "bg-white text-navy-900"}`}
        >
          Hope Channel Philippines
        </Link>
        <Link
          href="/awr-891-fm"
          className={`focus-ring rounded-2xl px-5 py-3 text-center text-sm font-black ${active === "awr" ? "bg-awr-blue text-white shadow-awr" : "bg-white text-navy-900"}`}
        >
          Adventist World Radio 89.1 FM
        </Link>
      </div>
    </div>
  );
}

function HopeCta() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-hope-navy shadow-hope">
        <div className="signal-lines grid gap-8 p-8 text-white md:grid-cols-[1.4fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-hope-gold">Hope in every home</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Support Hope Channel Philippines</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Your demo gift previews how media ministry support can be organized for future official giving.
            </p>
          </div>
          <ButtonLink href="/donate" variant="custom" className="w-full bg-hope-gold text-hope-navy shadow-hope hover:bg-gold-400 md:w-auto">Give Now</ButtonLink>
        </div>
      </div>
    </section>
  );
}
