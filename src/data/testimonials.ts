export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  division: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Vochmal Construction delivered our commercial complex six weeks ahead of schedule and within budget. The quality of workmanship was exceptional — every detail met our specification. They are now our preferred contractor for all future developments.",
    name: "Alhaji Sule Ibrahim",
    title: "Managing Director",
    company: "Sahara Properties Ltd",
    division: "Construction",
  },
  {
    id: "t2",
    quote:
      "Working with Vochmal Procurement transformed our supply chain. They sourced specialised oilfield equipment that three other vendors had failed to deliver, and they did it within the project timeline. Outstanding reliability.",
    name: "Tunde Fashola",
    title: "Head of Supply Chain",
    company: "Petrovance Nigeria Ltd",
    division: "Procurement",
  },
  {
    id: "t3",
    quote:
      "Our team stayed in Vochmal Service Apartments for a three-month project in Lagos. The facilities rivalled any five-star hotel but with the comfort and privacy of a home. Exceptional service and impeccable housekeeping throughout.",
    name: "Sarah Mitchell",
    title: "Project Lead",
    company: "Meridian Consulting (UK)",
    division: "Service Apartments",
  },
  {
    id: "t4",
    quote:
      "Vochmal Bakery supplies our hotel chain with freshly baked artisan bread and pastries every morning. Consistency, quality, and timely delivery have been flawless over 18 months of partnership. Our guests frequently compliment the bread.",
    name: "Mrs. Chioma Obi",
    title: "General Manager",
    company: "Grandeur Hotels & Suites",
    division: "Bakery",
  },
  {
    id: "t5",
    quote:
      "Vochmal's Oil & Gas team handled our pipeline inspection contract with the highest level of professionalism and HSE compliance I have seen from an indigenous Nigerian firm. Zero incidents, on-time delivery, and a brilliant technical team.",
    name: "Engr. Rotimi Adeyinka",
    title: "Operations Director",
    company: "Atlantic Midstream Services",
    division: "Oil & Gas",
  },
];
