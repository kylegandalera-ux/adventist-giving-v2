import { CTASection } from "@/components/CTASection";
import { MinistryCard } from "@/components/MinistryCard";
import { PageHeader } from "@/components/PageHeader";
import { ministries } from "@/data/sample";

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ministries"
        title="Support the work of discipleship, service, and media evangelism."
        description="These sample ministry categories show how Adventist Giving Luzon can organize future giving opportunities."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {ministries.map((ministry) => <MinistryCard key={ministry.id} ministry={ministry} />)}
      </section>
      <CTASection />
    </>
  );
}
