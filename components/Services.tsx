"use client";

import { motion } from "framer-motion";
import { 
  PiggyBank, 
  ChartLine, 
  Shield, 
  Target, 
  ArrowRight,
  Heart,
  BadgeCheck,
  TrendingUp,
  Plane,
  House,
  Car,
  GraduationCap
} from "lucide-react";

const servicesList = [
  {
    title: "Mutual Funds",
    description: "SIP, lumpsum, SWP, STP and portfolio reviews built for compounding.",
    icon: PiggyBank,
    tags: ["SIP", "Lumpsum", "SWP", "STP", "Portfolio Review"],
  },
  {
    title: "Motilal Oswal Services",
    description: "Demat, trading, IPOs and advisory backed by a leading brokerage.",
    icon: ChartLine,
    tags: ["Demat Account", "Trading", "IPO", "Advisory", "PMS"],
  },
  {
    title: "Insurance Services",
    description: "End-to-end life, health and general insurance with claim support.",
    icon: Shield,
    tags: ["Health", "Life", "Term", "ULIP", "Travel", "Property", "Vehicle"],
  },
  {
    title: "Financial Planning",
    description: "Tax, retirement, education and wealth plans tailored to your goals.",
    icon: Target,
    tags: ["Tax Saving", "Retirement", "Education", "Wealth", "Risk"],
  },
];

const categoryStrip = [
  { label: "Health", icon: Heart },
  { label: "Life", icon: Shield },
  { label: "Term", icon: BadgeCheck },
  { label: "ULIP", icon: TrendingUp },
  { label: "Travel", icon: Plane },
  { label: "Property", icon: House },
  { label: "Vehicle", icon: Car },
  { label: "Education", icon: GraduationCap },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/40 select-none bg-[var(--accent)]/10 dark:bg-slate-950/20">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            What we do
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white">
            Complete financial services under one roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first SIP to your retirement plan — we cover every step of your financial journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-border/60 dark:border-slate-800/60 p-8 shadow-[var(--shadow-card)] overflow-hidden h-full"
              >
                {/* Background ambient bubble */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[var(--primary)]/5 group-hover:bg-[var(--primary)]/10 transition-colors" />
                
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-hero)] grid place-items-center shadow-[var(--shadow-glow)]">
                    <IconComp className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--navy)] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] dark:bg-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] dark:text-sky-300 hover:gap-2.5 transition-all"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Category Badges Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
        >
          {categoryStrip.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.label}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-border/60 dark:border-slate-800/60 p-4 flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all cursor-pointer"
              >
                <IconComp className="h-5 w-5 text-[var(--primary)] dark:text-sky-300" />
                <span className="text-xs font-medium text-[var(--navy)] dark:text-slate-200">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
