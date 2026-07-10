export interface BakeryProduct {
  id: string;
  name: string;
  category: "Breads" | "Pastries & Cakes" | "Confectionery" | "Catering Packs";
  description: string;
  availability: "Retail" | "Bulk" | "Both";
  image: string;
  highlight?: string;
}

export const bakeryProducts: BakeryProduct[] = [
  // Breads
  {
    id: "br1",
    name: "Artisan Sourdough Loaf",
    category: "Breads",
    description: "Slow-fermented sourdough with a crispy crust and an open, chewy crumb. Baked in a stone deck oven using our 7-year-old starter culture.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80",
    highlight: "Bestseller",
  },
  {
    id: "br2",
    name: "Whole Wheat Sandwich Loaf",
    category: "Breads",
    description: "A nutrient-rich whole wheat loaf with a soft, even crumb. Perfect for institutional catering, hotels, and household retail supply.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
  },
  {
    id: "br3",
    name: "Seeded Multigrain Roll",
    category: "Breads",
    description: "Individual rolls packed with sunflower seeds, sesame, linseed, and oats. A premium option for restaurant bread baskets and hotel breakfast service.",
    availability: "Bulk",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7e?w=400&q=80",
  },
  {
    id: "br4",
    name: "Nigerian Agege Bread",
    category: "Breads",
    description: "The iconic soft, pillowy Agege-style loaf beloved across Nigeria. Produced in high volumes for retail distribution and large-scale catering.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
    highlight: "High Volume",
  },
  // Pastries & Cakes
  {
    id: "pc1",
    name: "Butter Croissant",
    category: "Pastries & Cakes",
    description: "Classic French-style croissants laminated with 84% fat European-style butter. Flaky, buttery layers with a golden, caramelised exterior.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    highlight: "Premium",
  },
  {
    id: "pc2",
    name: "Victoria Sponge Layer Cake",
    category: "Pastries & Cakes",
    description: "A classic Victoria sponge with fresh cream and strawberry jam filling. Available in 6-inch, 8-inch, and 10-inch sizes for celebrations and catering.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
  },
  {
    id: "pc3",
    name: "Puff Pastry Samosa Pack",
    category: "Pastries & Cakes",
    description: "Crispy golden puff pastry filled with seasoned chicken or vegetables. A popular choice for catering packs, corporate events, and retail sale.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  },
  {
    id: "pc4",
    name: "Chocolate Ganache Tart",
    category: "Pastries & Cakes",
    description: "A shortcrust pastry shell filled with 70% dark chocolate ganache and finished with a dusting of fleur de sel. A premium dessert for hotels and fine dining.",
    availability: "Bulk",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80",
    highlight: "Chef's Choice",
  },
  // Confectionery
  {
    id: "cf1",
    name: "Chin-Chin (Honey & Sesame)",
    category: "Confectionery",
    description: "Traditional Nigerian chin-chin made with honey, toasted sesame seeds, and a hint of nutmeg. Packaged in retail-ready 250g and 500g resealable bags.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80",
    highlight: "Locally Inspired",
  },
  {
    id: "cf2",
    name: "Coconut Candy Drops",
    category: "Confectionery",
    description: "Artisan coconut candy made with freshly grated coconut, palm sugar, and vanilla. A nostalgic Nigerian treat available in bulk institutional supply.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?w=400&q=80",
  },
  {
    id: "cf3",
    name: "Chocolate Biscuit Balls",
    category: "Confectionery",
    description: "Rich chocolate biscuit balls rolled in desiccated coconut or crushed hazelnuts. A popular confectionery item for gifting, events, and retail display.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
  },
  {
    id: "cf4",
    name: "Peanut Brittle Slab",
    category: "Confectionery",
    description: "Crunchy caramelised peanut brittle made with locally sourced groundnuts and unrefined cane sugar. Available in slabs or pre-broken portions for retail and events.",
    availability: "Both",
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400&q=80",
  },
  // Catering Packs
  {
    id: "cp1",
    name: "Corporate Breakfast Pack (50 persons)",
    category: "Catering Packs",
    description: "A comprehensive breakfast pack for 50 persons including assorted pastries, sliced breads, chin-chin, and individual jam and butter portions. Packaged for delivery and self-service.",
    availability: "Bulk",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=80",
    highlight: "Corporate Favourite",
  },
  {
    id: "cp2",
    name: "Hotel Continental Pack (Daily Supply)",
    category: "Catering Packs",
    description: "A daily supply agreement for hotels including fresh croissants, sourdough slices, fruit Danish, and rolls. Baked fresh and delivered before 6:00 AM.",
    availability: "Bulk",
    image: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=400&q=80",
  },
  {
    id: "cp3",
    name: "Event Finger Food Pack (100 persons)",
    category: "Catering Packs",
    description: "A cocktail and event finger food pack for 100 guests including puff-puff, samosas, mini quiches, and assorted pastry bites. Delivered ready to serve.",
    availability: "Bulk",
    image: "https://images.unsplash.com/photo-1612487528505-d2338264c821?w=400&q=80",
  },
  {
    id: "cp4",
    name: "School Tuck Shop Pack (Weekly Supply)",
    category: "Catering Packs",
    description: "A weekly supply pack designed for school tuck shops and canteens including chin-chin, biscuit balls, small loaves, and individual snack packs. NAFDAC certified.",
    availability: "Bulk",
    image: "https://images.unsplash.com/photo-1548940740-204726a19be3?w=400&q=80",
    highlight: "NAFDAC Certified",
  },
];
