import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, TrendingUp, Leaf, FileCheck, Truck, Pickaxe, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import PartnershipForm from "@/components/forms/PartnershipForm";
import VideoGallery from "@/components/ui/VideoGallery";

export const metadata: Metadata = {
  title: "Mining Division",
  description:
    "Vochmal (Mines) Limited extracts tin, columbite, iron, monazite, zircon, lead, zinc ore, and lithium from operations based in Jos, Plateau State.",
};

const minerals = ["Tin", "Columbite", "Iron", "Monazite", "Zircon", "Lead", "Zinc Ore", "Lithium"];

const capabilities = [
  {
    icon: Pickaxe,
    title: "Mineral Extraction",
    description: "Extraction and processing of tin, columbite, iron, monazite, zircon, lead, zinc ore, and lithium.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Licensing",
    description: "Registered Nigerian mining company (RC 1442966) committed to mineral title, SON, and environmental compliance requirements.",
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    description: "Responsible handling of extraction sites with attention to environmental impact and site rehabilitation.",
  },
  {
    icon: Truck,
    title: "Export Services",
    description: "Processing and logistics support for mineral supply to buyers and processors.",
  },
  {
    icon: TrendingUp,
    title: "Site Development",
    description: "Site development from exploration through to operational extraction and processing.",
  },
  {
    icon: CheckCircle,
    title: "Equipment Operations",
    description: "On-site processing and handling equipment operated by an experienced team.",
  },
];

const whyPartner = [
  "Registered Nigerian mining company — RC 1442966",
  "Diverse mineral portfolio: tin, columbite, iron, monazite, zircon, lead, zinc ore, and lithium",
  "Two operational offices in Jos, Plateau State",
  "Open to investment, joint venture, and offtake discussions",
];

const certifications = [
  "NEPC Certified - Nigeria Export Promotion Council",
  "Mineral Processor Permit - Ministry of Mines and Steel Development, Plateau State",
  "License to possess or purchase minerals - Ministry of Solid Minerals Development, Nigeria Minerals and Mining Act",
  "PMBC/1044 - Ministry of Solid Minerals Development",
];

// const miningGalleryImages = [
//   { src: "/images/mining/vochmining-1.jpeg", alt: "Mining operations and mineral handling at Vochmal Mines" },
//   { src: "/images/mining/vochmining-2.jpeg", alt: "Ore stockpile and site logistics in mining operations" },
//   { src: "/images/mining/vochmining-3.jpeg", alt: "Field activity and mineral processing environment" },
//   { src: "/images/mining/vochmining-4.jpeg", alt: "Mineral loading and handling equipment on site" },
//   { src: "/images/mining/vochmining-5.jpeg", alt: "Operational mining site with personnel and equipment" },
//   { src: "/images/mining/vochmining-6.jpeg", alt: "Site inspection and processing activities" },
//   { src: "/images/mining/vochmining-7.jpeg", alt: "Mining materials and processing setup" },
//   { src: "/images/mining/vochmining-8.jpeg", alt: "Mineral processing and storage workflow" },
//   { src: "/images/mining/vochmining-9.jpeg", alt: "Mining operations in a well-organized processing area" },
//   { src: "/images/mining/vochmining-10.jpeg", alt: "Industrial mining operations and logistics" },
//   { src: "/images/mining/vochmining-11.jpeg", alt: "Mining site environment and materials handling" },
// ];

