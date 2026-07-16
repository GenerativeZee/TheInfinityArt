"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/* ──────────────────────────────────────────────────────────────
   Zod Validation Schema
   ────────────────────────────────────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Business Card Design",
  "Wedding Invitation Design",
  "3D Mockup / Render",
  "Banner Design",
  "Social Media Templates",
  "Brand Identity / Branding",
  "Multiple Services",
  "Other",
];

const budgetRanges = [
  "Under $100",
  "$100 – $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000+",
  "Let's discuss",
];

const timelines = [
  "ASAP (Rush)",
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible / No rush",
];

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      }
    } catch {
      // Silently handle — in production you'd show an error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/918006310310?text=${encodeURIComponent(
    "Hi! I'm interested in a design project. I'd love to discuss the details."
  )}`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-premium">
        <SectionHeading
          label="Get in Touch"
          title="Let's Create Something Extraordinary"
          description="Ready to elevate your brand? Tell us about your project and we'll get back to you within 24 hours with a tailored proposal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info Column */}
          <RevealOnScroll direction="right" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Quick contact cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email Us</p>
                    <a
                      href="mailto:hello@theinfinityart.com"
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      hello@theinfinityart.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Call Us</p>
                    <a
                      href="tel:+918006310310"
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      +91 800 631 0310
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-foreground-muted">
                      India · Serving Clients Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-6 py-4 rounded-xl border border-green-500/20 bg-green-500/5 text-green-400 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <MessageCircle size={20} />
                <div>
                  <p className="text-sm font-medium">Chat on WhatsApp</p>
                  <p className="text-xs opacity-70">
                    Fastest way to reach us — reply within minutes
                  </p>
                </div>
              </a>

              {/* Response time note */}
              <p className="text-xs text-foreground-muted leading-relaxed">
                We typically respond within 2-4 hours during business hours
                (IST). For urgent requests, WhatsApp is the fastest channel.
              </p>
            </div>
          </RevealOnScroll>

          {/* Form Column */}
          <RevealOnScroll direction="left" className="lg:col-span-3">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-accent/20 bg-accent/5 min-h-[500px]"
              >
                <CheckCircle size={48} className="text-accent mb-6" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="text-foreground-muted max-w-md">
                  Your inquiry has been received. We&apos;ll review your project
                  details and get back to you within 24 hours with a tailored
                  proposal.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2.5 text-sm border border-accent/40 rounded-full text-accent bg-background hover:border-accent hover:bg-accent/10 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 p-6 lg:p-8 rounded-2xl border border-border bg-card"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 800 631 0310"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Project Type + Budget row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      {...register("projectType")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    {...register("timeline")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                  >
                    <option value="">Select your timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.timeline.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Tell us about your project — the more detail, the better our proposal will be..."
                    {...register("description")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-accent text-background font-semibold text-sm hover:bg-accent-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-foreground-muted text-center">
                  By submitting, you agree to be contacted about your project.
                  We respect your privacy.
                </p>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
