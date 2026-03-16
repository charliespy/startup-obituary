import { Masthead } from "@/components/Masthead";

export const metadata = {
  title: "About — The Startup Obituary",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto bg-paper min-h-screen">
      <Masthead showBack />

      <div className="max-w-xl mx-auto px-8 py-10 text-base leading-[2]">
        <h2 className="text-2xl font-bold mb-4">About This Project</h2>

        <p>
          The Startup Obituary is a curated collection of AI-era startup
          failures — companies founded during or after the ChatGPT moment of
          2022 that burned bright, raised millions, and then collapsed, pivoted,
          or got quietly acqui-hired.
        </p>

        <p className="mt-4">
          Each obituary tells the story of a company&apos;s rise and fall in a
          novelistic, narrative style. We believe startup failures deserve more
          than a bullet-point post-mortem. They deserve a story.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-2">Methodology</h3>

        <p>
          Startup data is researched from public sources including TechCrunch,
          The Information, Bloomberg, Forbes, Semafor, and company post-mortems.
          Narratives are generated using AI and then reviewed and edited by
          humans for accuracy and tone.
        </p>

        <p className="mt-4">
          We focus on the &ldquo;why&rdquo; behind each failure — not just what
          happened, but the human decisions, market forces, and structural
          problems that led to the outcome.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-2">A Note on Accuracy</h3>

        <p>
          We strive for factual accuracy in all vital statistics and key events.
          The narrative portions include editorial interpretation and
          reconstructed scenes based on public reporting. If you spot an error,
          please reach out.
        </p>
      </div>
    </div>
  );
}
