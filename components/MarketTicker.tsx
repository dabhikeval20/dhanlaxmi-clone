"use client";

const tickers = [
  { label: "NIFTY 50", value: "24,712.30", change: "+0.62%" },
  { label: "SENSEX", value: "81,204.55", change: "+0.48%" },
  { label: "BANK NIFTY", value: "51,890.10", change: "-0.12%" },
  { label: "GOLD (10g)", value: "₹74,150", change: "+0.34%" },
  { label: "USD/INR", value: "83.45", change: "-0.05%" },
  { label: "HDFC MF Top 100", value: "NAV 987.42", change: "+0.71%" },
  { label: "ICICI Bluechip", value: "NAV 76.10", change: "+0.55%" },
  { label: "SBI Small Cap", value: "NAV 178.22", change: "+1.02%" },
];

export default function MarketTicker() {
  return (
    <div className="fixed top-[70px] left-0 right-0 z-40 bg-[var(--navy)] text-white overflow-hidden border-b border-white/5 select-none">
      <div className="flex whitespace-nowrap animate-ticker py-2">
        {/* We double the array to ensure smooth seamless scrolling loop */}
        {[...tickers, ...tickers, ...tickers].map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2 px-6 text-xs">
            <span className="font-semibold text-[var(--gold)]">{item.label}</span>
            <span className="text-white/80">{item.value}</span>
            <span className={item.change.startsWith("+") ? "text-emerald-300 animate-pulse" : "text-red-300"}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
