import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the demo"
        title="A trustworthy starting point for Adventist online giving in Luzon."
        description="Adventist Giving Luzon is a sample application built to show how churches, missions, and media ministries could receive organized support through a future official platform."
      />
      <section className="bg-linen px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Mission-centered", "Every page keeps the focus on discipleship, local church service, media evangelism, and faithful stewardship."],
            ["Demo-only by design", "No real payments are processed, no official receipts are issued, and no donor information is stored."],
            ["Ready to grow", "The structure anticipates Supabase, authenticated admin accounts, payment gateways, reports, and compliance features."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-7 shadow-soft">
              <h2 className="text-xl font-black text-navy-950">{title}</h2>
              <p className="mt-4 leading-7 text-navy-900/70">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
