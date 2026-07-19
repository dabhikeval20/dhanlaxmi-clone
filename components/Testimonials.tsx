"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[index];

  return (
    <section className="py-24 md:py-32 bg-[var(--navy)] text-white relative overflow-hidden select-none">
      {/* Background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--primary)]/35 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--gold)]/20 blur-3xl" />

      <div className="mx-auto max-w-4xl px-5 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
            Client stories
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-white">
            Trusted by families across India
          </h2>
        </div>

        {/* Carousel Slide Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-[var(--navy)] border-white/30 shadow-[var(--shadow-soft)]"
          >
            {/* Star ratings */}
            <div className="flex text-[var(--gold)] mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current text-[var(--gold)]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-xl md:text-2xl font-display text-[var(--navy)] dark:text-white leading-snug">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>

            {/* Client Profile */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[var(--gradient-hero)] grid place-items-center text-white font-semibold shadow-[var(--shadow-glow)]">
                {activeTestimonial.name[0]}
              </div>
              <div>
                <div className="font-semibold text-[var(--navy)] dark:text-white">
                  {activeTestimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {activeTestimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === index ? "w-8 bg-[var(--gold)]" : "w-2 bg-white/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
