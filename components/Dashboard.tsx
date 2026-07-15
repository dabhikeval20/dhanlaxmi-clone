import { ArrowUpRight, ShieldCheck, Sparkles, Wallet2 } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Wealth Dashboard</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Clarity that helps families make confident financial decisions.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            From portfolio tracking to insurance coverage, everything is presented in a simple, transparent view so you always know the next best step.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { title: "Goal-based planning", description: "Align every investment decision to milestones such as education, retirement and wealth creation." },
              { title: "Insurance protection", description: "Keep your family secure with adequate life and health cover without overpaying." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-sky-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-2xl dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio summary</p>
              <p className="mt-2 text-4xl font-semibold">₹42,80,500</p>
            </div>
            <div className="rounded-full bg-emerald-500/20 px-3 py-2 text-sm font-semibold text-emerald-300">
              +18.4% growth
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Wallet2 className="h-4 w-4" />
                Total invested
              </div>
              <p className="mt-3 text-2xl font-semibold">₹32,10,000</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck className="h-4 w-4" />
                Insurance cover
              </div>
              <p className="mt-3 text-2xl font-semibold">₹1 Cr</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <ArrowUpRight className="h-4 w-4 text-emerald-400" />
              Recommended actions
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>• Review SIP allocation before next quarter.</li>
              <li>• Increase term cover to match new family commitments.</li>
              <li>• Rebalance equity exposure after recent market gains.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
