"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="select-none overflow-hidden pt-[70px]">
        
        {/* Services Page Hero Banner */}
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
              Our offerings
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--navy)] dark:text-white font-display leading-[1.1]"
            >
              Comprehensive guidance across every stage of{" "}
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                wealth building
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Whether you need a first SIP plan or a full year-end wealth review, our capabilities span investments, advisory, and protection.
            </motion.p>
          </div>
        </section>

        {/* Services Grid (cards and badges) */}
        <Services />

        {/* Timeline zigzag Process */}
        <Process />

        {/* Autoplay Testimonials client slider */}
        <Testimonials />

        {/* Consultation Callout */}
        <section className="py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-4xl px-5">
            <div className="rounded-3xl bg-[var(--navy)] p-10 md:p-14 text-white text-center shadow-[var(--shadow-glow)] relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[var(--gradient-hero)] opacity-90" />
              
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
                Need help comparing options?
              </h2>
              <p className="mt-4 text-white/80 max-w-md mx-auto leading-relaxed text-sm">
                Our advisors can help you compare premium rates, project growth paths, and structure tax-advantaged portfolio allocations.
              </p>
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] font-semibold px-7 py-3.5 hover:brightness-105 transition"
                >
                  Speak with an advisor
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
