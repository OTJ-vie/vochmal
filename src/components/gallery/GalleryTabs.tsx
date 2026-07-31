"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryPortfolios } from "@/data/gallery";

const tabs = [{ slug: "all", label: "All" }, ...galleryPortfolios.map((portfolio) => ({ slug: portfolio.slug, label: portfolio.shortTitle }))];
const INITIAL_VISIBLE_IMAGES = 6;

export default function GalleryTabs() {
  const [selectedSlug, setSelectedSlug] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);
  const selectedPortfolio = galleryPortfolios.find((portfolio) => portfolio.slug === selectedSlug);

  const images = selectedSlug === "all"
    ? galleryPortfolios.flatMap((portfolio) => portfolio.images.map((image) => ({ image, title: portfolio.title })))
    : selectedPortfolio?.images.map((image) => ({ image, title: selectedPortfolio.title })) ?? [];

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_IMAGES);
  }, [selectedSlug]);

  const visibleImages = images.slice(0, visibleCount);
  const hasMoreImages = images.length > INITIAL_VISIBLE_IMAGES;
  const isExpanded = visibleCount >= images.length;

  return (
    <section className="section-padding bg-offwhite" aria-labelledby="gallery-tabs-heading">
      <div className="container-custom">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setSelectedSlug(tab.slug)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${selectedSlug === tab.slug ? "bg-gold text-white shadow-lg" : "bg-white text-navy border border-gray-200 hover:bg-bluegrey/80"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <SectionHeading
          eyebrow=""
          title={selectedSlug === "all" ? "All Image Collections" : selectedPortfolio?.title ?? "Gallery"}
          subtitle={selectedSlug === "all" ? "Browse images from every division." : selectedPortfolio?.description ?? ""}
          id="gallery-tabs-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {visibleImages.map((item) => (
            <div key={`${item.image}-${item.title}`} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {hasMoreImages && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => (count >= images.length ? INITIAL_VISIBLE_IMAGES : images.length))}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold/10"
            >
              {isExpanded ? (
                <>
                  <span>View less</span>
                  <ChevronUp size={16} className="text-gold" />
                </>
              ) : (
                <>
                  <span>View more</span>
                  <ChevronDown size={16} className="text-gold" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
