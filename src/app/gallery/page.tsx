import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryTabs from "@/components/gallery/GalleryTabs";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Vochmal Limited’s portfolio galleries across construction, mining, bakery, procurement, service apartments, and oil & gas.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio Gallery"
        subtitle="Explore a curated collection of visuals from our six business specialisations and the work we deliver across Nigeria."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=85"
        breadcrumbs={[{ label: "Gallery" }]}
        overlay="heavy"
        textAlign="left"
      />

      <section className="section-padding bg-white" aria-labelledby="gallery-overview-heading">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
            Portfolio Collections
          </span>
          <h2 id="gallery-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
            A visual journey through Vochmal’s six core areas of specialisation
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed">
            Select one of the tabs below to view the image collection for any of our divisions.
          </p>
        </div>
      </section>

      <GalleryTabs />
    </>
  );
}
