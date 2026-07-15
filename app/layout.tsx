import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}
