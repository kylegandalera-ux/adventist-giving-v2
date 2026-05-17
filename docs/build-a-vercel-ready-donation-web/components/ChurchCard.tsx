import { Mail, MapPin } from "lucide-react";
import type { Church } from "@/lib/types";
import { ButtonLink } from "@/components/ButtonLink";

export function ChurchCard({ church }: { church: Church }) {
  return (
    <article className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-500">{church.missionConference}</p>
      <h2 className="mt-3 text-xl font-black text-navy-950">{church.name}</h2>
      <div className="mt-5 grid gap-3 text-sm text-navy-900/70">
        <p className="flex items-center gap-2"><MapPin size={16} className="text-gold-500" /> {church.location}</p>
        <p className="flex items-center gap-2"><Mail size={16} className="text-gold-500" /> {church.contactEmail}</p>
      </div>
      <ButtonLink href={`/donate?recipient=${encodeURIComponent("Local Church")}`} className="mt-6 w-full">Donate to Church</ButtonLink>
    </article>
  );
}
