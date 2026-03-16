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
        THE STARTUP OBITUARY
      </h1>
      <p className="text-sm text-ink-muted mt-2 tracking-[1px]">
        AI ERA EDITION — 2022–PRESENT
      </p>
    </header>
  );
}
