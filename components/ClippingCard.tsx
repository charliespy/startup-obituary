import Link from "next/link";
import { Startup, CAUSE_LABELS, SUBCATEGORY_LABELS } from "@/lib/types";

const ROTATIONS = [
  "-rotate-[0.8deg]",
  "rotate-[0.5deg]",
  "-rotate-[0.3deg]",
  "rotate-[0.7deg]",
  "-rotate-[0.6deg]",
  "rotate-[0.4deg]",
  "-rotate-[0.5deg]",
  "rotate-[0.3deg]",
];

export function ClippingCard({
  startup,
  index,
}: {
  startup: Startup;
  index: number;
}) {
  const rotation = ROTATIONS[index % ROTATIONS.length];
  const teaser = startup.content.split("\n\n")[0];

  return (
    <Link href={`/startup/${startup.slug}`} className="block group">
      <article
        className={`bg-paper-white p-5 border border-rule shadow-[2px_3px_8px_rgba(0,0,0,0.08)] ${rotation} hover:rotate-0 hover:shadow-[4px_6px_16px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-[transform,box-shadow] duration-200`}
      >
        <h3 className="text-base font-bold leading-snug group-hover:underline decoration-1 underline-offset-2">
          {startup.name}: {startup.tagline}
        </h3>
        <p className="text-xs text-ink-muted mt-2 uppercase tracking-[1px]">
          {SUBCATEGORY_LABELS[startup.aiSubcategory]} —{" "}
          {CAUSE_LABELS[startup.causeOfDeath]}
        </p>
        <p className="text-sm text-ink-light mt-3 leading-relaxed line-clamp-3">
          {teaser}
        </p>
        <div className="flex justify-between mt-4 text-xs text-ink-faint">
          <span>{startup.totalFunding} raised</span>
          <span>
            {startup.founded}–{startup.died}
          </span>
        </div>
      </article>
    </Link>
  );
}
