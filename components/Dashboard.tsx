"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  ArrowUpRight, 
  AlertCircle, 
  CheckCircle2 
} from "lucide-react";

export default function Dashboard() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] select-none">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
        
        {/* Left Column: Text & Features */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            Clarity &amp; Control
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white font-display leading-tight">
            All your wealth in one single view
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We consolidate your investments, policies, and goals into a clean dashboard updated in real-time. No more manual spreadsheets or logging into multiple portals.
          </p>

          <div className="mt-10 space-y-6">
            
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-[var(--primary)]/10 grid place-items-center shrink-0">
                <Target className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--navy)] dark:text-slate-100">
                  Goal-Based Tracking
                </h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Connect mutual funds and savings directly to milestones like retirement or college education and view progress metrics instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-[var(--primary)]/10 grid place-items-center shrink-0">
                <ShieldCheck className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--navy)] dark:text-slate-100">
                  Insurance Health Check
                </h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Monitor sum assured, renewal dates, premium schedules, and track active claim requests with dedicated back-office support.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Visual Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-border/60 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 md:p-8 shadow-[var(--shadow-soft)] relative overflow-hidden"
        >
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">Wealth dashboard</p>
              <h3 className="text-2xl font-display font-semibold text-[var(--navy)] dark:text-white mt-1">₹42,80,500</h3>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2.5 py-1 rounded-full">
              <TrendingUp className="h-3 w-3" />
              +18.4%
            </span>
          </div>

          {/* Details list */}
          <div className="mt-6 space-y-4">
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Total Invested</span>
              <span className="font-semibold text-[var(--navy)] dark:text-slate-100">₹32,10,000</span>
            </div>

            <div className="flex justify-between items-center text-sm border-t border-slate-100 dark:border-slate-800 pt-3">
              <span className="text-muted-foreground">Estimated Returns</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">₹10,70,500</span>
            </div>

            <div className="flex justify-between items-center text-sm border-t border-slate-100 dark:border-slate-800 pt-3">
              <span className="text-muted-foreground">Active Term Insurance</span>
              <span className="font-semibold text-[var(--navy)] dark:text-slate-100">₹1,00,00,000</span>
            </div>

          </div>

          {/* Recommended actions panel */}
          <div className="mt-8 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/50 p-4">
            <div className="flex gap-2.5 items-start">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                  Recommended Actions
                </h5>
                <ul className="mt-2 space-y-1.5 text-xs text-amber-700/90 dark:text-amber-400/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    SIP amounts are aligned with retirement goals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    Health insurance coverage should be increased by ₹15 L
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Floating visual detail bubble */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[var(--primary)]/5 -z-10" />

        </motion.div>

      </div>
    </section>
  );
}
