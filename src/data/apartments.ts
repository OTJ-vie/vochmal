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

const unitOneImages = [
  "/images/apartments/premium-2bed-living-room-1.jpg",
  "/images/apartments/premium-2bed-living-room-2.jpg",
  "/images/apartments/premium-2bed-kitchen-dining.jpg",
];

const unitTwoImages = [
  "/images/apartments/premium-2bed-living-room-2.jpg",
  "/images/apartments/premium-2bed-kitchen-dining.jpg",
  "/images/apartments/premium-2bed-living-room-1.jpg",
];

const unitThreeImages = [
  "/images/apartments/premium-2bed-kitchen-dining.jpg",
  "/images/apartments/premium-2bed-living-room-1.jpg",
  "/images/apartments/premium-2bed-living-room-2.jpg",
];

const unitFourImages = [
  "/images/apartments/premium-2bed-living-room-1.jpg",
  "/images/apartments/premium-2bed-kitchen-dining.jpg",
  "/images/apartments/premium-2bed-living-room-2.jpg",
];

const premiumTwoBedAmenities = [
  "On-Site Customer Service", "WiFi", "24/7 Power Supply", "Trained Security & Guard Dogs", "CCTV Surveillance",
];

const premiumTwoBedDescription =
  "One of four beautifully furnished 2-bedroom apartments at Vochmal Homes (@vochmal_homes), blending comfort and affordability in a tranquil environment. Each unit offers two bedrooms, a living and dining area, and a fully furnished interior.";

export const apartments: ApartmentListing[] = [
  {
    id: "apt1",
    name: "2-Bedroom Apartment — Unit 1",
    type: "2 Bedroom",
    description: premiumTwoBedDescription,
    priceRange: "₦80,000",
    priceNote: "per night",
    images: unitOneImages,
    amenities: premiumTwoBedAmenities,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: "105 sqm",
  },
  {
    id: "apt2",
    name: "2-Bedroom Apartment — Unit 2",
    type: "2 Bedroom",
    description: premiumTwoBedDescription,
    priceRange: "₦80,000",
    priceNote: "per night",
    images: unitTwoImages,
    amenities: premiumTwoBedAmenities,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: "105 sqm",
  },
  {
    id: "apt3",
    name: "2-Bedroom Apartment — Unit 3",
    type: "2 Bedroom",
    description: premiumTwoBedDescription,
    priceRange: "₦80,000",
    priceNote: "per night",
    images: unitThreeImages,
    amenities: premiumTwoBedAmenities,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: "105 sqm",
  },
  {
    id: "apt4",
    name: "2-Bedroom Apartment — Unit 4",
    type: "2 Bedroom",
    description: premiumTwoBedDescription,
    priceRange: "₦80,000",
    priceNote: "per night",
    images: unitFourImages,
    amenities: premiumTwoBedAmenities,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: "105 sqm",
  },
];

export const apartmentFAQs = [
  {
    question: "What is included in the nightly rate?",
    answer:
      "The nightly rate of ₦80,000 includes on-site customer service, WiFi, 24/7 power supply, trained security with guard dogs on patrol at night, and CCTV surveillance.",
  },
  {
    question: "Where are the apartments located?",
    answer:
      "Vochmal Homes is located at Covenant Country Home, Gwot Rayfield, Jos, Plateau State — just after Rayfield Resort, in a quiet, tranquil setting.",
  },
  {
    question: "How many apartments are available?",
    answer:
      "We have four tastefully furnished 2-bedroom apartments. Contact us to check availability for your dates.",
  },
  {
    question: "How do I get updates or make an enquiry?",
    answer:
      "Follow @vochmal_homes on Instagram for updates, or complete the booking form below and our team will get back to you.",
  },
];
