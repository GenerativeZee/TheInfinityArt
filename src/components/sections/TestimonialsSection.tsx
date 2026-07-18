"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 lg:py-32 bg-background-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-premium">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't take our word for it — hear from the brands and individuals who trusted us with their most important design projects."
        />

        <RevealOnScroll>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Quote size={20} className="text-accent" />
              </div>
            </div>

            {/* Testimonial card */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-12 text-center min-h-[320px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < current.rating
                            ? "text-accent fill-accent"
                            : "text-border"
                        }
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base lg:text-lg text-foreground leading-relaxed font-serif italic max-w-2xl mb-8">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Client info */}
                  <div>
                    {/* Avatar placeholder */}
                    <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent font-bold text-sm">
                        {current.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      {current.name}
                    </p>
                    <p className="text-xs text-foreground-muted mt-0.5">
                      {current.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/30 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-6 bg-accent"
                        : "w-2 bg-border hover:bg-foreground-muted"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/30 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
