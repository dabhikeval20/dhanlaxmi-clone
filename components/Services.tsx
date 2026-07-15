import { ArrowRight, ArrowUpRight, BriefcaseBusiness, HeartHandshake, Landmark, PiggyBank } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/lib/content";

const icons = [PiggyBank, BriefcaseBusiness, HeartHandshake, Landmark];

export default function Services() {
  return (
    <AnimatedSection id="services" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Complete financial services under one roof.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            From your first SIP to retirement planning, we cover every step of your financial journey with a care-led approach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={service.title} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-sky-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Need guidance?</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Speak with an advisor and build the right plan for your goals.</h3>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
            Schedule a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
