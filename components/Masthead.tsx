import Link from "next/link";

export function Masthead({ showBack = false }: { showBack?: boolean }) {
  return (
    <header className="text-center border-b-[3px] border-double border-rule-dark px-6 py-6">
      {showBack && (
        <Link
          href="/"
          className="text-sm uppercase tracking-[3px] text-ink-muted hover:text-ink transition-colors"
        >
          &larr; Back to Front Page
        </Link>
      )}
      <p className="text-xs tracking-[4px] uppercase text-ink-faint mt-1">
        All the failures fit to print
      </p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mt-1">
        <Link href="/">THE STARTUP OBITUARY</Link>
      </h1>
      <div className="flex justify-center gap-4 items-center mt-2">
        <p className="text-sm text-ink-muted tracking-[1px]">
          AI ERA EDITION — 2022–PRESENT
        </p>
        <Link
          href="/about"
          className="text-xs uppercase tracking-[2px] text-ink-faint hover:text-ink transition-colors"
        >
          About
        </Link>
      </div>
    </header>
  );
}
