"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { Award, Clock, Users, Layers } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Layers,
    value: 2500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: Award,
    value: 8,
    suffix: "+",
    label: "Design Categories",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background-secondary">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-premium">
        <SectionHeading
          label="About Us"
          title="Where Vision Meets Precision"
          description="For over 15 years, The Infinity Art has been the creative force behind brands that refuse to blend in. We don't just design — we engineer visual experiences that convert."
        />

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <RevealOnScroll direction="right">
            <div className="space-y-6">
              <p className="text-foreground-muted leading-relaxed text-base lg:text-lg">
                Every pixel we place, every curve we craft, serves a purpose.
                Our design philosophy is rooted in the belief that{" "}
                <span className="text-foreground font-medium">
                  great design isn&apos;t decoration — it&apos;s a business tool
                </span>{" "}
                that communicates value before a single word is read.
              </p>
              <p className="text-foreground-muted leading-relaxed text-base lg:text-lg">
                From premium business cards that spark conversations to
                photorealistic 3D mockups that sell products before they&apos;re
                manufactured, we specialize in design that{" "}
                <span className="text-foreground font-medium">
                  moves the needle
                </span>
                .
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left">
            <div className="space-y-6">
              <p className="text-foreground-muted leading-relaxed text-base lg:text-lg">
                Our client roster spans luxury hospitality, fintech startups,
                fashion labels, and everything in between. What unites them is a
                shared ambition:{" "}
                <span className="text-foreground font-medium">
                  to look as exceptional as they perform
                </span>
                .
              </p>
              <p className="text-foreground-muted leading-relaxed text-base lg:text-lg">
                Based in India and serving clients worldwide, we bring a global
                design perspective with the dedication and craft of a boutique
                studio. Every project gets the same attention to detail —
                whether it&apos;s a single business card or a complete brand
                identity system.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <div className="relative group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-accent/20 transition-all duration-500 text-center gold-glow">
                {/* Icon */}
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/15 transition-colors">
                  <stat.icon size={22} />
                </div>

                {/* Number */}
                <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <span className="text-sm text-foreground-muted tracking-wide">
                  {stat.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
