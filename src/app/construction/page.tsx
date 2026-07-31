import type { Metadata } from "next";
import {
  Building2, Landmark, Home, Road, ClipboardList, Paintbrush,
  HardHat, Wrench, Clock, Shield, CheckCircle,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import ProjectGallery from "@/components/construction/ProjectGallery";

export const metadata: Metadata = {
  title: "Construction Division",
  description:
    "Vochmal Construction delivers world-class civil engineering, commercial and residential building projects, and infrastructure works across Nigeria.",
};

const services = [
  {
    icon: Building2,
    title: "Civil Engineering",
    description:
      "Comprehensive civil engineering works including site preparation, drainage design, foundation engineering, and structural works for commercial and industrial developments.",
  },
  {
    icon: Landmark,
    title: "Commercial Construction",
    description:
      "Grade A office towers, retail complexes, warehousing, industrial facilities, and mixed-use developments delivered to the highest specification.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Luxury housing estates, gated communities, affordable housing schemes, and bespoke residential construction for discerning individual clients.",
  },
  {
    icon: Road,
    title: "Roads & Infrastructure",
    description:
      "Dual carriageways, access roads, bridge construction, culverts, street lighting, and ancillary public infrastructure for government and private clients.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "End-to-end construction project management from pre-contract planning through to practical completion and handover, with rigorous programme and cost control.",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Fit-Out",
    description:
      "Complete interior fit-out, phased renovation, and building upgrades for commercial tenants, hotel operators, hospitals, and government facilities.",
  },
];

const whyUs = [
  {
    icon: HardHat,
    title: "Certified Engineers",
    description: "COREN-registered civil and structural engineers with track records across Nigeria's most demanding projects.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "A fleet of excavators, cranes, compactors, and specialist machinery maintained to the highest operational standards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Our programme management approach has delivered over 85% of projects on or ahead of schedule over the past five years.",
  },
  {
    icon: Shield,
    title: "Safety-First Culture",
    description: "Zero-incident targets, daily toolbox talks, PPE compliance, and a dedicated HSE team on every active site.",
  },
];

const processSteps = [
  { step: "01", title: "Initial Consultation", description: "We meet with you to understand your project brief, scope, budget, and timeline requirements." },
  { step: "02", title: "Site Assessment", description: "Our engineers conduct a thorough site survey, geotechnical review, and regulatory pre-assessment." },
  { step: "03", title: "Design & Planning", description: "Detailed architectural and engineering drawings, BoQ preparation, and programme development." },
  { step: "04", title: "Construction", description: "Full mobilisation of our team, regular client progress reports, and strict quality and safety monitoring." },
  { step: "05", title: "Handover", description: "Snagging inspections, defects liability management, and formal project handover with all documentation." },
];

const certifications = [
  "COREN — Council for the Regulation of Engineering in Nigeria",
  "CORBON — Construction Regulation Board of Nigeria",
  "ISO 9001:2015 Quality Management",
  "NSE — Nigerian Society of Engineers Member",
  "NIOB — Nigerian Institute of Building Member",
  "PENCOM Compliance Certificate",
];

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        title="Building the Future, One Project at a Time"
        subtitle="Civil engineering excellence, commercial construction, and infrastructure delivery across Nigeria."
        image="/images/constructions/construction-hero.jpg"
        breadcrumbs={[{ label: "Construction" }]}
        overlay="heavy"
        textAlign="left"
      />

      {/* Services */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Our Construction Services"
            subtitle="From groundbreaking to ribbon-cutting, Vochmal Construction covers the full spectrum of construction disciplines."
            id="services-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-offwhite rounded-xl p-7 border border-gray-100 hover:border-gold/40 transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                  <s.icon size={20} className="text-navy group-hover:text-gold transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-navy" aria-labelledby="why-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Edge"
            title="Why Choose Vochmal Construction"
            subtitle="Four pillars that distinguish Vochmal Construction from the competition."
            light
            id="why-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <w.icon size={24} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{w.title}</h3>
                <p className="text-white/65 text-sm mt-2 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-offwhite" aria-labelledby="portfolio-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Construction Project Portfolio"
            subtitle="Browse completed and ongoing projects across commercial, residential, and infrastructure categories."
            id="portfolio-heading"
          />
          <ProjectGallery />
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white" aria-labelledby="process-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Construction Process"
            subtitle="A disciplined five-stage process that ensures every project is delivered safely, on time, and to specification."
            id="process-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center px-4">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-0 h-px bg-gold/30" aria-hidden="true" />
                )}
                <div className="w-12 h-12 rounded-full bg-gold text-white font-display font-bold text-lg flex items-center justify-center shrink-0 z-10 relative">
                  {step.step}
                </div>
                <h3 className="font-display text-base font-bold text-navy mt-4">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-bluegrey" aria-labelledby="certs-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & Professional Memberships"
            id="certs-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Start Your Project"
        title="Ready to Start Your Construction Project?"
        subtitle="Tell us about your project. Our team will conduct a free preliminary assessment and provide a detailed proposal."
        buttons={[
          { label: "Request a Site Visit", href: "/contact", variant: "primary", icon: "arrow" },
          { label: "View Our Portfolio", href: "#portfolio-heading", variant: "secondary" },
        ]}
      />
    </>
  );
}
