"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Partners from "@/components/Partners";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="select-none overflow-hidden pt-[70px]">
        
        {/* About Page Hero Banner */}
        <section className="relative py-20 md:py-28 bg-[var(--background)]">
          {/* Glow lights */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl px-5 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium text-[var(--navy)] mb-6 dark:text-slate-200"
            >
              Who we are
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--navy)] dark:text-white font-display leading-[1.1]"
            >
              Building generational wealth with{" "}
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                clarity and care
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We combine robust financial planning, custom mutual fund solutions, comprehensive insurance guidance, and ongoing advisor support to help you make confident decisions without the jargon.
            </motion.p>
          </div>
        </section>

        {/* Stats Strip */}
        <Stats />

        {/* About section cards and list */}
        <About />

        {/* Partners Horizontal Scroll */}
        <Partners />

        {/* Call to action panel */}
        <section className="py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-4xl px-5">
            <div className="rounded-3xl bg-[var(--gradient-hero)] p-10 md:p-14 text-white text-center shadow-[var(--shadow-glow)]">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Ready to plan your financial future?
              </h2>
              <p className="mt-4 text-white/80 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                Our advisors can help you consolidate your holdings, calculate tax liabilities, and optimize cash flows for your specific goals.
              </p>
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] font-semibold px-7 py-3.5 hover:brightness-105 transition"
                >
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