export default function MiningPage() {
  return (
    <>
      <PageHero
        title="Responsible Mining. Exceptional Results."
        subtitle="Vochmal (Mines) Limited — mineral extraction and processing based in Jos, Plateau State."
        image="/images/mining/mining-hero.jpeg"
        breadcrumbs={[{ label: "Mining" }]}
        overlay="heavy"
        textAlign="left"
      />

      {/* Overview */}
      <section className="section-padding bg-white" aria-labelledby="mining-overview-heading">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
            Division Overview
          </span>
          <h2 id="mining-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
            Mining Nigeria&rsquo;s Mineral Wealth — Responsibly
          </h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-left">
            <p>
              Vochmal (Mines) Limited (RC 1442966) extracts and processes tin, columbite, iron,
              monazite, zircon, lead, zinc ore, and lithium, operating from our head office at
              1 D. B. Zang Way, Jos, Plateau State, with a branch office at Mile 7, Jos.
            </p>
            <p>
              We are committed to the responsible development of Nigeria&rsquo;s mineral resources,
              with care for the communities and environments around our operations. We believe that
              responsible mining and commercial returns are not mutually exclusive.
            </p>
            <p>
              We welcome enquiries from investors, joint venture partners, and buyers interested in
              our mineral portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Mining Gallery */}
      {/* <section className="section-padding bg-offwhite" aria-labelledby="mining-gallery-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Gallery"
            title="Mining Operations in Focus"
            subtitle="A curated look at our operational environment, mineral handling, and processing activities."
            id="mining-gallery-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {miningGalleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "sm:col-span-2 sm:row-span-2" : index === 1 ? "sm:col-span-2 xl:col-span-1" : ""}`}
              >
                <div className="relative h-64 sm:h-72 xl:h-80 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">Vochmal Mines</p>
                    <p className="text-white text-sm mt-1">Operational view of our mining and processing environment</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Capabilities */}
      <section className="section-padding bg-white" aria-labelledby="capabilities-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Do"
            title="Operational Capabilities"
            subtitle="End-to-end mining capabilities from site development and extraction to processing and export."
            id="capabilities-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all group">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <cap.icon size={20} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{cap.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Video Gallery */}
      <section className="section-padding bg-offwhite" aria-labelledby="operations-video-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="See It For Yourself"
            title="Our Operations"
            subtitle="A look at mineral processing, sorting, and storage at Vochmal Mines."
            id="operations-video-heading"
          />
          <VideoGallery
            items={[
              { thumbnail: "/images/mining/vochmines-1-thumb.jpg", videoUrl: "/videos/vochmines-1.mp4", title: "Storage & Bagging" },
              { thumbnail: "/images/mining/vochmines-2-thumb.jpg", videoUrl: "/videos/vochmines-2.mp4", title: "Manual Sorting" },
              { thumbnail: "/images/mining/vochmines-3-thumb.jpg", videoUrl: "/videos/vochmines-3.mp4", title: "Ore Processing" },
              {thumbnail: "/images/mining/vochmines-4-thumb.png", videoUrl: "/videos/vochmines-4.mp4", title: "Mineral Bagging" },
            ]}
          />
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-navy" aria-labelledby="operations-map-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Footprint"
            title="Our Offices"
            subtitle="Vochmal (Mines) Limited operates from two locations in Jos, Plateau State."
            light
            id="operations-map-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Head Office", text: "1 D. B. Zang Way, Jos, Plateau State" },
              { label: "Branch Office", text: "No. 2 Anguwan Kare, NEPA, Mile 7, opposite NMDC Quarters, Jos, Plateau State" },
            ].map((office) => (
              <div key={office.label} className="bg-white/10 rounded-xl px-6 py-5 border border-white/10">
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MapPin size={14} aria-hidden="true" /> {office.label}
                </p>
                <p className="text-white text-sm">{office.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Partnership Form */}
      <section id="partnership" className="section-padding bg-white" aria-labelledby="invest-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Invest With Us
              </span>
              <h2 id="invest-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                Invest in Vochmal Mining
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                We&rsquo;re open to investment, joint venture, and offtake discussions. Speak with
                our team to learn more about our mineral portfolio and operations.
              </p>
              <ul className="mt-6 space-y-3">
                {whyPartner.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <PartnershipForm division="Mining" />
            </div>
          </div>
        </div>
      </section>

      {/* Minerals */}
      <section className="section-padding bg-bluegrey" aria-labelledby="minerals-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Minerals We Work With"
            subtitle="Vochmal (Mines) Limited extracts and processes the following minerals."
            id="minerals-heading"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {minerals.map((m) => (
              <div key={m} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-offwhite" aria-labelledby="certifications-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Credentials"
            title="Certifications & Compliance"
            subtitle="Vochmal (Mines) Limited is fully compliant with Nigerian mining regulations and environmental standards."
            id="certifications-heading"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {certifications.map((c) => (
              <li key={c} className="flex items-center bg-white rounded-lg px-4 py-3 text-sm text-gray-600">
                <CheckCircle size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        eyebrow="Get Involved"
        title="Explore Partnership Opportunities"
        subtitle="Talk to our team about joint ventures, offtake agreements, and investment opportunities."
        buttons={[
          { label: "Submit Partnership Enquiry", href: "#partnership", variant: "primary", icon: "arrow" },
          { label: "Contact Our Team", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
