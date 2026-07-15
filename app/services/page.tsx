import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full range of financial services offered by Dhanlaxmi, from mutual funds to insurance planning.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Services</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Comprehensive guidance across every stage of wealth building.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Whether you need a first SIP plan or a full year-end wealth review, our capabilities span investments, advisory and protection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950/60">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Ready to move forward?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Our advisors can help you compare options, understand fees and structure a plan that fits your current life stage.</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
              Speak with an advisor
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
