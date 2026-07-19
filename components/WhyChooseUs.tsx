"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  Handshake, 
  HelpCircle, 
  TrendingUp, 
  Users, 
  Eye, 
  RotateCw, 
  FileText 
} from "lucide-react";

const items = [
  { title: "Personalized Advice", icon: UserCheck },
  { title: "Trusted Financial Partners", icon: Handshake },
  { title: "Quick Claim Assistance", icon: HelpCircle },
  { title: "Investment Expertise", icon: TrendingUp },
  { title: "Dedicated Relationship Manager", icon: Users },
  { title: "Transparent Process", icon: Eye },
  { title: "Regular Portfolio Reviews", icon: RotateCw },
  { title: "Fast Documentation", icon: FileText },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] select-none">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            Why choose us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white font-display">
            Advice you can trust, service you can feel
          </h2>
        </div>

        {/* 8-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl bg-white dark:bg-slate-900 p-6 border border-border/60 dark:border-slate-800/60 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all h-full"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--gold)]/15 text-gold-foreground grid place-items-center mb-4 group-hover:bg-[var(--gold)]/30 transition-colors">
                  <IconComp className="h-5 w-5 text-[var(--navy)] dark:text-sky-300" />
                </div>
                <div className="font-semibold text-[var(--navy)] dark:text-slate-100">
                  {item.title}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
