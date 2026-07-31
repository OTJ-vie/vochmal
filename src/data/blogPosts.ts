export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  date: string;
  author: string;
  authorTitle: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "bp1",
    slug: "vochmal-construction-raamp-bridge-musidzu-daawki",
    title: "Vochmal Construction Progresses 30-Metre RAAMP Bridge in Kanke LGA, Plateau State",
    excerpt:
      "Construction of the Musidzu–Daawki bridge under the Rural Access and Agricultural Marketing Project is advancing in Kanke LGA, improving rural connectivity across Plateau State.",
    content: `Vochmal Limited's Construction division is progressing work on a 30-metre span reinforced concrete bridge over the Musidzu–Daawki crossing in Kanke LGA, Plateau State, delivered under the Rural Access and Agricultural Marketing Project (RAAMP).

The project involves excavation and foundation works, reinforced concrete deck casting, and abutment construction, with the site team working through Plateau State's rainy season to keep the programme on track.

Once complete, the bridge will restore year-round vehicular access across the Musidzu–Daawki crossing, supporting farmers and rural communities in moving produce and goods to market — a core objective of the RAAMP programme, which is jointly supported by the Federal Government of Nigeria and the World Bank.

The RAAMP bridge adds to Vochmal Construction's growing portfolio of government infrastructure delivery across Plateau State, which includes solar-powered borehole water schemes, classroom construction and renovation, and a structural extension at the University of Jos.`,
    category: "Construction",
    categoryColor: "#0D1B40",
    date: "June 2025",
    author: "Vochmal Communications",
    authorTitle: "Corporate Affairs",
    readTime: "3 min read",
    image: "/images/projects/raamp-bridge-musidzu-daawki.jpg",
    tags: ["Construction", "Plateau State", "RAAMP", "Infrastructure"],
  },
  {
    id: "bp3",
    slug: "vochmal-bakery-nafdac-certification",
    title: "Vochmal Bakery's Bread Achieves NAFDAC Certification",
    excerpt:
      "Vochmal Bakery's signature bread has received NAFDAC product registration, reinforcing the safety and quality behind the fresh bread baked daily in Jos, Plateau State.",
    content: `Vochmal Bakery (Vochmal Foods) has secured NAFDAC product registration (NAFDAC No: A8-113252L) for its signature bread, reinforcing the safety and quality standards behind the soft, freshly baked loaves produced daily at the bakery's home on the Bukuru Bye-pass, Jos, Plateau State.

The certification covers Vochmal's bread line — Special Bread, Big Loaf, and Small Bread — baked fresh every morning for retail customers and bulk orders across the city.

Alongside its bread, Vochmal Bakery produces a full range of snacks and pastries, including meat pies, chicken pies, chin chin, and doughnuts, as well as natural drinks made in-house — zobo, kunu, and tigernut juice.

Customers can place retail or bulk orders directly at the bakery, or follow the Vochmal Foods Facebook page for daily baking updates.`,
    category: "Bakery",
    categoryColor: "#92400E",
    date: "January 15, 2025",
    author: "Vochmal Communications",
    authorTitle: "Corporate Affairs",
    readTime: "2 min read",
    image: "/images/bakery/burgers-bread.jpg",
    tags: ["Bakery", "NAFDAC", "Jos", "Plateau State"],
  },
  {
    id: "bp5",
    slug: "vochmal-service-apartments-corporate-partnerships",
    title: "Vochmal Homes: Furnished 2-Bedroom Apartments Now Available in Jos",
    excerpt:
      "Vochmal Homes offers tastefully furnished 2-bedroom apartments in a tranquil setting in Jos, Plateau State, blending comfort and affordability.",
    content: `Vochmal Homes (@vochmal_homes) offers tastefully furnished 2-bedroom apartments at Covenant Country Home, Gwot Rayfield, Jos, Plateau State — just after Rayfield Resort, blending comfort and affordability in a tranquil environment.

Each unit comes fully furnished with two bedrooms and a living and dining area, and is backed by on-site customer service, WiFi, 24/7 power supply, trained security with guard dogs on night patrol, and CCTV surveillance.

Apartments are available at ₦80,000 per night. For availability and bookings, follow @vochmal_homes on Instagram or contact the division directly.`,
    category: "Apartments",
    categoryColor: "#14532D",
    date: "November 5, 2024",
    author: "Vochmal Communications",
    authorTitle: "Corporate Affairs",
    readTime: "2 min read",
    image: "/images/apartments/premium-2bed-living-room-1.jpg",
    tags: ["Service Apartments", "Jos", "Plateau State"],
  },
];
