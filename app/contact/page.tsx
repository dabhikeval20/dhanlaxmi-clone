"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="select-none overflow-hidden pt-[70px]">
        
        {/* Contact Page Hero Banner */}
        <section className="relative py-20 md:py-28 bg-[var(--background)]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl px-5 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
              Get in Touch
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white font-display leading-[1.1]">
              Let’s build your{" "}
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                plan together
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reach out for a complimentary consultation and our advisory team will help you navigate the next best steps with care.
            </p>
          </div>
        </section>

        {/* Contact Forms (Enquiry side, sidebar contact indicators, and Yp Appointment widget) */}
        <Contact />

      </main>
      <Footer />
    </>
  );
}
