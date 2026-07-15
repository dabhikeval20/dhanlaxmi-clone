import type { Metadata } from "next";
import dynamic from "next/dynamic";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
  title: "Dhanlaxmi Financial Services | Your Trusted Partner for Wealth Growth",
  description: "Personalized investment, insurance and financial planning services for families and businesses across India.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <MarketTicker />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Dashboard />
        <About />
        <Services />
        <Process />
        <Calculator />
        <Partners />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}