import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { posts } from "@/lib/content";

export default function Blog() {
  return (
    <AnimatedSection id="blog" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">Blog</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Latest articles and practical guides.
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-sky-400">
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400">{post.category}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
              <Link href={post.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
