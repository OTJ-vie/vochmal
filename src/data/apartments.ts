export interface Amenity {
  icon: string;
  label: string;
}

export interface ApartmentListing {
  id: string;
  name: string;
  type: string;
  description: string;
  priceRange: string;
  priceNote: string;
  images: string[];
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  badge?: string;
  /** Set to false to hide this listing from the frontend without deleting it (e.g. not yet backed by real photos/pricing). */
  active?: boolean;
}

export const apartments: ApartmentListing[] = [
  {
    id: "apt1",
    name: "Standard Studio Suite",
    type: "Studio",
    description:
      "A beautifully appointed studio suite designed for the business professional on a short-stay assignment. Features an open-plan living and sleeping area with a fully equipped kitchenette, a premium en-suite bathroom, and a dedicated work desk with high-speed fibre internet.",
    priceRange: "₦45,000 – ₦55,000",
    priceNote: "per night (minimum 3-night stay)",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    ],
    amenities: ["WiFi", "Air Conditioning", "Smart TV", "Kitchenette", "Daily Housekeeping", "24/7 Security"],
    maxGuests: 2,
    bedrooms: 0,
    bathrooms: 1,
    area: "38 sqm",
    badge: "Best Value",
    active: false,
  },
  {
    id: "apt2",
    name: "Executive One-Bedroom",
    type: "1 Bedroom",
    description:
      "Ideal for extended business stays, the Executive One-Bedroom apartment offers a generous separate bedroom with a king-size bed, a spacious living and dining area, and a fully fitted kitchen. Perfect for executives who demand the comfort of home with hotel-quality service.",
    priceRange: "₦75,000 – ₦95,000",
    priceNote: "per night (minimum 3-night stay)",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
    amenities: ["WiFi", "Air Conditioning", "Smart TV", "Full Kitchen", "Daily Housekeeping", "24/7 Security", "Parking"],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: "65 sqm",
    badge: "Most Popular",
    active: false,
  },
  {
    id: "apt3",
    name: "Premium Two-Bedroom",
    type: "2 Bedroom",
    description:
      "Designed for families or colleagues travelling together, the Premium Two-Bedroom apartment provides two generously sized bedrooms — each with en-suite bathrooms — alongside a large open-plan living and dining space, a fully equipped kitchen, and a private balcony overlooking the city.",
    priceRange: "₦120,000 – ₦150,000",
    priceNote: "per night (minimum 5-night stay)",
    images: [
      "/images/apartments/premium-2bed-living-room-1.jpg",
      "/images/apartments/premium-2bed-living-room-2.jpg",
      "/images/apartments/premium-2bed-kitchen-dining.jpg",
    ],
    amenities: [
      "WiFi", "Air Conditioning", "Smart TV", "Full Kitchen", "Daily Housekeeping",
      "24/7 Security", "Parking", "Balcony", "Gym Access", "Swimming Pool",
    ],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: "105 sqm",
  },
  {
    id: "apt4",
    name: "Corporate Three-Bedroom Penthouse",
    type: "3 Bedroom Penthouse",
    description:
      "The ultimate in executive accommodation, the Corporate Penthouse occupies the top floor and features three luxuriously appointed bedrooms, a panoramic rooftop terrace, a professional-grade kitchen, a home cinema system, and a private dining room suitable for in-residence business entertaining.",
    priceRange: "₦220,000 – ₦280,000",
    priceNote: "per night (minimum 7-night stay)",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    ],
    amenities: [
      "WiFi", "Air Conditioning", "Home Cinema", "Professional Kitchen", "Daily Housekeeping",
      "24/7 Concierge", "Private Parking x2", "Rooftop Terrace", "Gym Access", "Swimming Pool", "Smart Home System",
    ],
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    area: "210 sqm",
    badge: "Premium",
    active: false,
  },
];

export const apartmentFAQs = [
  {
    question: "What is included in the nightly rate?",
    answer:
      "All nightly rates include daily housekeeping, 24/7 security, high-speed WiFi, 24-hour backup power supply, and water supply. Parking is included in two-bedroom and penthouse units.",
  },
  {
    question: "What is the minimum length of stay?",
    answer:
      "Studio and one-bedroom units require a minimum 3-night stay. Two-bedroom apartments require a minimum 5-night stay. The penthouse requires a minimum 7-night stay. Monthly rates are available on request.",
  },
  {
    question: "Is airport pickup available?",
    answer:
      "Yes. We offer airport pickup and drop-off services for all guests upon request. Charges apply based on the airport and vehicle type. Please include your request in the booking form.",
  },
  {
    question: "Are corporate billing and invoicing available?",
    answer:
      "Absolutely. We offer direct corporate billing with NET 30 payment terms for verified corporate accounts. Please contact our corporate team to set up a billing account prior to your first stay.",
  },
  {
    question: "Can I request a specific floor or view?",
    answer:
      "We will always try to accommodate floor and view preferences. Please note these in the Special Requests field of the booking form. Specific assignments are subject to availability.",
  },
  {
    question: "Is there an on-site laundry service?",
    answer:
      "Yes. A full laundry and dry-cleaning service is available on-site. Turnaround time is typically 24 hours. Same-day service is available at an additional charge.",
  },
  {
    question: "Are pets permitted?",
    answer:
      "Unfortunately we do not permit pets in any of our serviced apartment units at this time. We apologise for any inconvenience.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made 72 hours or more before check-in receive a full refund. Cancellations within 48–72 hours forfeit 50% of the total booking value. Cancellations within 48 hours are non-refundable. Emergency exceptions are considered on a case-by-case basis.",
  },
];
