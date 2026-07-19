import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dhanlaxmi Financial Services",
    template: "%s | Dhanlaxmi Financial Services",
  },
  description: "Personalized financial planning, mutual fund advisory and insurance solutions for families and businesses across India.",
  keywords: ["financial planning", "mutual funds", "insurance", "investment advisor", "SIP planning"],
  metadataBase: new URL("https://dhanlaxmi-growth-hub.lovable.app"),
  openGraph: {
    title: "Dhanlaxmi Financial Services",
    description: "Trusted financial guidance built around clarity, performance and long-term wealth protection.",
    type: "website",
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8fbff" }, { media: "(prefers-color-scheme: dark)", color: "#020617" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}
