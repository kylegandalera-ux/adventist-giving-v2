import { ChurchDirectory } from "@/components/ChurchDirectory";
import { PageHeader } from "@/components/PageHeader";
import { churches } from "@/data/sample";

export default function ChurchesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Local church giving"
        title="Find a sample Seventh-day Adventist church in Luzon."
        description="Search and filter demo church records. No real church financial details are shown."
      />
      <ChurchDirectory churches={churches} />
    </>
  );
}
