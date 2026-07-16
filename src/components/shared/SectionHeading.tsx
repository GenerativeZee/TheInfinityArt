"use client";

import RevealOnScroll from "./RevealOnScroll";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <RevealOnScroll className={`mb-16 lg:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      {/* Small label */}
      <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
        {label}
      </span>

      {/* Gold accent line */}
      <div className={`section-line mb-6 ${align === "center" ? "mx-auto" : ""}`} />

      {/* Main heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight tracking-wide">
        {title}
      </h2>

      {/* Optional description */}
      {description && (
        <p className="mt-4 text-foreground-muted text-base lg:text-lg max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
