"use client";

import { motion } from "framer-motion";
import { CircleCheck, Handshake, Shield, TrendingUp, Umbrella } from "lucide-react";

const bulletPoints = [
  "Personalized financial planning",
  "Long-term client relationships",
  "Transparent, unbiased advice",
  "Dedicated relationship support",
];

const cards = [
  {
    title: "Trust",
    description: "Built on integrity and long-term relationships.",
    icon: Handshake,
  },
  {
    title: "Integrity",
    description: "Transparent, unbiased advice, always.",
    icon: Shield,
  },
  {
    title: "Growth",
    description: "Strategies that compound over decades.",
    icon: TrendingUp,
  },
  {
    title: "Security",
    description: "Protection that safeguards what matters.",
    icon: Umbrella,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 select-none bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            About us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white leading-tight">
            Building generational wealth, one family at a time.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dhanlaxmi Financial Services is a boutique advisory firm helping individuals, families, and business owners plan, invest, and protect their financial future. Our mission is simple — give every client clear, honest advice and a plan they can trust.
          </p>
          <ul className="mt-6 space-y-3">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[var(--navy)]/80 dark:text-slate-300">
                <CircleCheck className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column Grid */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-[var(--shadow-card)] border border-border/60 dark:border-slate-800/60 h-full hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-[var(--gradient-hero)] grid place-items-center shadow-[var(--shadow-glow)] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="h-5 w-5 text-white" />
                </div>
                <div className="font-display text-xl font-semibold text-[var(--navy)] dark:text-white">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
