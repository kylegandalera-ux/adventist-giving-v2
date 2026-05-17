type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="field-lines mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">{description}</p>
      </div>
    </section>
  );
}
