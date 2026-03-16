import { notFound } from "next/navigation";
import { Masthead } from "@/components/Masthead";
import { VitalStats } from "@/components/VitalStats";
import { getStartupBySlug, getAllSlugs } from "@/lib/startups";
import { SUBCATEGORY_LABELS } from "@/lib/types";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const startup = getStartupBySlug(slug);
  if (!startup) return { title: "Not Found" };
  return {
    title: `${startup.name} — The Startup Obituary`,
    description: startup.tagline,
    openGraph: {
      title: `${startup.name}: ${startup.tagline}`,
      description: startup.content.split("\n\n")[0],
      siteName: "The Startup Obituary",
    },
  };
}

export default async function StartupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const startup = getStartupBySlug(slug);
  if (!startup) notFound();

  const paragraphs = startup.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div className="max-w-5xl mx-auto bg-paper min-h-screen">
      <Masthead showBack />

      {/* Headline */}
      <div className="text-center px-8 py-6">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-lg mx-auto">
          {startup.name}: {startup.tagline}
        </h2>
        <p className="text-sm text-ink-muted mt-3 uppercase tracking-[1px]">
          OBITUARY — {SUBCATEGORY_LABELS[startup.aiSubcategory]} —{" "}
          {startup.founded}–{startup.died}
        </p>
      </div>

      {/* Body: single column layout */}
      <div className="max-w-2xl mx-auto px-5 md:px-8 pb-8">
        <VitalStats startup={startup} />

        <div className="mt-6 border-t border-rule pt-6">
          <div className="text-base md:text-lg leading-[2]">
            {paragraphs.map((p, i) => (
              <p key={i} className={`mb-4 ${i === 0 ? "first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-none" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Sources */}
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-4 border-t border-rule text-sm text-ink-faint flex flex-wrap gap-4 items-center">
        <span>
          <strong className="text-ink-muted">Sources:</strong>{" "}
          {startup.sources.map((s, i) => (
            <span key={i}>
              {i > 0 && ", "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-muted underline"
              >
                {s.title}
              </a>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
