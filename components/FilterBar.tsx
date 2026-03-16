"use client";

import {
  CauseOfDeath,
  AISubcategory,
  CAUSE_LABELS,
  SUBCATEGORY_LABELS,
} from "@/lib/types";

interface FilterBarProps {
  activeCause: CauseOfDeath | null;
  activeSubcategory: AISubcategory | null;
  onCauseChange: (cause: CauseOfDeath | null) => void;
  onSubcategoryChange: (sub: AISubcategory | null) => void;
}

export function FilterBar({
  activeCause,
  activeSubcategory,
  onCauseChange,
  onSubcategoryChange,
}: FilterBarProps) {
  const causes = Object.entries(CAUSE_LABELS) as [CauseOfDeath, string][];
  const subcategories = Object.entries(SUBCATEGORY_LABELS) as [
    AISubcategory,
    string,
  ][];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2.5 px-6 py-4 border-b border-rule text-sm text-ink-light">
      <span className="font-bold uppercase tracking-[2px] text-ink mr-1">
        Filter:
      </span>

      <button
        onClick={() => onCauseChange(null)}
        className={`border px-3 py-1 transition-colors ${
          activeCause === null
            ? "bg-ink text-paper border-ink"
            : "border-rule hover:border-ink-muted"
        }`}
      >
        All Causes
      </button>
      {causes.map(([key, label]) => (
        <button
          key={key}
          onClick={() => onCauseChange(activeCause === key ? null : key)}
          className={`border px-3 py-1 transition-colors ${
            activeCause === key
              ? "bg-ink text-paper border-ink"
              : "border-rule hover:border-ink-muted"
          }`}
        >
          {label}
        </button>
      ))}

      <span className="px-2 text-rule">|</span>

      <button
        onClick={() => onSubcategoryChange(null)}
        className={`border px-3 py-1 transition-colors ${
          activeSubcategory === null
            ? "bg-ink text-paper border-ink"
            : "border-rule hover:border-ink-muted"
        }`}
      >
        All Categories
      </button>
      {subcategories.map(([key, label]) => (
        <button
          key={key}
          onClick={() =>
            onSubcategoryChange(activeSubcategory === key ? null : key)
          }
          className={`border px-3 py-1 transition-colors ${
            activeSubcategory === key
              ? "bg-ink text-paper border-ink"
              : "border-rule hover:border-ink-muted"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
