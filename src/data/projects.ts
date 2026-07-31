export interface Project {
  id: string;
  title: string;
  division: string;
  divisionSlug: string;
  location: string;
  year: string;
  category: "Water Infrastructure" | "Education" | "Infrastructure" | "Industrial" | "Mining" | "Energy";
  description: string;
  image: string;
  gallery?: string[];
  status: "Completed" | "Ongoing";
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "RAAMP Bridge Construction, Musidzu–Daawki",
    division: "Construction",
    divisionSlug: "construction",
    location: "Kanke LGA, Plateau State",
    year: "2025",
    category: "Infrastructure",
    description:
      "Construction of a 30-metre span reinforced concrete bridge over the Musidzu–Daawki crossing under the Rural Access and Agricultural Marketing Project (RAAMP), improving rural connectivity in Kanke LGA.",
    image: "/images/projects/raamp-bridge-musidzu-daawki.jpg",
    gallery: [
      "/images/projects/gallery/raamp-bridge/bridge-site-excavation.jpg",
      "/images/projects/gallery/raamp-bridge/bridge-foundation-mountain.jpg",
      "/images/projects/gallery/raamp-bridge/bridge-deck-rebar-pour.jpg",
      "/images/projects/gallery/raamp-bridge/bridge-deck-completed-side.jpg",
    ],
    status: "Ongoing",
  },
  {
    id: "p2",
    title: "Solar-Powered Boreholes — Bokkos & Barkin Ladi",
    division: "Construction",
    divisionSlug: "construction",
    location: "Bokkos & Barkin Ladi LGA, Plateau State",
    year: "2024",
    category: "Water Infrastructure",
    description:
      "Drilling and installation of four solar-powered boreholes with elevated storage tanks for water supply, irrigation, and livestock across Bokkos and Barkin Ladi LGA under Plateau State's climate resilience programme.",
    image: "/images/projects/borehole-bokkos-barkinladi.jpg",
    gallery: [
      "/images/projects/gallery/borehole-bokkos-barkinladi/tower-1.jpg",
      "/images/projects/gallery/borehole-bokkos-barkinladi/tower-2.jpg",
      "/images/projects/gallery/borehole-bokkos-barkinladi/livestock-trough-1.jpg",
      "/images/projects/gallery/borehole-bokkos-barkinladi/livestock-trough-2.jpg",
    ],
    status: "Completed",
  },
  {
    id: "p3",
    title: "Extension of Department of Geology, University of Jos",
    division: "Construction",
    divisionSlug: "construction",
    location: "Naraguta Campus, University of Jos, Plateau State",
    year: "2024–2025",
    category: "Infrastructure",
    description:
      "Structural extension works (Lot 6) at the Department of Geology, University of Jos, Naraguta Campus, from foundation to structural completion.",
    image: "/images/projects/university-jos-geology-extension.jpg",
    gallery: [
      "/images/projects/gallery/university-jos-geology/material-delivery.jpg",
      "/images/projects/gallery/university-jos-geology/blockwork-progress.jpg",
      "/images/projects/gallery/university-jos-geology/roofing-in-progress.jpg",
    ],
    status: "Completed",
  },
  {
    id: "p4",
    title: "Solar-Powered Borehole Water Supply, Jos North",
    division: "Construction",
    divisionSlug: "construction",
    location: "Jos North LGA, Plateau State",
    year: "2024",
    category: "Water Infrastructure",
    description:
      "Drilling and commissioning of solar-powered boreholes for water supply in Jos North LGA on behalf of the Plateau State Ministry of Environment.",
    image: "/images/projects/borehole-jos-north.jpg",
    gallery: [
      "/images/projects/gallery/borehole-jos-north/solar-control-box.jpg",
      "/images/projects/gallery/borehole-jos-north/water-flow-test.jpg",
      "/images/projects/gallery/borehole-jos-north/flowing-taps.jpg",
      "/images/projects/gallery/borehole-jos-north/community-use.jpg",
    ],
    status: "Completed",
  },
  {
    id: "p5",
    title: "Rainwater Harvesting Project — 2,000 Households",
    division: "Construction",
    divisionSlug: "construction",
    location: "Plateau Club, Bingham University & Gura-Top, Plateau State",
    year: "2024",
    category: "Water Infrastructure",
    description:
      "Construction of rainwater harvesting storage installations serving 2,000 households across Plateau Club, Bingham University, and Gura-Top under the Community and Inclusive Green Growth Support (CIGS) initiative.",
    image: "/images/projects/rainwater-harvesting-plateau.jpg",
    gallery: [
      "/images/projects/gallery/rainwater-harvesting/tank-west-of-mines.jpg",
      "/images/projects/gallery/rainwater-harvesting/twin-tanks-ecwa-bishara.jpg",
      "/images/projects/gallery/rainwater-harvesting/tank-plateau-riders.jpg",
    ],
    status: "Completed",
  },
  {
    id: "p6",
    title: "Classroom Block Construction, GJSS Mushi",
    division: "Construction",
    divisionSlug: "construction",
    location: "Bokkos LGEA, Plateau State",
    year: "2024",
    category: "Education",
    description:
      "Construction of a new two-classroom block with veranda for Government Junior Secondary School, Mushi, delivered for Bokkos LGEA.",
    image: "/images/projects/classroom-construction-gjss-mushi.jpg",
    gallery: [
      "/images/projects/gallery/classroom-gjss-mushi/project-signboard.jpg",
      "/images/projects/gallery/classroom-gjss-mushi/foundation-block-delivery.jpg",
      "/images/projects/gallery/classroom-gjss-mushi/block-walls-progress.jpg",
      "/images/projects/gallery/classroom-gjss-mushi/roof-timber-framework.jpg",
    ],
    status: "Completed",
  },
  {
    id: "p7",
    title: "Classroom Renovation, LEA Gwaram",
    division: "Construction",
    divisionSlug: "construction",
    location: "Wase LGA, Plateau State",
    year: "2024",
    category: "Education",
    description:
      "Full structural renovation of a two-classroom block at LEA Gwaram, delivered for the Plateau State Universal Basic Education Board, Wase LGA.",
    image: "/images/projects/classroom-renovation-gwaram-wase.jpg",
    gallery: [
      "/images/projects/gallery/classroom-gwaram-wase/project-signboard.jpg",
      "/images/projects/gallery/classroom-gwaram-wase/before-dilapidated.jpg",
      "/images/projects/gallery/classroom-gwaram-wase/plastering-in-progress.jpg",
    ],
    status: "Completed",
  },
];

export const heroSlides = [
  {
    id: "s1",
    headline: "Engineering Excellence Across Nigeria",
    tagline: "From high-rise towers to critical infrastructure — we build with precision and pride.",
    cta: { label: "Explore Construction", href: "/construction" },
    image: "/images/constructions/construction-hero.jpg",
  },
  {
    id: "s2",
    headline: "Responsible Mining, Exceptional Returns",
    tagline: "Mineral extraction and processing based in Jos, Plateau State.",
    cta: { label: "Explore Mining", href: "/mining" },
    image: "/images/mining/mining-hero.jpeg",
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
    tagline: "Four beautifully furnished 2-bedroom apartments in Jos, Plateau State.",
    cta: { label: "Explore Apartments", href: "/service-apartments" },
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85",
  },
  {
    id: "s6",
    headline: "Powering Nigeria's Energy Future",
    tagline: "End-to-end oil & gas services with NCDMB compliance and HSE excellence.",
    cta: { label: "Explore Oil & Gas", href: "/oil-and-gas" },
    image: "/images/oil-and-gas/oilandgas-backgroundImage.jpg",
  },
];
