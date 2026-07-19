"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="py-16 bg-[var(--navy)] text-white select-none">
      <div className="mx-auto max-w-7xl px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl md:text-5xl font-semibold text-[var(--gold)]">
              {stat.value}
            </p>
            <p className="text-sm text-white/70 mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
