import { AdminDashboard } from "@/components/AdminDashboard";
import { PageHeader } from "@/components/PageHeader";

export default function AdminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin dashboard demo"
        title="Monitor sample donations, categories, and recipient activity."
        description="This admin page uses mock data only and is prepared for future Supabase Auth, reporting, and official receipt tracking."
      />
      <AdminDashboard />
    </>
  );
}
