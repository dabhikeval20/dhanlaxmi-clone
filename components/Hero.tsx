"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Shield, Users, Award, TrendingUp, Wallet, Briefcase, PiggyBank, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden select-none">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/40 via-[var(--background)] to-[var(--background)]" />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/15 blur-3xl" />
        <div className="absolute top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[var(--gold)]/20 blur-3xl" />
        
        {/* Animated bottom curve path */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-[0.06] text-[var(--navy)]" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            d="M0,240 C150,180 300,260 450,200 C600,140 750,220 900,160 C1050,100 1150,180 1200,140 L1200,300 L0,300 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium text-[var(--navy)] mb-6 dark:text-slate-200"
          >
            <BadgeCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
            SEBI-aware advisors · Trusted since 2008
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--navy)] dark:text-white leading-[1.05]"
          >
            Your Trusted Partner for{" "}
            <span className="relative inline-block">
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                Financial Growth
              </span>
            </span>{" "}
            &amp; Wealth Protection
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Helping individuals and families build wealth through smart investments, comprehensive insurance, and personalized financial planning.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a 
              href="#contact" 
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-[var(--gradient-hero)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white/70 backdrop-blur px-7 py-3.5 text-sm font-semibold text-[var(--navy)] hover:bg-white dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 transition-colors"
            >
              Explore Our Services
            </a>
          </motion.div>

          {/* Features / Badges Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Licensed Advisors", icon: Shield },
              { label: "1000+ Happy Clients", icon: Users },
              { label: "15+ Years Experience", icon: Award },
              { label: "Expert Guidance", icon: BadgeCheck },
            ].map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="glass-card rounded-2xl p-3 flex items-center gap-2.5 shadow-[var(--shadow-card)]"
                >
                  <div className="h-9 w-9 rounded-lg bg-[var(--primary)]/10 grid place-items-center shrink-0">
                    <IconComp className="h-4.5 w-4.5 text-[var(--primary)]" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--navy)] dark:text-slate-200 leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column (Visual dashboard representation) */}
        <div className="relative h-[520px] hidden lg:block">
          {/* Main gradient card representing a tablet dashboard mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute inset-8 rounded-3xl bg-[var(--gradient-hero)] shadow-[var(--shadow-glow)] overflow-hidden"
          >
            {/* SVG line graph graphic with dots */}
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#FFD27A" />
                    <stop offset="1" stopColor="#FFD27A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                  d="M20 320 L90 260 L150 280 L210 200 L270 220 L330 130 L380 90" 
                  stroke="url(#chartGradient)" 
                  strokeWidth="3" 
                  fill="none" 
                />
                {[
                  { cx: 90, cy: 260 },
                  { cx: 150, cy: 280 },
                  { cx: 210, cy: 200 },
                  { cx: 270, cy: 220 },
                  { cx: 330, cy: 130 },
                ].map((pt, idx) => (
                  <motion.circle 
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    cx={pt.cx} 
                    cy={pt.cy} 
                    r="5" 
                    fill="#FFD27A" 
                  />
                ))}
              </svg>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white select-none">
              <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-medium">Wealth dashboard</div>
              <div className="mt-1 text-2xl font-display font-semibold">₹ 42,80,500</div>
              <div className="text-xs text-white/70">Total portfolio · updated today</div>
            </div>
          </motion.div>

          {/* Floating cards */}
          {/* Top Left: Investment Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-0 left-0 glass-card rounded-2xl p-4 w-56 shadow-[var(--shadow-card)]"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 grid place-items-center mb-2">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Investment Growth</div>
            <div className="text-lg font-semibold text-[var(--navy)] dark:text-slate-100">+18.4%</div>
          </motion.div>

          {/* Top Right: Insurance Protection */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-4 right-0 glass-card rounded-2xl p-4 w-56 shadow-[var(--shadow-card)]"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--primary)]/25 to-[var(--primary)]/5 grid place-items-center mb-2">
              <Shield className="h-5 w-5 text-[var(--navy)] dark:text-sky-300" />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Insurance Protection</div>
            <div className="text-lg font-semibold text-[var(--navy)] dark:text-slate-100">₹1 Cr Cover</div>
          </motion.div>

          {/* Bottom Left: Portfolio Management */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-4 glass-card rounded-2xl p-4 w-56 shadow-[var(--shadow-card)]"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--gold)]/30 to-[var(--gold)]/5 grid place-items-center mb-2">
              <Briefcase className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Portfolio Management</div>
            <div className="text-lg font-semibold text-[var(--navy)] dark:text-slate-100">12 assets</div>
          </motion.div>

          {/* Bottom Right: Mutual Funds */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-0 right-6 glass-card rounded-2xl p-4 w-56 shadow-[var(--shadow-card)]"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--navy)]/25 to-[var(--navy)]/5 grid place-items-center mb-2">
              <PiggyBank className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Mutual Funds</div>
            <div className="text-lg font-semibold text-[var(--navy)] dark:text-slate-100">SIP Active</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
