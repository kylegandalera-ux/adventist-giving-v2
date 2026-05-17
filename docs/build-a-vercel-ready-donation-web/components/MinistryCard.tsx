import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Ministry } from "@/lib/types";

export function MinistryCard({ ministry }: { ministry: Ministry }) {
  const content = (
    <article className="group h-full rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold-500/60">
      <div className="flex items-start justify-between gap-4">
        <p className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy-800">{ministry.focus}</p>
        {ministry.href ? <ArrowUpRight className="text-navy-800 transition group-hover:text-gold-500" size={20} /> : null}
      </div>
      <h2 className="mt-5 text-xl font-black text-navy-950">{ministry.name}</h2>
      <p className="mt-3 leading-7 text-navy-900/70">{ministry.description}</p>
    </article>
  );

  return ministry.href ? <Link href={ministry.href}>{content}</Link> : content;
}
