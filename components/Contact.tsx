import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-2xl dark:border-slate-800">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s start your financial journey.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share a few details and a certified advisor will reach out within 24 hours. Your first consultation is completely free.
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-sky-400" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-sky-400" />
              <span>hello@dhanlaxmifs.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-sky-400" />
              <span>Andheri West, Mumbai — 400058</span>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
              <input required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" placeholder="Your full name" />
            </label>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Phone Number
              <input required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" placeholder="Your phone" />
            </label>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              <input required type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" placeholder="you@example.com" />
            </label>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              City
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" placeholder="Your city" />
            </label>
          </div>
          <label className="mt-6 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Service Interested In
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800">
              <option>Mutual Funds</option>
              <option>Brokerage & Advisory</option>
              <option>Insurance Services</option>
              <option>Financial Planning</option>
            </select>
          </label>
          <label className="mt-6 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Message
            <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" placeholder="Tell us briefly about your goals" />
          </label>
          <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
