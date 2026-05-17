type StatCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft">
      <p className="text-sm font-bold text-navy-900/60">{label}</p>
      <p className="mt-3 text-3xl font-black text-navy-950">{value}</p>
      {helper ? <p className="mt-2 text-sm text-navy-900/58">{helper}</p> : null}
    </div>
  );
}
