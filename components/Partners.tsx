"use client";

import { partners } from "@/lib/content";

export default function Partners() {
  return (
    <section className="py-20 border-y border-border/60 bg-white dark:bg-slate-900 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-5 text-center mb-10">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
          Featured partners
        </span>
        <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-[var(--navy)] dark:text-white">
          Backed by India&apos;s most trusted institutions
        </h3>
      </div>

      <div className="relative">
        <div className="flex gap-4 whitespace-nowrap animate-marquee">
          {/* We repeat the array three times to guarantee a seamless animation loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={`${partner}-${index}`} 
              className="shrink-0 rounded-xl border border-border/60 bg-[var(--accent)]/10 px-6 py-4 text-[var(--navy)]/70 dark:text-slate-300 font-semibold text-sm hover:-translate-y-0.5 hover:shadow-sm transition"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
