import Link from "next/link";
import { Startup } from "@/lib/types";

export function FeaturedHeadline({ startup }: { startup: Startup }) {
  const teaser = startup.content.split("\n\n").slice(0, 3).join("\n\n");

  return (
    <Link href={`/startup/${startup.slug}`} className="block group">
      <div className="px-8 py-8 text-center border-b border-rule">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-lg mx-auto group-hover:underline decoration-1 underline-offset-4">
          {startup.name}: {startup.tagline}
        </h2>
        <p className="text-sm text-ink-muted mt-3 uppercase tracking-[1px]">
          {startup.name} — {startup.aiSubcategory.replace(/-/g, " ")} —{" "}
          {startup.causeOfDeath.replace(/-/g, " ")}
        </p>
        <p className="text-base text-ink-light mt-4 max-w-md mx-auto leading-relaxed">
          {teaser}
        </p>
        <p className="text-sm text-ink-faint mt-4 uppercase tracking-[2px] group-hover:text-ink-muted transition-colors">
          Read full obituary &rarr;
        </p>
      </div>
    </Link>
  );
}
