"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  HelpCircle, 
  BarChart4, 
  ShieldAlert, 
  FolderSync, 
  Zap, 
  HeartHandshake 
} from "lucide-react";

const steps = [
  {
    title: "Book Consultation",
    description: "Reach out for a free discovery session.",
    icon: Calendar,
  },
  {
    title: "Understand Requirements",
    description: "We listen to your goals and life stage.",
    icon: HelpCircle,
  },
  {
    title: "Financial Analysis",
    description: "In-depth review of income, risk and returns.",
    icon: BarChart4,
  },
  {
    title: "Best Solution",
    description: "A tailored plan across investments and insurance.",
    icon: ShieldAlert,
  },
  {
    title: "Documentation",
    description: "Paperless, guided onboarding.",
    icon: FolderSync,
  },
  {
    title: "Activation",
    description: "SIPs, policies and portfolios go live.",
    icon: Zap,
  },
  {
    title: "Ongoing Support",
    description: "Reviews, rebalancing and lifelong service.",
    icon: HeartHandshake,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-muted/40 bg-[var(--accent)]/10 dark:bg-slate-950/20 select-none">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            Our process
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white font-display">
            A simple, seven-step path to clarity
          </h2>
        </div>

        {/* Timeline container */}
        <div className="mt-16 relative">
          {/* Vertical line in middle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`md:grid md:grid-cols-2 md:gap-10 items-center ${
                    !isEven ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text side */}
                  <div className={`${!isEven ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--primary)] dark:text-sky-300 uppercase tracking-widest">
                      Step {index + 1}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--navy)] dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Marker side */}
                  <div className="hidden md:flex justify-center relative">
                    <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-hero)] grid place-items-center shadow-[var(--shadow-glow)] relative z-10">
                      <IconComp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
