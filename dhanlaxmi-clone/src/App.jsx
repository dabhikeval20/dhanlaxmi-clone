import { useMemo } from 'react';
import {
  navLinks,
  tickerItems,
  heroHighlights,
  metrics,
  aboutPoints,
  pillars,
  services,
  benefits,
  steps,
} from './content';

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-semibold text-white shadow-soft">
              DF
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Dhanlaxmi</p>
              <p className="text-sm text-slate-500">Financial Services</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-brand-600">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
            Book Consultation
          </a>
        </div>
      </header>

      <div className="overflow-hidden border-b border-slate-200 bg-slate-50/80">
        <div className="marquee-track flex w-max items-center gap-6 py-3 pr-8">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
              <span className="font-semibold text-slate-800">{item.name}</span>
              <span className="text-slate-600">{item.value}</span>
              <span className={item.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'}>{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      <main id="top">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,107,255,0.18),_transparent_36%),linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_100%)]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                SEBI-aware advisors · Trusted since 2008
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Your Trusted Partner for <span className="text-brand-600">Financial Growth</span> & Wealth Protection
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Helping individuals and families build wealth through smart investments, comprehensive insurance, and personalized financial planning.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                  Book Free Consultation
                </a>
                <a href="#services" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600">
                  Explore Our Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {heroHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-3xl font-semibold text-brand-600">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-brand-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-100">Why clients choose us</p>
                <h2 className="mt-3 text-2xl font-semibold">Clarity, trust, and long-term guidance</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We help you navigate markets, insurance, taxes, and retirement with a plan built around your life goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">About us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Building generational wealth, one family at a time.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Dhanlaxmi Financial Services is a boutique advisory firm helping individuals, families, and business owners plan, invest, and protect their financial future.
              </p>

              <ul className="mt-8 space-y-4">
                {aboutPoints.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((item, index) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-semibold text-brand-600">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-mist py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">What we do</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Complete financial services under one roof</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                From your first SIP to your retirement plan — we cover every step of your financial journey.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    Read more <span aria-hidden>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Why choose us</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Advice you can trust, service you can feel</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">✦</div>
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Our process</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A simple, seven-step path to clarity</h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-7">
                  <p className="text-sm font-semibold text-brand-300">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-600 to-brand-800 p-10 text-white shadow-soft">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-100">Let’s talk</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to build a clearer financial future?</h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                Schedule your free consultation and let’s create a plan that fits your goals, lifestyle, and risk appetite.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:hello@dhanlaxmi.com" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-slate-100">
                hello@dhanlaxmi.com
              </a>
              <a href="tel:+919999999999" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                +91 99999 99999
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {year} Dhanlaxmi Financial Services. All rights reserved.</p>
          <p>Built with React and Tailwind CSS for easy editing.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
