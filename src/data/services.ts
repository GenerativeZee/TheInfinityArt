import { ServiceTier } from "@/types";

export const services: ServiceTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$99",
    description:
      "Perfect for individuals and small businesses who need a single, polished design piece to kickstart their brand presence.",
    features: [
      "1 design concept with 2 revisions",
      "Single design category",
      "High-res print-ready files",
      "PDF & PNG deliverables",
      "3-5 business day turnaround",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$249",
    description:
      "The most popular choice for growing brands. Multiple concepts, faster delivery, and premium file formats for maximum flexibility.",
    features: [
      "3 design concepts with 5 revisions",
      "Up to 2 design categories",
      "Print-ready + digital formats",
      "Source files (AI, PSD, Figma)",
      "3D mockup presentation",
      "2-3 business day turnaround",
      "Priority email & chat support",
      "Social media adapted versions",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$499",
    description:
      "The complete creative partnership. Unlimited revisions, rush delivery, and a dedicated design session to bring your vision to life.",
    features: [
      "5 design concepts with unlimited revisions",
      "All design categories included",
      "Complete file package (all formats)",
      "Photorealistic 3D mockup renders",
      "Brand guidelines mini-document",
      "24-48 hour rush turnaround",
      "Dedicated WhatsApp support",
      "1-on-1 strategy consultation",
      "12 months of minor edits included",
    ],
    cta: "Go Premium",
  },
];
