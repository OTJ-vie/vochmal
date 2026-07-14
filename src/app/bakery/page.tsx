import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import VideoModal from "@/components/ui/VideoModal";
import BulkOrderForm from "@/components/forms/BulkOrderForm";
import { bakeryProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Bakery Division",
  description:
    "Vochmal Bakery (Vochmal Foods) — a beloved bakery in Jos, Plateau State, serving freshly baked bread, snacks and pastries, and natural fruit drinks.",
};

type TabCategory = "Breads" | "Snacks & Pastries" | "Drinks & Beverages";

const whyChooseUs = [
  "Baked and prepared fresh every single day",
  "A full menu — bread, snacks, and natural drinks",
  "A trusted name for households across Jos",
  "Retail and bulk orders welcome",
];

const categories: TabCategory[] = ["Breads", "Snacks & Pastries", "Drinks & Beverages"];

export default function BakeryPage() {
  return (
    <>
      <PageHero
        title="Freshly Baked, Every Single Day"
        subtitle="Jos, Plateau State's home for fresh bread, snacks and pastries, and natural fruit drinks."
        image="/images/bakery/vochmal-bread-pack.jpg"
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
                A Jos Favourite for Fresh, Soft Bread
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vochmal Bakery, also known as Vochmal Foods, is a popular bakery in Jos,
                  Plateau State, famous for producing freshly baked, soft, and delicious everyday
                  bread — perfect for breakfast, sandwiches, and everyday meals. Alongside our
                  bread, we bake a full range of snacks and pastries — meat pies, chicken pies,
                  chin chin, doughnuts, and more — and prepare fresh natural drinks like zobo,
                  kunu, and tigernut juice in-house.
                </p>
                <p>
                  You&apos;ll find us on the Bukuru Bye-pass, beside Conoil Filling Station, Jos,
                  Plateau State, where we bake fresh every day for customers across the city.
                </p>
                <p>
                  We take both bulk and retail orders, and share our daily baking updates on the
                  Vochmal Foods Facebook page.
                </p>
                <p className="text-sm text-gray-500">
                  NAFDAC No: A8-113252L (Bread)
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/bakery/vochmal-products-hero.jpg"
                alt="Vochmal Foods products — bread, zobo, and chin-chin"
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
            subtitle="Fresh bread baked daily — available for retail purchase and bulk orders."
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

          <p className="text-center text-gray-500 text-sm">
            Coca-Cola, Fanta, Sprite, and other soft drinks are also available in-store.
          </p>
        </div>
      </section>

      {/* Video */}
      <VideoModal
        backgroundImage="/images/bakery/vochmal-slider.png"
        videoUrl="/videos/vochmal-bakery.mp4"
        title="See Vochmal Bakery in Action"
        subtitle="A look at our fresh bread, zobo, and chin-chin — made daily in Jos, Plateau State."
      />

      {/* Visit Us */}
      <section className="section-padding bg-navy" aria-labelledby="location-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Find Us"
            title="Visit Our Bakery"
            subtitle="Freshly baked bread, ready daily — come by or place an order."
            light
            id="location-heading"
          />
          <div className="max-w-xl mx-auto bg-white/10 rounded-xl p-6 text-center border border-white/10">
            <p className="font-display font-bold text-white text-lg flex items-center justify-center gap-2">
              <MapPin size={16} className="text-gold" aria-hidden="true" />
              Bukuru Bye-pass, beside Conoil Filling Station, Jos, Plateau State
            </p>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Follow the Vochmal Foods Facebook page for daily baking updates, and reach out for
              retail or bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white" aria-labelledby="quality-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Vochmal Bakery"
            title="Fresh, Soft, Everyday Bread"
            subtitle="Baked with care, every single day."
            id="quality-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((point) => (
              <div key={point} className="flex items-center gap-3 bg-offwhite rounded-lg px-4 py-3 border border-gray-100">
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{point}</span>
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
        eyebrow="Bulk Orders"
        title="Stock Up on Fresh Bread"
        subtitle="Shops, schools, events, and households across Jos — place a bulk order and we'll bake it fresh for you."
        buttons={[
          { label: "Place a Bulk Order", href: "#bulk-order", variant: "primary", icon: "arrow" },
          { label: "Contact Sales Team", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
