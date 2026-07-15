import { partners } from "@/lib/content";

export default function Partners() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Featured partners</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Backed by India’s most trusted institutions.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
