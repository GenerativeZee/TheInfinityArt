import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/* ──────────────────────────────────────────────────────────────
   Font Configuration
   Playfair Display — elegant serif for headlines
   Inter — clean sans-serif for body text
   ────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

/* ──────────────────────────────────────────────────────────────
   SEO Metadata
   ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "The Infinity Art — Premium Graphic Design Studio",
    template: "%s | The Infinity Art",
  },
  description:
    "Premium graphic design studio with 15+ years of experience. Specializing in business cards, wedding invitations, 3D mockups, branding, banners, and design templates. Crafted for brands that mean business.",
  keywords: [
    "graphic design",
    "business card design",
    "wedding invitation design",
    "3D mockups",
    "brand identity",
    "premium design",
    "design studio",
    "The Infinity Art",
    "product mockups",
    "banner design",
  ],
  authors: [{ name: "The Infinity Art" }],
  creator: "The Infinity Art",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Infinity Art",
    title: "The Infinity Art — Premium Graphic Design Studio",
    description:
      "Premium graphic design studio with 15+ years of experience. Crafted for brands that mean business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Infinity Art — Premium Graphic Design Studio",
    description:
      "Premium graphic design studio with 15+ years of experience. Crafted for brands that mean business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ──────────────────────────────────────────────────────────────
   Root Layout
   ────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Infinity Art",
              description:
                "Premium graphic design studio specializing in business cards, wedding invitations, 3D mockups, branding, and design templates.",
              url: "https://theinfinityart.com",
              telephone: "+918006310310",
              email: "hello@theinfinityart.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              priceRange: "$99 - $499+",
              sameAs: [
                "https://instagram.com/theinfinityart",
                "https://dribbble.com/theinfinityart",
              ],
              founder: {
                "@type": "Person",
                name: "The Infinity Art",
                jobTitle: "Creative Director",
              },
              knowsAbout: [
                "Graphic Design",
                "Business Card Design",
                "Wedding Invitation Design",
                "3D Mockup Design",
                "Brand Identity",
                "Banner Design",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
