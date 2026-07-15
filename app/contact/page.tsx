import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dhanlaxmi for a free financial consultation and personalized guidance.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Let’s build your plan together.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Reach out for a complimentary consultation and we will help you navigate the next best step with care.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
              <h2 className="text-2xl font-semibold">Meet an advisor</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">We usually respond within one business day and can arrange in-person or virtual appointments.</p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <p>Phone: +91 98765 43210</p>
                <p>Email: hello@dhanlaxmifs.com</p>
                <p>Office: Andheri West, Mumbai — 400058</p>
              </div>
            </div>
            <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950/60">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name<input required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900" /></label>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email<input required type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900" /></label>
              </div>
              <label className="mt-6 block text-sm font-medium text-slate-700 dark:text-slate-300">Message<textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900" /></label>
              <button type="submit" className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">Send request</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
