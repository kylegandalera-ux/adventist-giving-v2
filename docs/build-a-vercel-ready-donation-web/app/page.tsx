import { ArrowRight, Church, HandHeart, Radio, ShieldCheck, Tv, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";

const missionCards = [
  { title: "Local Church Giving", text: "Support worship, pastoral care, Sabbath School, community service, and church family needs.", icon: Church },
  { title: "Mission Giving", text: "Fund Bible work, evangelism, discipleship, health outreach, and new mission opportunities.", icon: UsersRound },
  { title: "Hope Channel Philippines", text: "Help create Christ-centered media that brings hope into Filipino homes and devices.", icon: Tv },
  { title: "Adventist World Radio 89.1 FM", text: "Support radio ministry, listener care, and gospel programming for communities across Luzon.", icon: Radio }
];

export default function HomePage() {
  return (
    <>
      <section className="mission-shell overflow-hidden text-white">
        <div className="field-lines mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
              Seventh-day Adventist Giving in Luzon
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
              Give with Faith. Support the Mission.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              An online giving platform for Seventh-day Adventist churches and ministries across Luzon.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/donate">Give Now</ButtonLink>
              <ButtonLink href="/churches" variant="light">View Churches</ButtonLink>
              <ButtonLink href="/ministries" variant="light">Support Media Ministries</ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.2rem] border border-white/20 bg-white/10 p-5 shadow-soft backdrop-blur">
              <div className="rounded-[1.6rem] bg-linen p-6 text-navy-950">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-navy-800/70">Mission Offering</p>
                  <HandHeart className="text-gold-500" size={28} />
                </div>
                <div className="mt-8 grid gap-4">
                  {["Local church care", "Bible study work", "Broadcast ministry"].map((item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-black text-gold-400">{index + 1}</span>
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-3xl bg-navy-950 p-5 text-white">
                  <p className="text-sm text-white/62">Demo giving readiness</p>
                  <p className="mt-2 text-3xl font-black">PayMongo, Maya, GCash</p>
                  <p className="mt-2 text-sm text-white/62">Prepared for future integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-500">Channels of service</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-navy-950">One giving path for churches, missions, and Adventist media.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {missionCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft">
                <card.icon className="text-gold-500" size={30} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black text-navy-950">{card.title}</h3>
                <p className="mt-3 leading-7 text-navy-900/68">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-500">Transparency and stewardship</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-navy-950">Designed for trust before it ever handles live payments.</h2>
            <p className="mt-5 leading-8 text-navy-900/70">
              The demo separates donor experience, church records, ministry categories, and payment methods so official finance, receipts, and privacy controls can be added carefully later.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["No real payments", "Sample data only", "Future receipt tracking"].map((item) => (
              <div key={item} className="rounded-3xl bg-cloud p-6">
                <ShieldCheck className="text-gold-500" size={24} />
                <p className="mt-4 font-black text-navy-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-500">How giving works</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Choose a church or ministry", "Select donation type and method", "Receive demo confirmation"].map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-black text-gold-400">{index + 1}</span>
                <h3 className="mt-5 text-xl font-black text-navy-950">{step}</h3>
                <p className="mt-3 text-navy-900/68">The current flow is intentionally demo-only while leaving a clear path for official implementation.</p>
              </div>
            ))}
          </div>
          <ButtonLink href="/donate" className="mt-10">Start a Demo Gift <ArrowRight className="ml-2" size={18} /></ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
