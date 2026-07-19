"use client";

import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3.5 shadow-sm" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-[var(--gradient-hero)] grid place-items-center shadow-[var(--shadow-glow)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-[var(--navy)] dark:text-white">Dhanlaxmi</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Financial Services</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--navy)]/80 hover:text-[var(--primary)] dark:text-slate-300 dark:hover:text-sky-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#appointment"
            className="hidden sm:inline-flex btn-shine items-center gap-2 rounded-full bg-[var(--gradient-hero)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform"
          >
            Book Consultation
          </a>
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setOpen((value) => !value)}
            className="lg:hidden p-2 rounded-lg text-[var(--navy)] dark:text-white"
          >
            <ChevronDown className={`h-6 w-6 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute top-full left-0 right-0 border-b border-slate-200/50 bg-white/95 px-5 py-5 shadow-lg lg:hidden dark:border-slate-800/50 dark:bg-slate-950/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[var(--navy)] hover:text-[var(--primary)] dark:text-slate-200 dark:hover:text-sky-400 py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--gradient-hero)] py-3 text-center text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
