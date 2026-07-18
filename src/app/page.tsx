"use client";

import dynamic from "next/dynamic";

/* ──────────────────────────────────────────────────────────────
   Component Imports
   Heavy 3D components are dynamically imported to reduce
   initial bundle size and improve First Contentful Paint.
   ────────────────────────────────────────────────────────────── */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

/* Dynamic imports for heavy components — keeps initial JS bundle lean */
const LoadingScreen = dynamic(
  () => import("@/components/layout/LoadingScreen"),
  { ssr: false }
);

const ThreeDShowcase = dynamic(
  () => import("@/components/sections/ThreeDShowcase"),
  {
    ssr: false,
    loading: () => (
      <section className="py-24 lg:py-32 bg-background-secondary">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto aspect-[16/10] rounded-2xl border border-border bg-card flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-foreground-muted">
                Loading 3D Experience...
              </span>
            </div>
          </div>
        </div>
      </section>
    ),
  }
);

/* ──────────────────────────────────────────────────────────────
   Home Page
   Assembles all sections in the intended scroll order.
   Each section handles its own scroll-triggered animations.
   ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* Overlays */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar />

      {/* Main content — sequential section layout */}
      <main>
        {/* 1. Full-screen hero with animated headline and CTAs */}
        <HeroSection />

        {/* 2. About / credibility with animated stat counters */}
        <AboutSection />

        {/* 3. Filterable portfolio grid with project detail modals */}
        <PortfolioSection />

        {/* 4. Interactive 3D mockup showcase (React Three Fiber) */}
        <ThreeDShowcase />

        {/* 5. Services & pricing tiers */}
        <ServicesSection />

        {/* 6. Client testimonials carousel */}
        <TestimonialsSection />

        {/* 7. 4-step process timeline */}
        <ProcessSection />

        {/* 8. Contact inquiry form + WhatsApp */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
