import Link from "next/link";
import Image from "next/image";
import { Globe, Palette, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Globe, href: "https://instagram.com/theinfinityart", label: "Instagram" },
  { icon: Palette, href: "https://dribbble.com/theinfinityart", label: "Dribbble" },
];

const quickLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Business Card Design", href: "#portfolio" },
  { label: "Wedding Invitations", href: "#portfolio" },
  { label: "3D Mockups & Renders", href: "#portfolio" },
  { label: "Neon Sign Design", href: "#portfolio" },
  { label: "Banner Design", href: "#portfolio" },
  { label: "Brand Identity", href: "#portfolio" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-border">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container-premium py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#hero" className="group flex items-center gap-2 mb-6">
              <Image
                src="/infinity-logo.png"
                alt="The Infinity Art"
                width={160}
                height={42}
                className="h-9 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6 max-w-xs">
              Premium graphic design studio with 15+ years of experience
              crafting visual identities that elevate brands and captivate
              audiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@theinfinityart.com"
                  className="text-sm text-foreground-muted hover:text-accent transition-colors"
                >
                  hello@theinfinityart.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="tel:+918006310310"
                  className="text-sm text-foreground-muted hover:text-accent transition-colors"
                >
                  +91 800 631 0310
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-foreground-muted">
                  India · Serving Clients Worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-muted">
            © {currentYear} The Infinity Art. All rights reserved.
          </p>
          <p className="text-xs text-foreground-muted">
            Crafted with precision. Designed to inspire.
          </p>
        </div>
      </div>
    </footer>
  );
}
