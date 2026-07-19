"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)] dark:text-sky-300">Something went wrong</p>
      <h1 className="mt-4 text-3xl font-semibold text-[var(--navy)] dark:text-white">We could not load this page.</h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground">Please refresh or try again. If the issue continues, reach out to our team for support.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={() => reset()} className="rounded-full bg-[var(--navy)] text-white px-5 py-3 text-sm font-semibold hover:brightness-110 transition cursor-pointer dark:bg-white dark:text-slate-950">Try again</button>
        <Link href="/" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)] dark:border-slate-700 dark:text-slate-200">Back home</Link>
      </div>
    </div>
  );
}
