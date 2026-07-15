import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-slate-300 sm:px-6 lg:px-8 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-2xl font-semibold text-white">Dhanlaxmi Financial Services</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Personalized investment, insurance and financial planning trusted by families across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:hello@dhanlaxmifs.com" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white">
              <Mail className="h-4 w-4" />
              hello@dhanlaxmifs.com
            </a>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-white">Quick links</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold text-white">Stay updated</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">Monthly insights on markets, tax and planning — no spam.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none" />
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Join
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Dhanlaxmi Financial Services. All rights reserved.</p>
        <p>Mutual fund investments are subject to market risks. Read all documents carefully.</p>
      </div>
    </footer>
  );
}
