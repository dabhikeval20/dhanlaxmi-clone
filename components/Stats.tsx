import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/80 px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
