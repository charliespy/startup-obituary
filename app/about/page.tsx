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
          The Startup Obituary profiles obscure, post-ChatGPT AI startups that
          shut down — the companies most people never heard of, that raised
          money, shipped product, and quietly disappeared.
        </p>

        <p className="mt-4">
          This is not a list of famous flameouts. These are the small teams,
          the YC batches, the angel-backed experiments that tried to build on
          top of the GPT wave and didn&apos;t make it. Their stories hold the
          sharpest lessons for the next generation of AI founders.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-2">Why These Companies</h3>

        <p>
          Every startup profiled here was founded in 2022 or later — after
          ChatGPT proved that large language models were a platform shift. They
          represent the full spectrum of post-ChatGPT failure modes: thin API
          wrappers that got commoditized overnight, dev tools that couldn&apos;t
          differentiate, enterprise plays that couldn&apos;t close deals fast
          enough, and companion apps that raised ethical questions faster than
          revenue.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-2">Methodology</h3>

        <p>
          Startup data is sourced from shutdown announcements, founder
          post-mortems, Crunchbase, YC directories, and reporting from
          TechCrunch, Inc42, Entrepreneur, and Calcalist. Narratives are
          written with AI assistance and reviewed by humans for accuracy.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-2">A Note on Accuracy</h3>

        <p>
          We strive for factual accuracy in all vital statistics and key events.
          The narrative portions include editorial interpretation based on
          public reporting. If you spot an error, please reach out.
        </p>
      </div>
    </div>
  );
}
