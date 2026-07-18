"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { portfolioItems, categories } from "@/data/portfolio";
import type { PortfolioItem } from "@/types";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const activeCategories =
    activeCategory === "All"
      ? categories.filter((cat) => cat !== "All")
      : [activeCategory];

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-background">
      <div className="container-premium">
        <SectionHeading
          label="Portfolio"
          title="Work That Speaks Volumes"
          description="A curated selection of our finest work across business cards, wedding invitations, 3D mockups, branding, and more."
        />

        {/* Category Filter Tabs */}
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 lg:mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm rounded-full border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-background border-accent font-medium"
                    : "bg-transparent text-foreground-muted border-border hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Portfolio Groups with Category Dividers */}
        <div className="space-y-16 lg:space-y-24">
          {activeCategories.map((cat) => {
            const itemsInCat = portfolioItems.filter(
              (item) => item.category === cat
            );
            if (itemsInCat.length === 0) return null;

            return (
              <div key={cat} className="space-y-8">
                {/* Category Header/Divider */}
                <div className="flex items-center gap-6">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-accent tracking-wide whitespace-nowrap uppercase">
                    {cat}
                  </h3>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Grid */}
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {itemsInCat.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer gold-glow ${
                          item.featured ? "sm:col-span-2" : ""
                        }`}
                        onClick={() => setSelectedProject(item)}
                      >
                        {/* Image with Next/Image */}
                        <div
                          className={`relative w-full overflow-hidden ${
                            item.featured ? "aspect-[16/10]" : "aspect-[4/3]"
                          }`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes={
                              item.featured
                                ? "(max-width: 640px) 100vw, 66vw"
                                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            }
                          />

                          {/* Subtle dark overlay gradient that darkens/fades in on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                          {/* Static subtle overlay just for basic contrast before hover */}
                          <div className="absolute inset-0 bg-black/30 group-hover:opacity-0 transition-opacity duration-500 z-0" />

                          {/* Category label - styled in gold accent */}
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-accent/10 backdrop-blur-md text-accent border border-accent/20">
                              {item.category}
                            </span>
                          </div>

                          {/* Featured badge */}
                          {item.featured && (
                            <div className="absolute top-4 right-4 z-20">
                              <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-accent text-background shadow-lg shadow-accent/20">
                                Featured
                              </span>
                            </div>
                          )}

                          {/* Bottom info overlay — reveals on hover with gold accent text */}
                          <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <h3 className="text-base sm:text-lg font-serif font-bold text-accent mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-foreground-muted mb-2">
                              {item.client} · {item.year}
                            </p>
                            <span className="text-[11px] font-semibold tracking-wider text-foreground group-hover:text-accent transition-colors inline-flex items-center gap-1">
                              View Project →
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:text-accent transition-colors"
              >
                <X size={18} />
              </button>

              {/* Hero image */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 48rem"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 space-y-6">
                {/* Category + Year */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent border border-accent/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-foreground-muted">
                    {selectedProject.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
                  {selectedProject.title}
                </h3>

                {/* Client */}
                <p className="text-sm text-foreground-muted">
                  Client:{" "}
                  <span className="text-foreground">
                    {selectedProject.client}
                  </span>
                </p>

                {/* Description */}
                <p className="text-foreground-muted leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Brief / Outcome */}
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <h4 className="text-sm font-semibold text-accent mb-2">
                    Project Outcome
                  </h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {selectedProject.brief}
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs rounded-lg bg-background border border-border text-foreground-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent-light transition-colors"
                  >
                    Start a Similar Project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
