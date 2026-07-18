"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Upgraded Premium Preloader & Splash Screen
 * Featuring SVG stroke-draw animation, animated progress counter,
 * cycling keywords, gold background grid, pulsing radial glow,
 * drifting geometric ghost shapes, staggered corner meta-text,
 * ambient gold dust motes, and a split-curtain wipe reveal.
 */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      
      // Fallback timer for reduced motion (simple 1s fade)
      if (mediaQuery.matches) {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
      }
    }

    // 1. Progress Counter Animation (0 to 100 in 2.4 seconds)
    const duration = 2400;
    const startTime = performance.now();

    const animateProgress = (now: number) => {
      const elapsed = now - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(progressValue));

      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      } else {
        // Hold at 100% briefly, then exit
        setTimeout(() => setIsLoading(false), 300);
      }
    };
    requestAnimationFrame(animateProgress);

    // 2. Keyword Cycling Timeline (0ms: Crafting -> 800ms: Designing -> 1600ms: Wordmark)
    const t1 = setTimeout(() => setWordIndex(1), 800);
    const t2 = setTimeout(() => setWordIndex(2), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Generate 12 persistent gold ambient particles
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 260 - 130, // Random drift coordinates
      y: Math.random() * 260 - 130,
      size: Math.random() * 3 + 2, // 2px to 5px
      duration: Math.random() * 4 + 4, // 4s to 8s drift
      delay: Math.random() * 1.5,
    }));
  }, []);

  // Split-curtain slide ease curve
  const curtainEase = [0.85, 0, 0.15, 1] as const;

  // Stagger configurations for corner meta-text elements
  const cornerTransition = (delay: number) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 0.45, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { delay, duration: 0.5, ease: "easeOut" as const }
  });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          exit={reducedMotion ? { opacity: 0 } : undefined}
          transition={{ duration: 0.5 }}
        >
          {/* Curtain wipe background panels */}
          {!reducedMotion && (
            <>
              {/* Left curtain panel */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-background border-r border-white/5 z-10"
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.0, ease: curtainEase }}
              />
              {/* Right curtain panel */}
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-background border-l border-white/5 z-10"
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.0, ease: curtainEase }}
              />
            </>
          )}

          {/* Fallback solid background if curtain animations are disabled */}
          {reducedMotion && <div className="absolute inset-0 bg-background z-10" />}

          {/* ──────────────────────────────────────────────────────────────
             Ambient Background Layers (Placed inside the curtain layers so they wipe away)
             ────────────────────────────────────────────────────────────── */}
          
          {/* 1. Gold Technical Grid Overlay */}
          {!reducedMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,161,92,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,161,92,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] z-20 pointer-events-none"
            />
          )}

          {/* 2. Ghost Geometric Outlines (Slow Drift) */}
          {!reducedMotion && (
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
              {/* Hexagon Outline (Top Left) */}
              <motion.div
                className="absolute left-[10%] top-[15%] opacity-5 w-48 h-48"
                animate={{
                  rotate: 360,
                  y: [0, -12, 0],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent stroke-[0.75] fill-none">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                </svg>
              </motion.div>

              {/* Diamond Outline (Bottom Right) */}
              <motion.div
                className="absolute right-[12%] bottom-[18%] opacity-5 w-36 h-36"
                animate={{
                  rotate: -360,
                  x: [0, 10, 0],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent stroke-[0.75] fill-none">
                  <polygon points="50,5 95,50 50,95 5,50" />
                </svg>
              </motion.div>
            </div>
          )}

          {/* 3. Pulsing Radial Glow Centered Behind Logo */}
          {!reducedMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                className="w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(201,161,92,0.12)_0%,transparent_70%)] blur-[50px]"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}

          {/* 4. Floating Gold Dust Motes */}
          {!reducedMotion && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-25">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-accent/20"
                  style={{
                    width: p.size,
                    height: p.size,
                    transform: `translate(${p.x}px, ${p.y}px)`,
                  }}
                  animate={{
                    y: [p.y, p.y - 45, p.y],
                    x: [p.x, p.x + (Math.random() * 24 - 12), p.x],
                    opacity: [0.1, 0.45, 0.1],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                />
              ))}
            </div>
          )}

          {/* 5. Corner Meta-text Details (Staggered Assembly) */}
          <div className="absolute inset-0 z-25 pointer-events-none p-8 font-mono text-[9px] tracking-[0.25em] text-foreground uppercase hidden sm:block">
            {/* Top-Left: Founding Anniversary */}
            <motion.div
              {...(!reducedMotion ? cornerTransition(0.4) : { className: "opacity-40" })}
              className="absolute top-8 left-8"
            >
              15+ Years of Craft
            </motion.div>

            {/* Top-Right: Business Scope */}
            <motion.div
              {...(!reducedMotion ? cornerTransition(0.55) : { className: "opacity-40" })}
              className="absolute top-8 right-8"
            >
              Premium Graphic Design
            </motion.div>

            {/* Bottom-Left: Brand Moto */}
            <motion.div
              {...(!reducedMotion ? cornerTransition(0.7) : { className: "opacity-40" })}
              className="absolute bottom-8 left-8"
            >
              Crafted With Precision
            </motion.div>

            {/* Bottom-Right: Experience Phase */}
            <motion.div
              {...(!reducedMotion ? cornerTransition(0.85) : { className: "opacity-40" })}
              className="absolute bottom-8 right-8 text-right flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              01 — Initializing Experience
            </motion.div>
          </div>

          {/* ──────────────────────────────────────────────────────────────
             Central Logo & Progress Card Lockup
             ────────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-30 flex flex-col items-center gap-6"
          >
            {/* SVG Logo Draw-In */}
            <div className="relative h-20 w-36 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="h-20 w-auto filter drop-shadow-[0_0_8px_rgba(201,161,92,0.15)]"
              >
                {reducedMotion ? (
                  <path
                    d="M 26,38 C 20,38 12,42 12,50 C 12,58 20,62 26,62 C 34,62 42,54 50,50 C 58,46 66,38 74,38 C 80,38 88,42 88,50 C 88,58 80,62 74,62 C 66,62 58,54 50,50 C 42,46 34,38 26,38 Z"
                    fill="none"
                    stroke="#C9A15C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <motion.path
                    d="M 26,38 C 20,38 12,42 12,50 C 12,58 20,62 26,62 C 34,62 42,54 50,50 C 58,46 66,38 74,38 C 80,38 88,42 88,50 C 88,58 80,62 74,62 C 66,62 58,54 50,50 C 42,46 34,38 26,38 Z"
                    fill="none"
                    stroke="#C9A15C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.4,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </svg>
            </div>

            {/* Keyword Cycling Area */}
            <div className="h-10 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {wordIndex === 0 && (
                  <motion.p
                    key="crafting"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 0.9, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm tracking-[0.25em] uppercase text-accent font-medium font-serif italic"
                  >
                    Crafting
                  </motion.p>
                )}
                {wordIndex === 1 && (
                  <motion.p
                    key="designing"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 0.9, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm tracking-[0.25em] uppercase text-accent font-medium font-serif italic"
                  >
                    Designing
                  </motion.p>
                )}
                {wordIndex === 2 && (
                  <motion.div
                    key="brand"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center"
                  >
                    <p className="text-sm font-bold tracking-[0.25em] text-foreground">
                      THE INFINITY ART
                    </p>
                    <p className="text-[9px] font-medium tracking-[0.3em] text-foreground-muted mt-1">
                      WE PRINT WHAT YOU IMAGINE
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Progress Counter & Shimmer Bar */}
            <div className="flex flex-col items-center gap-2 mt-2 w-48 font-serif">
              <span className="text-xs font-semibold font-mono tracking-wider text-accent/80">
                {progress}%
              </span>

              {/* Progress bar */}
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent/80 via-accent to-accent-light rounded-full shadow-[0_0_8px_#C9A15C]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
