import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp, Wallet2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#f3f8ff_45%,_#ffffff_100%)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_45%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-sky-800 dark:bg-slate-900/70 dark:text-sky-300">
            <ShieldCheck className="h-4 w-4" />
            Trusted by 1000+ families and growing businesses
          </div>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Your trusted partner for financial growth and wealth protection.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Personalized planning across investments, insurance and wealth advisory — built around long-term trust, clarity and measurable outcomes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              Explore Services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { title: "15+", subtitle: "Years of experience" },
              { title: "203 Cr+", subtitle: "Assets advised" },
              { title: "32+", subtitle: "Trusted partners" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/40">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
              alt="A financial advisor presenting a wealth dashboard"
              width={900}
              height={900}
              className="h-full w-full rounded-[1.5rem] object-cover"
              priority
            />
            <div className="absolute left-8 top-8 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                Wealth Dashboard
              </div>
              <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">₹42,80,500</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Portfolio value · Updated today</p>
            </div>
            <div className="absolute bottom-8 right-8 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <Wallet2 className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                Insurance Protection
              </div>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">₹1 Cr Cover</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
