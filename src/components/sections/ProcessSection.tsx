"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { MessageSquare, Lightbulb, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start with a deep-dive into your brand, goals, and target audience. Every great design begins with understanding the 'why' behind it.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Concept",
    description:
      "Armed with insights, we develop multiple creative directions. You'll see mood boards, sketches, and initial concepts before a single pixel is finalized.",
    icon: Lightbulb,
  },
  {
    step: 3,
    title: "Refinement",
    description:
      "Your feedback shapes the final design. We iterate and polish until every detail is perfect — we don't ship 'good enough.'",
    icon: PenTool,
  },
  {
    step: 4,
    title: "Delivery",
    description:
      "You receive production-ready files in all formats, plus 3D mockup presentations. We also include a brief usage guide so your design stays consistent.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-background">
      <div className="container-premium">
        <SectionHeading
          label="Our Process"
          title="From Brief to Brilliance"
          description="A proven 4-step process that turns your vision into polished, production-ready design — on time, every time."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <RevealOnScroll key={item.step} delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Step number circle */}
                  <div className="relative z-10 mb-6">
                    <div className="h-12 w-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-500">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-background text-[10px] font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
