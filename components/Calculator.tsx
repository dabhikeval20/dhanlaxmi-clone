"use client";

import { useState, useMemo, useEffect } from "react";
import { 
  PiggyBank, 
  Wallet, 
  Calculator as CalcIcon, 
  Clock, 
  Target, 
  GraduationCap, 
  ArrowRight,
  Percent 
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type CalculatorType = "sip" | "lump" | "rsip" | "emi" | "ret" | "goal" | "edu";

const tabList = [
  { id: "sip", label: "SIP", icon: PiggyBank },
  { id: "lump", label: "Lump Sum", icon: Wallet },
  { id: "rsip", label: "Reverse SIP", icon: CalcIcon },
  { id: "emi", label: "Loan EMI", icon: Percent },
  { id: "ret", label: "Retirement", icon: Clock },
  { id: "goal", label: "Goal", icon: Target },
  { id: "edu", label: "Education", icon: GraduationCap },
];

const config = {
  sip: {
    a: { label: "Monthly Investment", min: 500, max: 200000, step: 500, def: 10000, fmt: (v: number) => `₹${v.toLocaleString("en-IN")}` },
    b: { label: "Expected Return p.a.", min: 4, max: 24, step: 0.5, def: 12, fmt: (v: number) => `${v}%` },
    years: { label: "Investment Period", min: 1, max: 40, step: 1, def: 15 },
    compute: (e: number, t: number, n: number) => {
      const r = t / 100 / 12;
      const i = n * 12;
      const future = e * (((1 + r) ** i - 1) / r) * (1 + r);
      const invested = e * i;
      return { future, invested, gain: future - invested, note: "Projected corpus" };
    }
  },
  lump: {
    a: { label: "One-time Investment", min: 5000, max: 10000000, step: 5000, def: 500000, fmt: (v: number) => `₹${v.toLocaleString("en-IN")}` },
    b: { label: "Expected Return p.a.", min: 4, max: 24, step: 0.5, def: 12, fmt: (v: number) => `${v}%` },
    years: { label: "Investment Period", min: 1, max: 40, step: 1, def: 10 },
    compute: (e: number, t: number, n: number) => {
      const future = e * (1 + t / 100) ** n;
      const invested = e;
      return { future, invested, gain: future - e, note: "Projected value" };
    }
  },
  rsip: {
    a: { label: "Target Corpus", min: 100000, max: 100000000, step: 100000, def: 10000000, fmt: (v: number) => `₹${v.toLocaleString("en-IN")}` },
    b: { label: "Expected Return p.a.", min: 4, max: 24, step: 0.5, def: 12, fmt: (v: number) => `${v}%` },
    years: { label: "Time Horizon", min: 1, max: 40, step: 1, def: 20 },
    compute: (e: number, t: number, n: number) => {
      const r = t / 100 / 12;
      const i = n * 12;
      const future = e / (((1 + r) ** i - 1) / r * (1 + r));
      const invested = future * i;
      return { future, invested, gain: e - invested, note: "Monthly SIP required" };
    }
  },
  emi: {
    a: { label: "Loan Amount", min: 100000, max: 100000000, step: 100000, def: 5000000, fmt: (v: number) => `₹${(v / 100000).toFixed(0)} Lakh` },
    b: { label: "Interest Rate p.a.", min: 5, max: 20, step: 0.1, def: 8.5, fmt: (v: number) => `${v}%` },
    years: { label: "Loan Tenure", min: 1, max: 30, step: 1, def: 15 },
    compute: (e: number, t: number, n: number) => {
      const r = t / 100 / 12;
      const i = n * 12;
      const emiVal = (e * r * (1 + r) ** i) / ((1 + r) ** i - 1);
      const totalPayment = emiVal * i;
      const totalInterest = totalPayment - e;
      return { future: emiVal, invested: e, gain: totalInterest, note: "Monthly Loan EMI" };
    }
  },
  ret: {
    a: { label: "Current Age", min: 20, max: 60, step: 1, def: 30, fmt: (v: number) => `${v} yrs` },
    b: { label: "Retirement Corpus Target", min: 1000000, max: 100000000, step: 500000, def: 20000000, fmt: (v: number) => `₹${(v / 100000).toFixed(1)} L` },
    years: { label: "Retirement Age", min: 45, max: 75, step: 1, def: 60 },
    compute: (e: number, t: number, n: number) => {
      const r = Math.max(1, n - e) * 12;
      const i = t / (((1.01) ** r - 1) / 0.01 * 1.01);
      const future = i;
      const invested = i * r;
      return { future, invested, gain: t - invested, note: "Monthly SIP needed" };
    }
  },
  goal: {
    a: { label: "Goal Amount", min: 100000, max: 50000000, step: 50000, def: 2500000, fmt: (v: number) => `₹${v.toLocaleString("en-IN")}` },
    b: { label: "Expected Return p.a.", min: 4, max: 20, step: 0.5, def: 11, fmt: (v: number) => `${v}%` },
    years: { label: "Time to Goal", min: 1, max: 30, step: 1, def: 8 },
    compute: (e: number, t: number, n: number) => {
      const r = t / 100 / 12;
      const i = n * 12;
      const future = e / (((1 + r) ** i - 1) / r * (1 + r));
      const invested = future * i;
      return { future, invested, gain: e - invested, note: "Monthly SIP to reach goal" };
    }
  },
  edu: {
    a: { label: "Today's Course Cost", min: 200000, max: 20000000, step: 50000, def: 2000000, fmt: (v: number) => `₹${v.toLocaleString("en-IN")}` },
    b: { label: "Education Inflation", min: 5, max: 15, step: 0.5, def: 8, fmt: (v: number) => `${v}%` },
    years: { label: "Years to College", min: 1, max: 20, step: 1, def: 12 },
    compute: (e: number, t: number, n: number) => {
      const r = e * (1 + t / 100) ** n;
      const future = r / (((1.01) ** (n * 12) - 1) / 0.01 * 1.01);
      return { future, invested: r, gain: 0, note: "Monthly SIP to fund education" };
    }
  }
};

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<CalculatorType>("sip");

  // Local state for inputs
  const currentConfig = config[activeTab];
  const [valA, setValA] = useState(currentConfig.a.def);
  const [valB, setValB] = useState(currentConfig.b.def);
  const [valYears, setValYears] = useState(currentConfig.years.def);

  // Sync inputs when switching tabs
  useEffect(() => {
    const c = config[activeTab];
    setValA(c.a.def);
    setValB(c.b.def);
    setValYears(c.years.def);
  }, [activeTab]);

  const results = useMemo(() => {
    return currentConfig.compute(valA, valB, valYears);
  }, [valA, valB, valYears, currentConfig]);

  const isReverseType = activeTab === "rsip" || activeTab === "ret" || activeTab === "goal" || activeTab === "edu";
  const isEMI = activeTab === "emi";

  // Helper to generate dynamic slider inline backgrounds
  const getSliderStyle = (val: number, min: number, max: number) => {
    const pct = ((val - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`
    };
  };

  return (
    <AnimatedSection id="calculators" className="py-24 md:py-32 bg-[var(--background)] select-none">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            Plan smarter
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white font-display">
            Investment &amp; Loan calculators
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how your money can grow or forecast EMI schedules. Try any calculator below.
          </p>
        </div>

        {/* Tab Buttons Row */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabList.map((tab) => {
            const IconComp = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CalculatorType)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
                  active 
                    ? "bg-[var(--gradient-hero)] text-white shadow-[var(--shadow-glow)]" 
                    : "bg-white border border-border/60 text-[var(--navy)] hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <IconComp className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Grid content */}
        <div className="mt-10">
          <div className="grid lg:grid-cols-2 gap-8 rounded-3xl bg-white dark:bg-slate-900 border border-border/60 dark:border-slate-800/60 shadow-[var(--shadow-soft)] p-8 md:p-10">
            
            {/* Input sliders */}
            <div className="space-y-8">
              
              {/* Input A */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-[var(--navy)] dark:text-slate-200">
                    {currentConfig.a.label}
                  </label>
                  <span className="text-sm font-semibold text-[var(--primary)] dark:text-sky-300">
                    {currentConfig.a.fmt(valA)}
                  </span>
                </div>
                <input
                  type="range"
                  min={currentConfig.a.min}
                  max={currentConfig.a.max}
                  step={currentConfig.a.step}
                  value={valA}
                  onChange={(e) => setValA(Number(e.target.value))}
                  style={getSliderStyle(valA, currentConfig.a.min, currentConfig.a.max)}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none transition-all accent-[var(--primary)]"
                />
              </div>

              {/* Input B */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-[var(--navy)] dark:text-slate-200">
                    {currentConfig.b.label}
                  </label>
                  <span className="text-sm font-semibold text-[var(--primary)] dark:text-sky-300">
                    {currentConfig.b.fmt(valB)}
                  </span>
                </div>
                <input
                  type="range"
                  min={currentConfig.b.min}
                  max={currentConfig.b.max}
                  step={currentConfig.b.step}
                  value={valB}
                  onChange={(e) => setValB(Number(e.target.value))}
                  style={getSliderStyle(valB, currentConfig.b.min, currentConfig.b.max)}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none transition-all accent-[var(--primary)]"
                />
              </div>

              {/* Input Years */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-[var(--navy)] dark:text-slate-200">
                    {currentConfig.years.label}
                  </label>
                  <span className="text-sm font-semibold text-[var(--primary)] dark:text-sky-300">
                    {valYears} yrs
                  </span>
                </div>
                <input
                  type="range"
                  min={currentConfig.years.min}
                  max={currentConfig.years.max}
                  step={currentConfig.years.step}
                  value={valYears}
                  onChange={(e) => setValYears(Number(e.target.value))}
                  style={getSliderStyle(valYears, currentConfig.years.min, currentConfig.years.max)}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none transition-all accent-[var(--primary)]"
                />
              </div>

            </div>

            {/* Output card (Gradient Hero layout) */}
            <div className="rounded-2xl bg-[var(--gradient-hero)] p-8 text-white flex flex-col justify-between shadow-[var(--shadow-glow)]">
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-medium">
                  {results.note}
                </div>
                <div className="mt-3 font-display text-4xl md:text-5xl font-semibold">
                  ₹{Math.round(results.future).toLocaleString("en-IN")}
                </div>

                {!isReverseType && (
                  <div className="mt-6 space-y-2 text-sm text-white/85">
                    <div className="flex items-center justify-between border-t border-white/15 pt-2">
                      <span>{isEMI ? "Principal Amount" : "Invested"}</span>
                      <span className="font-semibold">
                        ₹{Math.round(results.invested).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/15 pt-2">
                      <span>{isEMI ? "Total Interest" : "Estimated Returns"}</span>
                      <span className="font-semibold">
                        ₹{Math.round(results.gain).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] font-semibold px-6 py-3 hover:brightness-105 transition"
              >
                {isEMI ? "Get Advisory" : "Start Investing"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
