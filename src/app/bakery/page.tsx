import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import BulkOrderForm from "@/components/forms/BulkOrderForm";
import { bakeryProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Bakery Division",
  description:
    "Vochmal Bakery delivers artisan and commercial baked goods at scale. NAFDAC certified. Supplying Lagos, Abuja, Port Harcourt and beyond.",
};

type TabCategory = "Breads" | "Pastries & Cakes" | "Confectionery" | "Catering Packs";

const distributionCities = [
  { city: "Lagos", icon: "🏙️", description: "Head office, primary production, and distribution hub" },
  { city: "Abuja", icon: "🏛️", description: "Distribution centre — hotels, supermarkets, institutions" },
  { city: "Port Harcourt", icon: "⚓", description: "Serving hospitality and corporate catering sector" },
  { city: "Ibadan", icon: "🌿", description: "Retail distribution and bulk supply partnerships" },
  { city: "Kano", icon: "🕌", description: "Northern Nigeria supply in active development" },
];

const qualityCerts = [
  "NAFDAC Registration — All baked product lines",
  "HACCP Certification — Food Safety Management",
  "ISO 22000 — Food Safety Management System",
  "NAFDAC GMP Certification",
  "Lagos State Ministry of Health Certification",
  "SON Certification — Baked Goods Standards",
];

const categories: TabCategory[] = ["Breads", "Pastries & Cakes", "Confectionery", "Catering Packs"];

export default function BakeryPage() {
  return (
    <>
      <PageHero
        title="Crafted with Passion, Delivered with Pride"
        subtitle="Artisan quality at commercial scale — from our stone-deck ovens to your table, every day."
        image="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920&q=85"
        breadcrumbs={[{ label: "Bakery" }]}
        overlay="heavy"
        textAlign="left"
      />

      {/* About */}
      <section className="section-padding bg-white" aria-labelledby="bakery-about-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Our Story
              </span>
              <h2 id="bakery-about-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                Where Tradition Meets Commercial Excellence
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vochmal Bakery was built on a belief that Nigerians deserve access to
                  consistently excellent, safe, and affordable baked goods — whether in a corner
                  shop in Surulere or on the breakfast buffet of a five-star hotel in Abuja.
                </p>
                <p>
                  Our production facility in Lagos operates two full production shifts daily,
                  combining stone-deck ovens for artisan bread with high-speed commercial lines for
                  packaged goods. Every recipe is developed by our in-house pastry chef team using
                  premium quality ingredients sourced from trusted local and international suppliers.
                </p>
                <p>
                  NAFDAC-registered across our full product range, HACCP-certified, and ISO
                  22000-aligned, Vochmal Bakery supplies retail chains, hotels, hospitals, school
                  canteens, and corporate catering operations across Nigeria.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85"
                alt="Vochmal Bakery artisan production"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogue — Static tabs rendered server-side, first tab shown */}
      <section className="section-padding bg-offwhite" aria-labelledby="products-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Products"
            title="Product Catalogue"
            subtitle="Browse our full range of baked goods across four product categories — available for retail purchase and bulk institutional supply."
            id="products-heading"
          />

          {categories.map((cat) => {
            const catProducts = bakeryProducts.filter((p) => p.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h3 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gold rounded-full" aria-hidden="true" />
                  {cat}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {catProducts.map((product) => (
                    <article key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {product.highlight && (
                          <span className="absolute top-2 left-2 bg-gold text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            {product.highlight}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-base font-bold text-navy">{product.name}</h4>
                        <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{product.description}</p>
                        <span
                          className={`inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                            product.availability === "Both"
                              ? "bg-green-100 text-green-700"
                              : product.availability === "Bulk"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {product.availability === "Both" ? "Retail & Bulk" : product.availability}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Distribution */}
      <section className="section-padding bg-navy" aria-labelledby="distribution-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Reach"
            title="Distribution & Supply"
            subtitle="Baked fresh daily and distributed to key cities across Nigeria through our dedicated cold-chain logistics network."
            light
            id="distribution-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {distributionCities.map((loc) => (
              <div key={loc.city} className="bg-white/10 rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
                <span className="text-3xl mb-3 block" aria-hidden="true">{loc.icon}</span>
                <p className="font-display font-bold text-white text-lg flex items-center justify-center gap-1">
                  <MapPin size={14} className="text-gold" aria-hidden="true" />
                  {loc.city}
                </p>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section-padding bg-white" aria-labelledby="quality-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Standards"
            title="Quality & Compliance"
            subtitle="Every Vochmal Bakery product is manufactured under rigorous food safety standards and certified by Nigeria's relevant regulatory bodies."
            id="quality-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityCerts.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-offwhite rounded-lg px-4 py-3 border border-gray-100">
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section id="bulk-order" className="section-padding bg-offwhite" aria-labelledby="bulk-heading">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Bulk & Institutional Orders"
            title="Place a Bulk Order"
            subtitle="Fill in your requirements below and our sales team will respond within 24 hours with pricing, minimum quantities, and delivery details."
            id="bulk-heading"
          />
          <BulkOrderForm />
        </div>
      </section>

      <CTABanner
        eyebrow="Supply Agreement"
        title="Supply Your Business with Premium Baked Goods"
        subtitle="Hotels, supermarkets, hospitals, schools, and corporate caterers — join our growing supply network today."
        buttons={[
          { label: "Place a Bulk Order", href: "#bulk-order", variant: "primary", icon: "arrow" },
          { label: "Contact Sales Team", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
