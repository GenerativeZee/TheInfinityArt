import { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  // ── Business Cards ──────────────────────────────────────────
  {
    id: "bc-01",
    title: "Luxe Gold Foil Business Card",
    category: "Business Cards",
    description:
      "A premium gold foil business card designed for a luxury real estate firm. Features embossed typography, spot UV coating, and a matte black substrate that exudes sophistication.",
    brief:
      "The client needed cards that would leave a lasting impression at high-end networking events. We delivered a design that became a conversation starter.",
    image: "/portfolio/business-card-1.png",
    client: "Meridian Properties",
    tools: ["Photoshop", "Illustrator", "3D Mockup"],
    featured: true,
    year: 2024,
  },
  {
    id: "bc-02",
    title: "Minimalist Architect Card",
    category: "Business Cards",
    description:
      "Clean, architectural business card with precise geometric lines and a restrained color palette. Printed on 600gsm cotton stock with letterpress finish.",
    brief:
      "An architecture studio wanted cards as precise as their blueprints. The result: a card that doubles as a miniature design piece.",
    image: "/portfolio/business-card-2.png",
    client: "Studio Vertex",
    tools: ["Illustrator", "InDesign"],
    year: 2024,
  },
  {
    id: "bc-03",
    title: "Tech Startup NFC Card",
    category: "Business Cards",
    description:
      "A cutting-edge NFC-enabled business card with holographic elements and a scannable QR code. Bridges physical and digital networking seamlessly.",
    brief:
      "A fintech startup wanted cards that reflect their innovative spirit. We embedded NFC chips and designed a futuristic visual language.",
    image: "/portfolio/business-card-3.png",
    client: "NovaPay",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    year: 2023,
  },

  // ── Wedding Cards ──────────────────────────────────────────
  {
    id: "wc-01",
    title: "Royal Garden Wedding Suite",
    category: "Wedding Cards",
    description:
      "An opulent wedding invitation suite featuring hand-illustrated botanical motifs, custom calligraphy, and gold leaf accents on handmade Italian paper.",
    brief:
      "A destination wedding in Tuscany required invitations as breathtaking as the venue. The suite included save-the-dates, RSVP cards, and a custom wax seal.",
    image: "/portfolio/wedding-card-1.png",
    client: "Private Client",
    tools: ["Illustrator", "Procreate", "Print Production"],
    featured: true,
    year: 2024,
  },
  {
    id: "wc-02",
    title: "Modern Monogram Invitation",
    category: "Wedding Cards",
    description:
      "A contemporary wedding invitation centered around a bespoke monogram design. Acrylic printing with metallic ink on frosted glass-effect cardstock.",
    brief:
      "The couple wanted something modern yet timeless. We created a custom monogram that became their wedding's visual identity.",
    image: "/portfolio/wedding-card-2.png",
    client: "Private Client",
    tools: ["Illustrator", "Photoshop"],
    year: 2023,
  },
  {
    id: "wc-03",
    title: "Mughal Heritage Invitation",
    category: "Wedding Cards",
    description:
      "A richly detailed invitation inspired by Mughal architecture and miniature art. Features intricate jali patterns, marbled paper inserts, and a velvet box presentation.",
    brief:
      "A grand Indian wedding demanded invitations that honor tradition while feeling contemporary. The boxed set became a keepsake.",
    image: "/portfolio/wedding-card-3.png",
    client: "Private Client",
    tools: ["Photoshop", "Illustrator", "Gold Foil Printing"],
    year: 2024,
  },

  // ── 3D Mockups ──────────────────────────────────────────────
  {
    id: "3d-01",
    title: "Apple Cider Vinegar 3D Render",
    category: "3D Mockups",
    description:
      "Photorealistic 3D rendering and product presentation for Ayur Shape Wellness's Apple Cider Vinegar Effervescent Tablets bottle on a pedestal.",
    brief:
      "Designed to evoke a clean, natural, and therapeutic feeling, using light pastel tones, dynamic splash effects, and clean typography.",
    image: "/portfolio/user-portfolio-4.jpeg",
    client: "Ayur Shape Wellness",
    tools: ["Cinema 4D", "Octane Render", "Photoshop"],
    featured: true,
    year: 2024,
  },
  {
    id: "3d-02",
    title: "Diabetic Gummies 3D Mockup",
    category: "3D Mockups",
    description:
      "Premium pre-production product visualization and packaging mockup for Ayur Shape Wellness's Diabetic Gummies box and bottle set.",
    brief:
      "Visualizing the final printed boxes and bottles with custom textures, realistic gloss, and clean blueberry ingredients arrangement.",
    image: "/portfolio/user-portfolio-2.jpeg",
    client: "Ayur Shape Wellness",
    tools: ["Blender", "Photoshop", "Substance Painter"],
    year: 2023,
  },
  {
    id: "3d-03",
    title: "Ayur Shape Wellness Duo Mockup",
    category: "3D Mockups",
    description:
      "Sleek 3D product pair rendering of the Apple Cider Vinegar bottle alongside the Diabetic Gummies jar on a clean color-blocked background.",
    brief:
      "Created for print marketing materials and ecommerce product catalogs, utilizing minimal reflection and shadows.",
    image: "/portfolio/user-portfolio-10.jpeg",
    client: "Ayur Shape Wellness",
    tools: ["Blender", "KeyShot", "Photoshop"],
    year: 2024,
  },

  // ── Banners ────────────────────────────────────────────────
  {
    id: "bn-01",
    title: "Black Friday Campaign Suite",
    category: "Banners",
    description:
      "A cohesive multi-platform banner suite for a major e-commerce Black Friday sale. Includes web headers, social media banners, email headers, and retargeting ads.",
    brief:
      "The campaign generated a 280% increase in click-through rate compared to the previous year's creative.",
    image: "/portfolio/banner-1.png",
    client: "ShopVault",
    tools: ["Photoshop", "Illustrator", "Figma"],
    featured: true,
    year: 2024,
  },
  {
    id: "bn-02",
    title: "Music Festival Billboard",
    category: "Banners",
    description:
      "Eye-catching large-format billboard design for an electronic music festival. Bold typography, neon gradients, and dynamic compositions designed for maximum impact at highway speed.",
    brief:
      "Designed for 48-sheet billboards across the city. The visual language extended to stage graphics and wristband designs.",
    image: "/portfolio/banner-1.png",
    client: "Pulse Festival",
    tools: ["Photoshop", "Illustrator"],
    year: 2023,
  },

  // ── Templates ──────────────────────────────────────────────
  {
    id: "tp-01",
    title: "Social Media Template Kit",
    category: "Templates",
    description:
      "A comprehensive 60+ piece social media template kit for Instagram, LinkedIn, and Twitter. Includes post templates, story templates, highlight covers, and carousel layouts.",
    brief:
      "Sold over 2,000 copies on Creative Market within the first month of release. Rated 4.9/5 by buyers.",
    image: "/portfolio/template-1.png",
    client: "Creative Market Product",
    tools: ["Figma", "Canva", "Photoshop"],
    year: 2024,
  },
  {
    id: "tp-02",
    title: "Corporate Presentation Deck",
    category: "Templates",
    description:
      "A 50-slide premium presentation template with dark and light variants. Features data visualization slides, team pages, timeline layouts, and device mockup frames.",
    brief:
      "Designed for Fortune 500 pitch decks. The template has been adopted by three consulting firms as their standard deck.",
    image: "/portfolio/template-1.png",
    client: "SlideVault",
    tools: ["Figma", "PowerPoint", "Keynote"],
    year: 2023,
  },

  // ── Branding ───────────────────────────────────────────────
  {
    id: "br-01",
    title: "Luxury Hotel Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity for a boutique luxury hotel including logo, typography system, color palette, stationery suite, signage system, and brand guidelines document.",
    brief:
      "A 120-room boutique hotel needed an identity that conveys warmth and exclusivity. The brand book spans 80 pages of meticulously crafted guidelines.",
    image: "/portfolio/branding-1.png",
    client: "The Marcella",
    tools: ["Illustrator", "InDesign", "Photoshop", "Blender"],
    featured: true,
    year: 2024,
  },
  {
    id: "br-02",
    title: "Ayur Shape Brand Identity System",
    category: "Branding",
    description:
      "Organic brand emblem and corporate logo design for Ayur Shape Wellness, centered around a circular leafy branch emblem representing holistic health.",
    brief:
      "Developed a comprehensive color strategy and symbolic brand emblem that can be embossed on bottles, boxes, and corporate materials.",
    image: "/portfolio/user-portfolio-7.jpeg",
    client: "Ayur Shape Wellness",
    tools: ["Illustrator", "Photoshop"],
    year: 2023,
  },
];

export const categories = [
  "All",
  "Business Cards",
  "Wedding Cards",
  "3D Mockups",
  "Banners",
  "Templates",
  "Branding",
] as const;
