import type { Metadata } from "next";
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

export default function MiningPage() {
  return (
    <>
      <PageHero
        title="Responsible Mining. Exceptional Results."
        subtitle="Vochmal (Mines) Limited — mineral extraction and processing based in Jos, Plateau State."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
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

      {/* Capabilities */}
      <section className="section-padding bg-offwhite" aria-labelledby="capabilities-heading">
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
