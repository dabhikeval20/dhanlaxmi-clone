"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/content";

export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-muted/40 bg-[var(--accent)]/10 dark:bg-slate-950/20 select-none">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 animate-in fade-in-0 duration-300">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
              Insights
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white">
              Latest articles &amp; guides
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] dark:text-sky-300 hover:gap-2.5 transition-all"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, index) => (
            <motion.div 
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-border/60 dark:border-slate-800/60 overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all h-full flex flex-col"
            >
              {/* Card top vector image */}
              <div className="h-44 bg-[var(--gradient-hero)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path 
                      d="M0 160 Q100 100 200 130 T400 90 L400 200 L0 200 Z" 
                      fill="#FFD27A" 
                    />
                  </svg>
                </div>
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white border border-white/30">
                  {post.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-[var(--navy)] dark:text-white leading-snug group-hover:text-[var(--primary)] dark:group-hover:text-sky-300 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] dark:text-sky-300 group-hover:gap-2.5 transition-all"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
