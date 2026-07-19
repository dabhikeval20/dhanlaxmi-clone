"use client";

import { Mail, Phone, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--navy)] text-slate-300 py-16 px-5 select-none">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.85fr_1.15fr]">
        
        {/* Col 1: Brand & Contact */}
        <div>
          <div className="font-display text-2xl font-semibold text-white">Dhanlaxmi</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1">Financial Services</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Personalized investment, insurance, and financial planning trusted by 1000+ families across India.
          </p>
          <div className="mt-8 space-y-3">
            <a href="tel:+919876543210" className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors">
              <Phone className="h-4.5 w-4.5 text-[var(--gold)]" />
              +91 98765 43210
            </a>
            <a href="mailto:hello@dhanlaxmifs.com" className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors">
              <Mail className="h-4.5 w-4.5 text-[var(--gold)]" />
              hello@dhanlaxmifs.com
            </a>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><a href="/#services" className="hover:text-white transition-colors">Mutual Funds</a></li>
            <li><a href="/#services" className="hover:text-white transition-colors">Motilal Oswal Services</a></li>
            <li><a href="/#services" className="hover:text-white transition-colors">Insurance Services</a></li>
            <li><a href="/#services" className="hover:text-white transition-colors">Financial Planning</a></li>
          </ul>
        </div>

        {/* Col 3: Resources Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="/#process" className="hover:text-white transition-colors">Process</a></li>
            <li><a href="/#calculators" className="hover:text-white transition-colors">Calculators</a></li>
            <li><a href="/#blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h4>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Monthly insights on markets, tax and planning — no spam.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full rounded-full border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition" 
            />
            <button 
              type="button" 
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white hover:brightness-105 transition shrink-0 cursor-pointer"
            >
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Dhanlaxmi Financial Services. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <Shield className="h-3.5 w-3.5" />
          Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
        </p>
      </div>
    </footer>
  );
}
