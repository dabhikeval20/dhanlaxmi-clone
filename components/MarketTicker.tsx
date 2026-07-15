import { ArrowUpRight } from "lucide-react";

const tickers = [
  { label: "NIFTY", value: "24,712.30", change: "+0.62%" },
  { label: "SENSEX", value: "81,204.55", change: "+0.48%" },
  { label: "BANK NIFTY", value: "51,890.10", change: "-0.12%" },
  { label: "GOLD", value: "₹74,150", change: "+0.34%" },
  { label: "USD/INR", value: "83.45", change: "-0.05%" },
];

export default function MarketTicker() {
  return (
    <div className="border-b border-slate-200 bg-slate-950 text-slate-100 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center overflow-hidden px-4 py-3 sm:px-6 lg:px-8">
        <div className="mr-4 shrink-0 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          Market Pulse
        </div>
        <div className="marquee flex min-w-0 items-center gap-6 whitespace-nowrap">
          {[...tickers, ...tickers].map((item, index) => (
            <div key={`${item.label}-${index}`} className="flex items-center gap-2 text-sm">
              <span className="font-medium text-white">{item.label}</span>
              <span className="text-slate-300">{item.value}</span>
              <span className={`inline-flex items-center gap-1 ${item.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>
                {item.change}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
