import Link from "next/link";
import { Masthead } from "@/components/Masthead";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto bg-paper min-h-screen">
      <Masthead />
      <div className="text-center px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">404</h2>
        <p className="text-lg text-ink-muted mt-4">
          This startup was so dead, even its obituary is gone.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 border border-ink px-6 py-2 text-sm uppercase tracking-[2px] hover:bg-ink hover:text-paper transition-colors"
        >
          Back to Front Page
        </Link>
      </div>
    </div>
  );
}
