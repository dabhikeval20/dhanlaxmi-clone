"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0, style: "currency", currency: "INR", notation: "compact" }).format(value);

export default function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(15);

  const result = useMemo(() => {
    const r = annualReturn / 100;
    const n = years * 12;
    const i = monthlyInvestment;
    const futureValue = i * (((1 + r / 12) ** n - 1) / (r / 12)) * (1 + r / 12);
    const invested = i * n;
    const returns = futureValue - invested;

    return { futureValue, invested, returns };
  }, [annualReturn, monthlyInvestment, years]);

  return (
    <AnimatedSection id="calculators" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950/60">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Calculators</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Plan smarter with easy-to-use growth calculators.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Explore SIP growth, lump-sum potential and retirement planning scenarios in seconds.
          </p>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3 text-blue-600 dark:text-sky-400">
              <CalcIcon className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Try SIP calculator</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Monthly investment</label>
                <input type="range" min="1000" max="50000" step="1000" value={monthlyInvestment} onChange={(event) => setMonthlyInvestment(Number(event.target.value))} className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600" />
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">₹{monthlyInvestment.toLocaleString("en-IN")}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expected return</label>
                <input type="range" min="6" max="20" step="1" value={annualReturn} onChange={(event) => setAnnualReturn(Number(event.target.value))} className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600" />
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{annualReturn}% p.a.</p>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Investment period</label>
              <input type="range" min="5" max="30" step="1" value={years} onChange={(event) => setYears(Number(event.target.value))} className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600" />
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{years} years</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Projected corpus</p>
              <p className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">{formatCurrency(result.futureValue)}</p>
            </div>
            <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Compounding enabled
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Invested</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{formatCurrency(result.invested)}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Estimated returns</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{formatCurrency(result.returns)}</p>
            </div>
          </div>

          <button type="button" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
            Start Investing
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
