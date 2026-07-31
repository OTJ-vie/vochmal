export interface GalleryPortfolio {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  coverImage: string;
  images: string[];
  highlights: string[];
}

export const galleryPortfolios: GalleryPortfolio[] = [
  {
    slug: "construction",
    title: "Construction Portfolio",
    shortTitle: "Construction",
    description: "Civil engineering, residential, commercial, and infrastructure works delivered with precision and durability.",
    coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    ],
    highlights: ["Civil engineering", "Bridge and roadworks", "Commercial fit-outs", "Residential projects"],
  },
  {
    slug: "mining",
    title: "Mining",
    shortTitle: "Mining",
    description: "A visual view of our extraction, processing, handling, and operational environments across Nigeria.",
    coverImage: "/images/mining/vochmining-1.jpeg",
    images: [
      "/images/mining/vochmining-1.jpeg",
      "/images/mining/vochmining-2.jpeg",
      "/images/mining/vochmining-3.jpeg",
      "/images/mining/vochmining-4.jpeg",
      "/images/mining/vochmining-5.jpeg",
      "/images/mining/vochmining-6.jpeg",
      "/images/mining/vochmining-7.jpeg",
      "/images/mining/vochmining-8.jpeg",
      "/images/mining/vochmining-9.jpeg",
      "/images/mining/vochmining-10.jpeg",
      "/images/mining/vochmining-11.jpeg",
    ],
    highlights: ["Mineral handling", "Site operations", "Processing environment", "Operational logistics"],
  },
  {
    slug: "bakery",
    title: "Bakery",
    shortTitle: "Bakery",
    description: "Commercial baking, pastry production, and quality-driven food manufacturing with a strong delivery culture.",
    coverImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
    images: [
      "/images/bakery/vochmal-products-illustration.png",
      "/images/bakery/Burger-bread.jpg",
      "/images/bakery/white-bread.jpg",
      "/images/bakery/vochmal-bread-pack.jpg",
      "/images/bakery/vochmal-chicken-pie.jpg",
      "/images/bakery/vochmal-buns.jpg",
      "/images/bakery/vochmal-pie.jpg",
      "/images/bakery/vochmal-bread1.jpg",
      "/images/bakery/vochmal-bread-bus.jpg",
      "/images/bakery/vochmal-zobo.jpg",
      "/images/bakery/vochmal-egg-roll.jpg",
    ],
    highlights: ["Pastry production", "Commercial bakery operations", "Product presentation", "Quality assurance"],
  },
  {
    slug: "procurement",
    title: "Procurement",
    shortTitle: "Procurement",
    description: "Reliable sourcing, vendor coordination, and supply-chain execution for projects and industrial operations.",
    coverImage: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    ],
    highlights: ["Vendor sourcing", "Project materials", "Logistics coordination", "Operational procurement"],
  },
  {
    slug: "service-apartments",
    title: "Service Apartments",
    shortTitle: "Service Apartments",
    description: "Comfortable, furnished, short-stay accommodation designed for corporate and executive use.",
    coverImage: "/images/apartments/premium-2bed-living-room-1.jpg",
    images: [
      "/images/apartments/premium-2bed-living-room-1.jpg",
      "/images/apartments/premium-2bed-living-room-2.jpg",
      "/images/apartments/premium-2bed-kitchen-dining.jpg",
    ],
    highlights: ["Furnished apartments", "Executive stays", "Interior comfort", "Guest-ready spaces"],
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    shortTitle: "Oil & Gas",
    description: "Field operations, pipeline integrity, refinery support, and environmental programmes across the energy value chain.",
    coverImage: "https://images.unsplash.com/photo-1569402928485-6b3576e3e87c?w=1200&q=80",
    images: [
      "/images/oil-and-gas/vochmal-truck1.jpg",
      "/images/oil-and-gas/vochmal-truck2.jpg",
      "/images/oil-and-gas/vochmal-truck3.jpg",
      "/images/oil-and-gas/vochmal-truck4.jpg",
    ],
    highlights: ["Field maintenance", "Pipeline integrity", "Energy infrastructure", "Environmental monitoring"],
  },
];

export function getGalleryPortfolio(slug: string) {
  return galleryPortfolios.find((portfolio) => portfolio.slug === slug);
}
