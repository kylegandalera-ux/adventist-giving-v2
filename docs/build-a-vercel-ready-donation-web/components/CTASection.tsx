import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to give toward mission in Luzon?",
  description = "Choose a local church, mission initiative, or media ministry. This demo prepares the giving journey while keeping payments disabled."
}: CTASectionProps) {
  return (
    <section className="bg-linen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy-950 shadow-soft">
        <div className="field-lines grid gap-8 p-8 text-white md:grid-cols-[1.4fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">Faithful stewardship</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">{description}</p>
          </div>
          <ButtonLink href="/donate" className="w-full md:w-auto">Give Now</ButtonLink>
        </div>
      </div>
    </section>
  );
}
