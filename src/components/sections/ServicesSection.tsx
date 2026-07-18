"use client";

import { Check, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-background">
      <div className="container-premium">
        <SectionHeading
          label="Services & Pricing"
          title="Investment in Excellence"
          description="Transparent pricing, no surprises. Choose the package that fits your project, or reach out for a custom quote."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto pt-4">
          {services.map((tier, index) => (
            <RevealOnScroll key={tier.id} delay={index * 0.15}>
              <div
                className={`relative group h-full p-6 lg:p-8 rounded-2xl border transition-all duration-500 flex flex-col ${
                  tier.highlighted
                    ? "border-accent/40 bg-accent/[0.03] gold-glow"
                    : "border-border bg-card hover:border-accent/20 gold-glow"
                }`}
              >
                {/* Popular badge */}
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-[10px] font-bold tracking-wider uppercase bg-accent text-background rounded-full flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-serif font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-foreground-muted ml-1">
                    / project
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          tier.highlighted ? "text-accent" : "text-accent/60"
                        }`}
                      />
                      <span className="text-sm text-foreground-muted leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className={`w-full py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 block ${
                    tier.highlighted
                      ? "bg-accent text-background hover:bg-accent-light"
                      : "border border-accent/40 text-accent bg-background hover:border-accent hover:bg-accent/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Custom project note */}
        <RevealOnScroll>
          <p className="text-center text-sm text-foreground-muted mt-12 max-w-lg mx-auto">
            Need something tailored?{" "}
            <Link href="#contact" className="text-accent hover:text-accent-light underline underline-offset-4 transition-colors">
              Let&apos;s discuss your project
            </Link>{" "}
            and build a custom package that fits your exact needs.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
