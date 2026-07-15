import { ArrowRight, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">About us</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Building generational wealth, one family at a time.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            We provide transparent, personalized advice to help individuals and business owners grow wealth, protect what matters and make confident long-term decisions.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Integrity", description: "Transparent and unbiased advice, always." },
            { title: "Growth", description: "Strategies that compound over decades." },
            { title: "Security", description: "Protection that safeguards what matters." },
            { title: "Trust", description: "Built on long-term relationships and care." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-sky-400">
                {item.title === "Integrity" ? <ShieldCheck className="h-5 w-5" /> : item.title === "Growth" ? <BadgeCheck className="h-5 w-5" /> : <Handshake className="h-5 w-5" />}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
