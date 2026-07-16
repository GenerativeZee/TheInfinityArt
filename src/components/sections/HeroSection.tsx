"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.08),transparent)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content — split layout */}
      <div className="relative z-10 container-premium grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-32 lg:py-0">
        {/* Left — Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium tracking-wider text-accent uppercase">
              15+ Years of Design Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.95] tracking-wide"
          >
            <span className="block text-foreground">Premium Design,</span>
            <span className="block mt-2">
              <span className="text-gradient-gold">Crafted</span>
              <span className="text-foreground"> for Brands</span>
            </span>
            <span className="block text-foreground mt-2">
              That Mean{" "}
              <span className="relative inline-block">
                Business
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-base lg:text-lg text-foreground-muted max-w-lg leading-relaxed"
          >
            From stunning business cards to photorealistic 3D mockups, we
            transform your vision into designs that command attention and drive
            results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="#portfolio"
              className="group px-8 py-4 bg-accent text-background font-semibold text-sm rounded-full hover:bg-accent-light transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              View Portfolio
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-accent/40 text-accent bg-background font-semibold text-sm rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-16 flex flex-col"
          >
            <span className="text-xs text-foreground-muted tracking-wider uppercase mb-3">
              Trusted by 2,500+ clients worldwide
            </span>
            <div className="flex items-center gap-6 opacity-30">
              {["Meridian", "Aura", "NovaPay", "Ember", "ShopVault"].map(
                (name) => (
                  <span
                    key={name}
                    className="text-xs font-semibold tracking-wider text-foreground"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Right — Hero showcase image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 -m-8 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />

          {/* Main showcase image */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/50">
            <Image
              src="/portfolio/hero-showcase.png"
              alt="Premium design portfolio showcase — business cards, wedding invitations, 3D mockups, and branding by The Infinity Art"
              width={700}
              height={500}
              className="w-full h-auto"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 glass rounded-xl p-4 border border-accent/20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-serif font-bold">∞</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">2,500+</p>
                <p className="text-[10px] text-foreground-muted">Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          {/* Floating category card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-accent/20 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              <p className="text-xs font-medium text-foreground">8+ Design Categories</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
