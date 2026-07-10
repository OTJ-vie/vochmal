export interface Project {
  id: string;
  title: string;
  division: string;
  divisionSlug: string;
  location: string;
  year: string;
  category: "Commercial" | "Residential" | "Infrastructure" | "Industrial" | "Mining" | "Energy";
  description: string;
  image: string;
  status: "Completed" | "Ongoing";
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Eko Atlantic Commercial Tower",
    division: "Construction",
    divisionSlug: "construction",
    location: "Victoria Island, Lagos",
    year: "2023",
    category: "Commercial",
    description:
      "A 12-storey mixed-use commercial tower featuring Grade A office spaces, retail floors, and an underground car park. Delivered six weeks ahead of schedule.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    status: "Completed",
  },
  {
    id: "p2",
    title: "Kaduna Ring Road Phase II",
    division: "Construction",
    divisionSlug: "construction",
    location: "Kaduna State",
    year: "2022",
    category: "Infrastructure",
    description:
      "A 14.5 km dual carriageway with reinforced bridges, drainage systems, and street lighting infrastructure connecting key industrial zones.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    status: "Completed",
  },
  {
    id: "p3",
    title: "Greenview Estate Phase 1",
    division: "Construction",
    divisionSlug: "construction",
    location: "Lekki, Lagos",
    year: "2023",
    category: "Residential",
    description:
      "A gated estate of 48 luxury terrace homes with shared amenities including a clubhouse, swimming pool, and perimeter security.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    status: "Completed",
  },
  {
    id: "p4",
    title: "Nasarawa Mineral Processing Plant",
    division: "Mining",
    divisionSlug: "mining",
    location: "Nasarawa State",
    year: "2024",
    category: "Mining",
    description:
      "Full-cycle mineral processing facility for tin and columbite extraction with ISO 14001-compliant environmental controls and export logistics.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    status: "Ongoing",
  },
  {
    id: "p5",
    title: "Abuja Central Hospital Renovation",
    division: "Construction",
    divisionSlug: "construction",
    location: "FCT, Abuja",
    year: "2022",
    category: "Commercial",
    description:
      "Complete structural renovation and fit-out of a 200-bed hospital including theatre suites, ICU, and administrative wings to international healthcare standards.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    status: "Completed",
  },
  {
    id: "p6",
    title: "Trans-Delta Pipeline Integrity Project",
    division: "Oil & Gas",
    divisionSlug: "oil-and-gas",
    location: "Rivers State",
    year: "2024",
    category: "Energy",
    description:
      "Pipeline inspection, cathodic protection renewal, and integrity assessment across 48 km of transmission pipeline in the Niger Delta region.",
    image: "https://images.unsplash.com/photo-1569402928485-6b3576e3e87c?w=800&q=80",
    status: "Ongoing",
  },
  {
    id: "p7",
    title: "Warri Industrial Storage Terminal",
    division: "Construction",
    divisionSlug: "construction",
    location: "Warri, Delta State",
    year: "2023",
    category: "Industrial",
    description:
      "Construction of a 15,000 sqm warehousing and logistics terminal with container handling infrastructure and a diesel storage facility.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    status: "Completed",
  },
  {
    id: "p8",
    title: "Federal Government Staff Housing",
    division: "Construction",
    divisionSlug: "construction",
    location: "Abuja, FCT",
    year: "2021",
    category: "Residential",
    description:
      "Construction of 120 residential units across 3-bedroom and 4-bedroom configurations for the Federal Ministry of Works, including estate roads and utilities.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    status: "Completed",
  },
];

export const heroSlides = [
  {
    id: "s1",
    headline: "Engineering Excellence Across Nigeria",
    tagline: "From high-rise towers to critical infrastructure — we build with precision and pride.",
    cta: { label: "Explore Construction", href: "/construction" },
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1920&q=85",
  },
  {
    id: "s2",
    headline: "Responsible Mining, Exceptional Returns",
    tagline: "Technology-driven mineral extraction with full regulatory compliance.",
    cta: { label: "Explore Mining", href: "/mining" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
  },
  {
    id: "s3",
    headline: "Baked with Passion, Delivered with Pride",
    tagline: "Artisan quality at commercial scale — from our ovens to your table.",
    cta: { label: "Explore Bakery", href: "/bakery" },
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920&q=85",
  },
  {
    id: "s4",
    headline: "Procurement Without Compromise",
    tagline: "Efficient sourcing, reliable supply, and unmatched value for your operations.",
    cta: { label: "Explore Procurement", href: "/procurement" },
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85",
  },
  {
    id: "s5",
    headline: "Your Home Away from Home",
    tagline: "Luxury service apartments for the modern executive — Lagos and beyond.",
    cta: { label: "Explore Apartments", href: "/service-apartments" },
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85",
  },
  {
    id: "s6",
    headline: "Powering Nigeria's Energy Future",
    tagline: "End-to-end oil & gas services with NCDMB compliance and HSE excellence.",
    cta: { label: "Explore Oil & Gas", href: "/oil-and-gas" },
    image: "https://images.unsplash.com/photo-1569402928485-6b3576e3e87c?w=1920&q=85",
  },
];
