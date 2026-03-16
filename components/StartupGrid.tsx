"use client";

import { useState } from "react";
import { Startup, CauseOfDeath, AISubcategory } from "@/lib/types";
import { FilterBar } from "./FilterBar";
import { FeaturedHeadline } from "./FeaturedHeadline";
import { ClippingCard } from "./ClippingCard";

export function StartupGrid({ startups }: { startups: Startup[] }) {
  const [activeCause, setActiveCause] = useState<CauseOfDeath | null>(null);
  const [activeSubcategory, setActiveSubcategory] =
    useState<AISubcategory | null>(null);

  const filtered = startups.filter((s) => {
    if (activeCause && s.causeOfDeath !== activeCause) return false;
    if (activeSubcategory && s.aiSubcategory !== activeSubcategory) return false;
    return true;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <FilterBar
        activeCause={activeCause}
        activeSubcategory={activeSubcategory}
        onCauseChange={setActiveCause}
        onSubcategoryChange={setActiveSubcategory}
      />

      {featured && <FeaturedHeadline startup={featured} />}

      {rest.length > 0 && (
        <div className="px-5 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((startup, i) => (
            <ClippingCard key={startup.slug} startup={startup} index={i} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-ink-muted text-sm">
          No obituaries match these filters. The graveyard is emptier than
          expected.
        </div>
      )}

      <div className="text-center py-4 border-t border-rule text-xs text-ink-faint tracking-[2px] uppercase">
        Showing {filtered.length} of {startups.length} obituaries
      </div>
    </>
  );
}
