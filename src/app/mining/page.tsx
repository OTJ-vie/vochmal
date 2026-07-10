import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, TrendingUp, Leaf, FileCheck, Truck, Pickaxe } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Mining Division",
  description:
    "Vochmal Mining delivers responsible mineral extraction, site development, and export services across Nigeria with full NUPRC and SON compliance.",
};

const capabilities = [
  {
    icon: Pickaxe,
    title: "Mineral Extraction",
    description: "Systematic extraction of tin, columbite, lithium, and industrial minerals using modern, mechanised techniques across licensed concessions.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Licensing",
    description: "Full NUPRC mineral title acquisition, SON registration, Environmental Impact Assessment compliance, and ongoing regulatory engagement.",
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    description: "ISO 14001-aligned environmental management systems, land rehabilitation programmes, and zero-discharge wastewater treatment.",
  },
  {
    icon: Truck,
    title: "Export Services",
    description: "End-to-end export logistics including processing, certification, NEPC registration, and freight forwarding to international buyers.",
  },
  {
    icon: TrendingUp,
    title: "Site Development",
    description: "Full site development from exploration and geotechnical investigation through to infrastructure construction and operational commissioning.",
  },
  {
    icon: CheckCircle,
    title: "Equipment Operations",
    description: "Operation of excavators, bulldozers, crushers, screeners, and mineral washing plants with certified operators and preventive maintenance programmes.",
  },
];

const investmentHighlights = [
  "Proven mineral deposits with independent geological reports available under NDA",
  "NUPRC-licensed concessions in Nasarawa, Kaduna, and Plateau States",
  "ISO 14001-compliant environmental management framework",
  "Established offtake channels to international buyers in Europe and Asia",
  "On-site processing capability reducing export cost and increasing margin",
  "Experienced management team with 18+ years in Nigerian mining operations",
  "NEPC-registered for mineral export with validated customs compliance history",
  "Community Development Agreements in place with host communities",
];

const licenses = [
  "NUPRC Mineral Title — Nasarawa State (Tin / Columbite)",
  "NUPRC Mineral Title — Kaduna State (Lithium / Feldspar)",
  "SON Registration — Mineral Processing",
  "ISO 14001:2015 — Environmental Management",
  "NESREA Compliance Certificate",
  "NEPC Export Registration Certificate",
  "Community Development Agreement — Nasarawa Operational Area",
];

export default function MiningPage() {
  return (
    <>
      <PageHero
        title="Responsible Mining. Exceptional Results."
        subtitle="Technology-driven mineral extraction with full regulatory compliance and investor-grade transparency."
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
              Vochmal Mining operates strategic mineral extraction and processing activities across
              licensed concessions in Nasarawa, Kaduna, and Plateau States — three of Nigeria&rsquo;s
              most mineral-rich states. Our portfolio includes tin and columbite extraction in
              Nasarawa, lithium and feldspar exploration in Kaduna, and industrial mineral operations
              in Plateau State.
            </p>
            <p>
              We are committed to the responsible development of Nigeria&rsquo;s mineral resources.
              Our operations are governed by an ISO 14001-certified environmental management system,
              with land rehabilitation, community engagement, and zero-discharge wastewater treatment
              built into every operating site. We believe that responsible mining and commercial
              returns are not mutually exclusive — they are inseparable.
            </p>
            <p>
              For investors and joint venture partners, Vochmal Mining offers transparent access to
              verified geological data, audited operational records, and a management team with a
              proven track record of compliant, profitable mineral extraction.
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

      {/* Map Placeholder */}
      <section className="section-padding bg-navy" aria-labelledby="operations-map-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Footprint"
            title="Operational Areas"
            subtitle="Vochmal Mining holds active concessions and exploration licences across three Nigerian states."
            light
            id="operations-map-heading"
          />
          <div className="bg-navy-light rounded-2xl overflow-hidden border border-white/10 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={28} className="text-gold" aria-hidden="true" />
              </div>
              <p className="text-white font-display text-xl font-bold">Active Operations Map</p>
              <p className="text-white/60 text-sm mt-2">Nasarawa · Kaduna · Plateau</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["Nasarawa State — Tin & Columbite", "Kaduna State — Lithium & Feldspar", "Plateau State — Industrial Minerals"].map((loc) => (
              <div key={loc} className="bg-white/10 rounded-xl px-5 py-4 text-center border border-white/10">
                <CheckCircle size={18} className="text-gold mx-auto mb-2" aria-hidden="true" />
                <p className="text-white text-sm font-medium">{loc}</p>
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
                We offer structured investment and joint venture opportunities in proven Nigerian
                mineral concessions. Speak with our mining investment team to receive our
                confidential investor brief.
              </p>
              <ul className="mt-6 space-y-3">
                {investmentHighlights.map((h) => (
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

      {/* Compliance */}
      <section className="section-padding bg-bluegrey" aria-labelledby="compliance-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Regulatory Standing"
            title="Compliance & Licensing"
            subtitle="Vochmal Mining holds all required licences and certifications for mineral extraction, processing, and export operations in Nigeria."
            id="compliance-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {licenses.map((l) => (
              <div key={l} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Get Involved"
        title="Explore Partnership Opportunities"
        subtitle="Talk to our mining investment team about concession partnerships, joint ventures, and offtake agreements."
        buttons={[
          { label: "Submit Partnership Enquiry", href: "#partnership", variant: "primary", icon: "arrow" },
          { label: "Contact Our Team", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
