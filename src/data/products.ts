export interface BakeryProduct {
  id: string;
  name: string;
  category: "Breads" | "Snacks & Pastries" | "Drinks & Beverages";
  description: string;
  availability: "Retail" | "Bulk" | "Both";
  image: string;
  highlight?: string;
}

export const bakeryProducts: BakeryProduct[] = [
  // Breads
  {
    id: "br1",
    name: "White Bread | A8-113252L",
    category: "Breads",
    description: "Our white signature soft, fluffy loaf — baked fresh daily and perfect for breakfast, sandwiches, and everyday meals.",
    availability: "Both",
    image: "/images/bakery/white-bread.jpg",
    highlight: "Bestseller",
  },
  {
    id: "br2",
    name: "Coconut Bread | A8-113251L",
    category: "Breads",
    description: "Soft, fluffy loaf with a hint of coconut flavour — a sweet and satisfying everyday bread.",
    availability: "Both",
    image: "/images/bakery/vochmal-bread-pack.jpg",
  },
  {
    id: "br3",
    name: "Burger Bread | A8-113250L",
    category: "Breads",
    description: "A soft, freshly baked bread perfect for making juicy burgers.",
    availability: "Retail",
    image: "/images/bakery/Burger-bread.jpg",
  },
  {
    id: "br4",
    name: "Flat Bread | A8-113249L",
    category: "Breads",
    description: "A thin, flat bread — perfect for wraps, sandwiches, and everyday meals.",
    availability: "Retail",
    image: "/images/bakery/vochmal-bread-pack.jpg",
  },

  // Snacks & Pastries
  {
    id: "sp1",
    name: "Burger",
    category: "Snacks & Pastries",
    description: "A soft, freshly baked burger bun — a quick and filling snack.",
    availability: "Retail",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: "sp2",
    name: "Meat Pie",
    category: "Snacks & Pastries",
    description: "A Vochmal favourite — flaky pastry filled with seasoned minced meat.",
    availability: "Both",
    image: "/images/bakery/vochmal-meat-pie.jpg",
    highlight: "Popular",
  },
  {
    id: "sp3",
    name: "Chicken Pie",
    category: "Snacks & Pastries",
    description: "Flaky pastry filled with a savoury chicken filling.",
    availability: "Both",
    image: "/images/bakery/vochmal-chicken-pie.jpg",
  },
  {
    id: "sp4",
    name: "Buns | A8-106621L",
    category: "Snacks & Pastries",
    description: "Soft, lightly sweet fried buns — a classic everyday snack.",
    availability: "Retail",
    image: "/images/bakery/vochmal-buns.jpg",
  },
  {
    id: "sp5",
    name: "Fish Roll",
    category: "Snacks & Pastries",
    description: "Golden pastry rolled and filled with seasoned fish.",
    availability: "Retail",
    image: "/images/bakery/vochmal-fish-roll.jpg",
  },
  {
    id: "sp6",
    name: "Chin Chin",
    category: "Snacks & Pastries",
    description: "Crunchy, lightly sweetened fried snack — a Nigerian classic, sold by the pack.",
    availability: "Both",
    image: "/images/bakery/vochmal-chinchin.jpg",
    highlight: "Popular",
  },
  {
    id: "sp7",
    name: "Egg Roll",
    category: "Snacks & Pastries",
    description: "A boiled egg wrapped in soft, lightly sweet dough.",
    availability: "Retail",
    image: "/images/bakery/vochmal-egg-roll.jpg",
  },
  {
    id: "sp8",
    name: "Sliced Cake",
    category: "Snacks & Pastries",
    description: "Soft everyday cake, sliced and ready to enjoy.",
    availability: "Retail",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
  },
  {
    id: "sp9",
    name: "Doughnuts",
    category: "Snacks & Pastries",
    description: "Soft, sugar-dusted doughnuts, baked fresh daily.",
    availability: "Retail",
    image: "https://images.unsplash.com/photo-1624277904878-120554c46c2d?w=400&q=80",
  },
  // Drinks & Beverages
  {
    id: "db1",
    name: "Fruity Zobo",
    category: "Drinks & Beverages",
    description: "Our house zobo (hibiscus) drink blended with fruit for a refreshing everyday drink.",
    availability: "Retail",
    image: "/images/bakery/vochmal-zobo.jpg",
    highlight: "Popular",
  },
  {
    id: "db2",
    name: "Special Kunu",
    category: "Drinks & Beverages",
    description: "A smooth, naturally spiced kunu drink made in-house.",
    availability: "Retail",
    image: "/images/bakery/vochmal-kunu.jpg",
  },
  {
    id: "db3",
    name: "Carrot & Pineapple Juice",
    category: "Drinks & Beverages",
    description: "Freshly blended carrot and pineapple juice.",
    availability: "Retail",
    image: "https://images.unsplash.com/photo-1555940726-1c297abcc1f1?w=400&q=80",
  },
  {
    id: "db4",
    name: "Carrot, Watermelon & Pineapple Smoothie",
    category: "Drinks & Beverages",
    description: "A refreshing smoothie blend of carrot, watermelon, and pineapple.",
    availability: "Retail",
    image: "https://images.unsplash.com/photo-1567587407679-8187b3b972aa?w=400&q=80",
  },
  {
    id: "db5",
    name: "Tigernut Juice",
    category: "Drinks & Beverages",
    description: "Naturally sweet, creamy tigernut juice, made fresh — available in big and small sizes.",
    availability: "Retail",
    image: "/images/bakery/vochmal-tigernut.jpg",
  },
];
