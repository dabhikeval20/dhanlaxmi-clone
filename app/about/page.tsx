import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Dhanlaxmi helps families create wealth and protect their future with honest, personalized advice.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">About Dhanlaxmi</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Building generational wealth with clarity and care.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We combine financial planning, mutual fund solutions, insurance guidance and long-term advisory support to help clients make confident decisions without complexity.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Our approach</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Every recommendation is tailored to your goals, stage of life and comfort with risk so the plan feels both practical and personal.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Why clients stay</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">We believe the best guidance is transparent, consistent and available whenever major life decisions arise.</p>
            </div>
          </div>
          <Link href="/contact" className="mt-10 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
            Book a consultation
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
