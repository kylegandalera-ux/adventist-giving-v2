import { Radio } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const options = ["Radio Broadcast Support", "Digital Evangelism", "Listener Care and Follow-up", "Equipment and Studio Support", "Evangelistic Programs"];

export default function AwrPage() {
  return (
    <>
      <MediaTabs active="awr" />
      <section className="awr-shell overflow-hidden text-white">
        <div className="signal-lines mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-awr-gold">
              Adventist World Radio 89.1 FM
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-bold leading-[1.05] sm:text-6xl">
              Carrying the gospel through radio, digital outreach, and listener care.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              A dedicated demo page for supporting radio ministry and follow-up work connected to AWR 89.1 FM.
            </p>
            <ButtonLink href="/donate" variant="custom" className="mt-9 bg-awr-gold text-awr-navy shadow-awr hover:bg-gold-400">
              Donate to AWR 89.1 FM
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-awr backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-awr-navy">
              <Radio className="text-awr-red" size={42} />
              <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-awr-red">Radio outreach</p>
              <h2 className="mt-3 text-3xl font-black">Broadcast support, listener response, and evangelistic follow-up.</h2>
              <p className="mt-4 leading-7 text-awr-navy/70">
                A signal-inspired palette gives AWR its own identity while keeping the donation experience calm and trustworthy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-awr-mist px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-awr">
            <Radio className="text-awr-red" size={36} />
            <h2 className="mt-5 font-serif text-3xl font-bold text-awr-navy">Mission-focused donation message</h2>
            <p className="mt-4 leading-8 text-awr-navy/70">
              Support broadcast programming, listener response, Bible study connections, and evangelistic messages that can reach homes, vehicles, and communities.
            </p>
            <ButtonLink href="/donate" variant="custom" className="mt-7 bg-awr-red text-white shadow-awr hover:bg-awr-blue">Donate to AWR 89.1 FM</ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="rounded-3xl border border-awr-red/10 bg-white p-6 shadow-awr">
                <p className="text-xl font-black text-awr-navy">{option}</p>
                <p className="mt-3 leading-7 text-awr-navy/70">A sample giving option prepared for future official fund mapping.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AwrCta />
    </>
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

function AwrCta() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-awr-navy shadow-awr">
        <div className="signal-lines grid gap-8 p-8 text-white md:grid-cols-[1.4fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-awr-gold">Voice of hope</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Support Adventist World Radio 89.1 FM</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Help prepare a future pathway for broadcast support, listener care, and evangelistic program giving.
            </p>
          </div>
          <ButtonLink href="/donate" variant="custom" className="w-full bg-awr-gold text-awr-navy shadow-awr hover:bg-gold-400 md:w-auto">Give Now</ButtonLink>
        </div>
      </div>
    </section>
  );
}
