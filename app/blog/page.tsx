import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read investment, insurance and tax planning articles curated by the Dhanlaxmi team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Blog</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Practical insights for better financial decisions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Stay informed with concise guides on investing, insurance, tax planning and long-term wealth building.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
                <Link href={post.href} className="mt-6 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
