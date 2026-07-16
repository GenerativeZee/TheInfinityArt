"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingScreen — 1 second branded intro that fades out smoothly.
 * Reduced from 2s to 1s to avoid annoying returning visitors.
 */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick 1-second branded intro
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Infinity symbol */}
            <div className="relative h-12 w-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-accent text-2xl font-serif"
              >
                ∞
              </motion.span>
            </div>

            {/* Studio name */}
            <div className="text-center">
              <p className="text-sm font-bold tracking-wider text-foreground">
                THE INFINITY
              </p>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-accent">
                ART
              </p>
            </div>

            {/* Loading bar */}
            <div className="w-32 h-0.5 bg-border rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
