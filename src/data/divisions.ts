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
    email: "construction@vochmal.com",
    phone: "+234 801 234 5678",
  },
  {
    id: "mining",
    name: "Mining",
    slug: "/mining",
    shortDescription:
      "Responsible mineral extraction and site operations with full regulatory compliance and investor-grade transparency.",
    fullDescription:
      "Vochmal Mining operates responsible, technology-driven mineral extraction across strategic sites in Nigeria. We offer investor partnerships, export services, and environmental stewardship backed by full NUPRC and SON compliance.",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    color: "#5C4033",
    email: "mining@vochmal.com",
    phone: "+234 801 234 5679",
  },
  {
    id: "bakery",
    name: "Bakery",
    slug: "/bakery",
    shortDescription:
      "Artisan and commercial baked goods crafted with premium ingredients, distributed to retailers and institutions nationwide.",
    fullDescription:
      "Vochmal Bakery combines artisan craftsmanship with commercial-scale production to deliver consistently exceptional baked goods. From fresh breads and pastries to catering packs for large-scale events, we supply retail, hospitality, and institutional clients across Nigeria.",
    icon: "ChefHat",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920&q=85",
    color: "#92400E",
    email: "bakery@vochmal.com",
    phone: "+234 801 234 5680",
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
    email: "procurement@vochmal.com",
    phone: "+234 801 234 5681",
  },
  {
    id: "service-apartments",
    name: "Service Apartments",
    slug: "/service-apartments",
    shortDescription:
      "Luxury fully furnished short-stay and long-stay apartments offering the comfort of home with the convenience of a hotel.",
    fullDescription:
      "Vochmal Service Apartments delivers premium short-stay and long-stay accommodation for corporate travellers, expatriates, and discerning individuals. Every unit is fully furnished, serviced, and equipped with modern amenities.",
    icon: "Hotel",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85",
    color: "#14532D",
    email: "apartments@vochmal.com",
    phone: "+234 801 234 5682",
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
    email: "oilandgas@vochmal.com",
    phone: "+234 801 234 5683",
  },
];
