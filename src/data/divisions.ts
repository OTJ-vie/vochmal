export interface Division {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  heroImage: string;
  color: string;
  email: string;
  phone: string;
}

export const divisions: Division[] = [
  {
    id: "construction",
    name: "Construction",
    
    slug: "/construction",

    
    shortDescription:
      "Civil engineering, building construction, and project management services delivered to the highest standards across Nigeria.",
    fullDescription:
      "Vochmal Construction delivers world-class civil engineering, commercial and residential building projects, roads, and infrastructure across Nigeria. Our team of certified engineers and project managers ensures every project is completed on time, within budget, and to international quality standards.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1920&q=85",
    color: "#0D1B40",
    email: "vochmal7@gmail.com",
    phone: "+234 803 630 5694",
  },
  {
    id: "mining",
    name: "Mining",
    slug: "/mining",
    shortDescription:
      "Vochmal (Mines) Limited — extraction and processing of tin, columbite, iron, monazite, zircon, lead, zinc ore, and lithium, based in Jos, Plateau State.",
    fullDescription:
      "Vochmal (Mines) Limited (RC 1442966) extracts and processes tin, columbite, iron, monazite, zircon, lead, zinc ore, and lithium, operating from a head office at 1 D. B. Zang Way, Jos, Plateau State, and a branch office at Mile 7, Jos. We welcome investment, joint venture, and offtake enquiries.",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    color: "#5C4033",
    email: "vochmal7@gmail.com",
    phone: "+234 813 299 5131",
  },
  {
    id: "bakery",
    name: "Bakery",
    slug: "/bakery",
    shortDescription:
      "A beloved Jos, Plateau State bakery known for fresh bread, snacks and pastries, and natural fruit drinks — Vochmal Foods.",
    fullDescription:
      "Vochmal Bakery (Vochmal Foods) is a well-known neighbourhood bakery on the Bukuru Bye-pass in Jos, Plateau State, famous for producing freshly baked, soft, and delicious everyday bread, snacks and pastries, and natural drinks like zobo, kunu, and tigernut juice. We supply retail customers and bulk orders alike, freshly made daily.",
    icon: "ChefHat",
    image: "/images/bakery/vochmal-bread-pack.jpg",
    heroImage: "/images/bakery/vochmal-products-hero.jpg",
    color: "#92400E",
    email: "vochmal7@gmail.com",
    phone: "+234 803 672 6743",
  },
  {
    id: "procurement",
    name: "General Procurement",
    slug: "/procurement",
    shortDescription:
      "End-to-end supply chain solutions — from vendor sourcing and equipment procurement to logistics and contract management.",
    fullDescription:
      "Vochmal General Procurement Services provides comprehensive supply chain management for organisations operating in Nigeria. We source, negotiate, and deliver equipment, consumables, and specialised materials with speed and precision.",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85",
    color: "#1E3A5F",
    email: "vochmal7@gmail.com",
    phone: "+234 803 630 5694",
  },
  {
    id: "service-apartments",
    name: "Service Apartments",
    slug: "/service-apartments",
    shortDescription:
      "Vochmal Homes (@vochmal_homes) — Beautifully furnished 2-bedroom apartments in Jos, blending comfort and affordability in a tranquil environment.",
    fullDescription:
      "Vochmal Homes offers tastefully furnished 2-bedroom apartments at Covenant Country Home, Gwot Rayfield, Jos, Plateau State — just after Rayfield Resort. Each unit comes with on-site customer service, WiFi, 24/7 power supply, trained security with guard dogs on night patrol, and CCTV surveillance, at ₦80,000 per night.",
    icon: "Hotel",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85",
    color: "#14532D",
    email: "vochmal7@gmail.com",
    phone: "+234 916 221 2941",
  },
  {
    id: "oil-and-gas",
    name: "Oil & Gas",
    slug: "/oil-and-gas",
    shortDescription:
      "Upstream and downstream oil & gas services, pipeline engineering, and energy consultancy for Nigeria's energy sector.",
    fullDescription:
      "Vochmal Oil & Gas delivers end-to-end services across Nigeria's energy sector — from upstream exploration support and wellhead maintenance to downstream distribution and pipeline integrity management. Our NCDMB-compliant team brings deep technical expertise and a safety-first culture to every engagement.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1535900415432-74e69dd22e4e?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1569402928485-6b3576e3e87c?w=1920&q=85",
    color: "#7C2D12",
    email: "vochmal7@gmail.com",
    phone: "+234 803 630 5694",
  },
];
