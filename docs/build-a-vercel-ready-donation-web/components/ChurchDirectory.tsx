"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Church } from "@/lib/types";
import { ChurchCard } from "@/components/ChurchCard";

export function ChurchDirectory({ churches }: { churches: Church[] }) {
  const [query, setQuery] = useState("");
  const [conference, setConference] = useState("All");
  const conferences = ["All", ...Array.from(new Set(churches.map((church) => church.missionConference)))];

  const filtered = useMemo(() => {
    return churches.filter((church) => {
      const matchesQuery = [church.name, church.location, church.missionConference].join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesConference = conference === "All" || church.missionConference === conference;
      return matchesQuery && matchesConference;
    });
  }, [churches, conference, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-[2rem] border border-navy-900/10 bg-white p-4 shadow-soft md:grid-cols-[1fr_280px]">
        <label className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/45" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="focus-ring w-full rounded-2xl border border-navy-900/10 bg-cloud py-3 pl-11 pr-4 text-sm"
            placeholder="Search by church, city, or mission"
          />
        </label>
        <select
          value={conference}
          onChange={(event) => setConference(event.target.value)}
          className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm font-semibold text-navy-900"
        >
          {conferences.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((church) => <ChurchCard key={church.id} church={church} />)}
      </div>
    </section>
  );
}
