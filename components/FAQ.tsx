"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[var(--background)] select-none">
      <div className="mx-auto max-w-4xl px-5">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
            FAQs
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.q} 
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? "bg-white dark:bg-slate-900 border-[var(--primary)]/30 shadow-[var(--shadow-card)]" 
                    : "bg-white dark:bg-slate-900 border-border/60 dark:border-slate-800/60"
                }`}
              >
                <button 
                  type="button" 
                  onClick={() => setOpenIndex(isOpen ? null : index)} 
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--navy)] dark:text-slate-100">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-[var(--primary)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
