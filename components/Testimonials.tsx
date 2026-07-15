import { testimonials } from "@/lib/content";
import { Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Testimonials() {
  return (
    <AnimatedSection className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Trusted by families across India.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-sky-400">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">“{item.quote}”</p>
              <div className="mt-8">
                <p className="text-base font-semibold text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
