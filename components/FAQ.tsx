"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <button type="button" className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="px-6 pb-6 text-sm leading-7 text-slate-600 dark:text-slate-400">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
