export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] text-slate-700 dark:text-slate-200">
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="h-3 w-3 animate-pulse rounded-full bg-blue-600" />
        <span className="text-sm font-semibold uppercase tracking-[0.3em]">Loading</span>
      </div>
    </div>
  );
}
