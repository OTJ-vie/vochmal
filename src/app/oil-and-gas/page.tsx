import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Shield, Users, BarChart3, Globe } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import OilGasServices from "@/components/oil-and-gas/OilGasServices";
import PartnershipForm from "@/components/forms/PartnershipForm";
import VideoModal from "@/components/ui/VideoModal";
import { oilGasProjects } from "@/data/oilAndGas";

export const metadata: Metadata = {
  title: "Oil & Gas Division",
  description:
    "Vochmal Oil & Gas delivers upstream and downstream services, pipeline engineering, and energy consultancy with NCDMB compliance and HSE excellence.",
};

const whyVochmal = [
  {
    icon: Users,
    title: "Industry-Certified Personnel",
    description: "Our teams hold HSE and other professional certifications ensuring technical competence on every assignment.",
  },
  {
    icon: Shield,
    title: "HSE-Compliant Operations",
    description: "Zero LTI targets, daily toolbox talks, and incident management systems on all field operations.",
  },
  {
    icon: BarChart3,
    title: "End-to-End Project Support",
    description: "From feasibility through to completion, our teams support every phase of upstream, midstream, and downstream projects.",
  },
  {
    icon: Globe,
    title: "Nigerian Content Compliance",
    description: "Fully NCDMB-compliant with active participation strategies that maximise in-country value retention.",
  },
];

const certifications = [
  "Fire Safety Certification - Plateau State Fire Service",
  "Calibration Certificate & Report",
  "Leak Test Certificate",
  "NMDPRA/ROM/PL/ATC/23/108068 - Nigerian Midstream & Downstream Petroleum Regulatory Authority",
  "Air Pressure Test Certificate",
  "BN137488/2025 - Petroleum Storage and Sales License - Federal Republic of Nigeria Industry Act 2021",
  "Certificate of Clearance",
  // "DPR/NUPRC Pre-Qualification Certificate",
  // "NCDMB Nigerian Content Compliance Certificate",
  // "ISO 9001:2015 — Quality Management",
  // "ISO 14001:2015 — Environmental Management",
  // "OHSAS 18001 — Occupational Health & Safety",
  // "NEBOSH Certified — Site Safety Officers",
  // "IWCF Well Control Certification",
  // "OPITO BOSIET Certification",
];

const hseStats = [
  { value: "Zero LTI", label: "Target on All Field Operations" },
  { value: "40+", label: "Trained HSE Officers" },
  { value: "4x/year", label: "HSE Audits Per Division" },
];

export default function OilAndGasPage() {
  return (
    <>
      <PageHero
        title="Powering Nigeria's Energy Future with Expertise and Integrity"
        subtitle="End-to-end oil & gas services from upstream exploration to downstream distribution — delivered with NCDMB compliance and HSE excellence."
        image="/images/oil-and-gas/downstream-and-midstream.jpg"
        breadcrumbs={[{ label: "Oil & Gas" }]}
        overlay="heavy"
        textAlign="left"
      />

      {/* Overview */}
      <section className="section-padding bg-white" aria-labelledby="og-overview-heading">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
            Division Overview
          </span>
          <h2 id="og-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
            Nigeria&rsquo;s Energy Sector Deserves Indigenous Excellence
          </h2>
          <div className="mt-5 space-y-4 text-gray-600 leading-relaxed text-left">
            <p>
              Vochmal Oil & Gas was established to provide Nigeria&rsquo;s energy sector with a
              credible indigenous service company that can genuinely compete on technical competence,
              HSE standards, and operational reliability with any international operator. We serve
              oil and gas companies across the upstream, midstream, and downstream value chain.
            </p>
            <p>
              Our team of over 120 field personnel, engineers, and technical specialists has
              accumulated deep experience across Nigeria&rsquo;s onshore and offshore operating
              environments. Every deployment is backed by our documented HSE management system,
              zero-incident culture, and a commitment to growing Nigerian technical talent.
            </p>
            <p>
              As a fully NCDMB-compliant company, Vochmal Oil & Gas actively supports Nigeria&rsquo;s
              local content development agenda — providing employment, skills transfer, and supply
              chain development opportunities to Nigerians at every level of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-offwhite" aria-labelledby="og-services-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Services"
            title="What Vochmal Oil & Gas Delivers"
            subtitle="Six service lines covering the full oil and gas value chain — from wellhead to end user."
            id="og-services-heading"
          />
          <OilGasServices />
        </div>
      </section>

      {/* Why Vochmal */}
      <section className="section-padding bg-navy" aria-labelledby="og-why-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Edge"
            title="Why Vochmal in Oil & Gas"
            subtitle="Four defining strengths that set Vochmal apart in Nigeria's competitive energy services market."
            light
            id="og-why-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVochmal.map((w) => (
              <div key={w.title} className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <w.icon size={22} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-bold text-white">{w.title}</h3>
                <p className="text-white/65 text-sm mt-2 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white" aria-labelledby="og-certs-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Credentials"
            title="Certifications & Regulatory Compliance"
            subtitle="Vochmal Oil & Gas holds all required industry certifications, safety accreditations, and NMDPRA registrations."
            id="og-certs-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-bluegrey rounded-lg px-4 py-3">
                <CheckCircle size={15} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="section-padding bg-offwhite" aria-labelledby="og-projects-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Track Record"
            title="Projects & Field Operations"
            subtitle="A selection of completed and ongoing field operations across Nigeria's energy sector."
            id="og-projects-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oilGasProjects.map((project) => (
              <article key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">{project.year}</span>
                  <h3 className="font-display text-base font-bold text-navy mt-1">{project.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{project.location}</p>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoModal
        backgroundImage="/images/oil-and-gas/oilandgas-backgroundImage.jpg"
        videoUrl="?"
        title="Vochmal Oil & Gas — Field Operations"
        subtitle="See our teams in action across upstream, pipeline, and downstream operations in Nigeria."
      />

      {/* HSE Commitment */}
      <section className="section-padding bg-navy" aria-labelledby="hse-heading">
        <div className="container-custom text-center">
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/20">
            HSE Commitment
          </span>
          <h2 id="hse-heading" className="font-display text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Health, Safety & Environment is Non-Negotiable
          </h2>
          <p className="text-white/70 mt-5 max-w-2xl mx-auto leading-relaxed">
            At Vochmal Oil & Gas, safety is not a compliance checkbox — it is a core operating
            value embedded in our culture, systems, and daily practice. Every field deployment is
            governed by a documented HSE Management System, risk assessments, and emergency
            response procedures. Our leadership team reviews safety performance weekly, and every
            near-miss is treated as a learning opportunity.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            {hseStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                <p className="text-white/65 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership" className="section-padding bg-white" aria-labelledby="og-partnership-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Work With Us
              </span>
              <h2 id="og-partnership-heading" className="font-display text-3xl font-bold text-navy leading-tight">
                Discuss Your Energy Project
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Whether you are an operator, contractor, supplier, or consultant, we welcome
                conversations about new project opportunities in Nigeria&rsquo;s energy sector.
              </p>
            </div>
            <div className="lg:col-span-3">
              <PartnershipForm division="Oil & Gas" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Start a Conversation"
        title="Discuss Your Energy Project with Vochmal"
        subtitle="Our oil & gas team is ready to respond within 48 hours to all qualified project enquiries."
        buttons={[
          { label: "Submit Project Enquiry", href: "#partnership", variant: "primary", icon: "arrow" },
          { label: "Contact Head Office", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
