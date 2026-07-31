import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryPortfolios, getGalleryPortfolio } from "@/data/gallery";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return galleryPortfolios.map((portfolio) => ({ slug: portfolio.slug }));
}

export default function GalleryPortfolioPage({ params }: { params: { slug: string } }) {
  const portfolio = getGalleryPortfolio(params.slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={portfolio.title}
        subtitle={portfolio.description}
        image={portfolio.coverImage}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }, { label: portfolio.shortTitle }]}
        overlay="heavy"
        textAlign="left"
      />

      <section className="section-padding bg-white" aria-labelledby="portfolio-highlights-heading">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-gold/10">
                Portfolio Highlights
              </span>
              <h2 id="portfolio-highlights-heading" className="font-display text-3xl font-bold text-navy leading-tight">
                {portfolio.title}
              </h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
              <ArrowLeft size={16} /> Back to all portfolios
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {portfolio.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-offwhite px-4 py-3">
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-sm text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite" aria-labelledby="portfolio-images-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Visual Collection"
            title={`Images from ${portfolio.shortTitle}`}
            subtitle="A closer look at the project environments, assets, and spaces that shape this division."
            id="portfolio-images-heading"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.images.map((image, index) => (
              <div key={image} className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={image}
                    alt={`${portfolio.title} image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
