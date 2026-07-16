/* ──────────────────────────────────────────────────────────────
   Types — The Infinity Art Portfolio
   ────────────────────────────────────────────────────────────── */

export type PortfolioCategory =
  | "Business Cards"
  | "Wedding Cards"
  | "3D Mockups"
  | "Banners"
  | "Templates"
  | "Branding";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  /** Short client outcome or brief — shown in the detail modal */
  brief: string;
  /** Primary hero image (relative to /public or an absolute URL) */
  image: string;
  /** Optional gallery images for the detail view */
  gallery?: string[];
  client: string;
  tools: string[];
  featured?: boolean;
  year: number;
}

export interface ServiceTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: number; // 1-5
  avatar?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
