"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4500);
  };

  return (
    <>
      <Navbar />
      <main className="select-none overflow-hidden pt-[70px] bg-[var(--background)]">
        
        {/* Blog Page Hero Banner */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl px-5 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
              Our Blog
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[var(--navy)] dark:text-white font-display leading-[1.1]">
              Practical insights for better{" "}
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                financial decisions
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stay informed with concise guides on investing, insurance, tax planning, and long-term wealth building compiled by our advisors.
            </p>
          </div>
        </section>

        {/* Blog Listing Grid */}
        <section className="pb-24 px-5">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div 
                  key={post.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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

            {/* Newsletter Subscription Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 md:p-12 shadow-[var(--shadow-soft)] max-w-3xl mx-auto text-center mt-20"
            >
              <div className="h-12 w-12 rounded-full bg-[var(--primary)]/10 grid place-items-center mx-auto mb-4">
                <Mail className="h-5 w-5 text-[var(--primary)] dark:text-sky-300" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--navy)] dark:text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                Join our newsletter and receive monthly market reviews, tax saving plays, and personal wealth tips directly to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-sm text-[var(--navy)] dark:text-white outline-none focus:border-[var(--primary)] transition" 
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition shrink-0 cursor-pointer"
                >
                  Join News
                </button>
              </form>

              {subscribed && (
                <div className="mt-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Subscribed successfully! Thank you for joining.
                </div>
              )}
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
