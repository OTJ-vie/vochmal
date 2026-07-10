import type { Metadata } from "next";
import { Package, Boxes, Users, Truck, Ship, FileSignature, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import VendorForm from "@/components/forms/VendorForm";
import RFQForm from "@/components/forms/RFQForm";

export const metadata: Metadata = {
  title: "General Procurement Services",
  description:
    "Vochmal General Procurement Services delivers end-to-end supply chain solutions including equipment sourcing, vendor management, logistics, and contract management.",
};

const services = [
  {
    icon: Package,
    title: "Equipment Procurement",
    description: "Sourcing and delivery of specialised industrial, construction, and oilfield equipment from verified international and local suppliers.",
  },
  {
    icon: Boxes,
    title: "Consumables Supply",
    description: "Reliable supply of office consumables, safety materials, PPE, chemicals, and site consumables for operations of all sizes.",
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "End-to-end vendor qualification, performance monitoring, and supply base rationalisation to reduce cost and supply chain risk.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Last-mile delivery, fleet management, haulage coordination, and warehousing logistics across Nigeria's major commercial cities.",
  },
  {
    icon: Ship,
    title: "Import & Customs",
    description: "Clearing and forwarding, Form M processing, SON conformity assessment, and comprehensive import logistics management.",
  },
  {
    icon: FileSignature,
    title: "Contract Management",
    description: "Framework agreement development, supplier contract negotiation, purchase order administration, and spend analytics reporting.",
  },
];

const processSteps = [
  { step: "01", title: "Submit RFQ", description: "You submit a Request for Quotation detailing the items, quantity, and delivery requirements." },
  { step: "02", title: "Evaluation", description: "Our sourcing team evaluates requirements, identifies qualified suppliers, and requests competitive bids." },
  { step: "03", title: "Sourcing & Negotiation", description: "We negotiate the best pricing, terms, and delivery timelines on your behalf." },
  { step: "04", title: "Delivery & Sign-Off", description: "Goods are delivered to your specified location and verified against the purchase order before sign-off." },
];

const sectors = [
  "Government & Public Sector",
  "Oil & Gas Operators",
  "FMCG & Consumer Goods",
  "Healthcare & Pharmaceuticals",
  "Education & Institutions",
  "Construction & Real Estate",
];

export default function ProcurementPage() {
  return (
    <>
      <PageHero
        title="Efficient Sourcing. Reliable Supply. Unmatched Value."
        subtitle="End-to-end procurement management for Nigeria's most demanding operations."
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85"
        breadcrumbs={[{ label: "Procurement" }]}
        overlay="heavy"
        textAlign="left"
      />

      {/* Services */}
      <section className="section-padding bg-white" aria-labelledby="proc-services-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Do"
            title="Procurement Services"
            subtitle="Six core service areas that cover the full lifecycle of your supply chain requirements."
            id="proc-services-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-offwhite rounded-xl p-7 border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all group">
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

      {/* How It Works */}
      <section className="section-padding bg-navy" aria-labelledby="proc-process-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
            subtitle="A transparent, four-step procurement process designed for speed, accountability, and value."
            light
            id="proc-process-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-gold text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="text-white/65 text-sm mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="section-padding bg-offwhite" aria-labelledby="sectors-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Clients"
            title="Sectors We Serve"
            subtitle="Vochmal Procurement serves clients across Nigeria's most strategically important sectors."
            id="sectors-heading"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector) => (
              <div key={sector} className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all">
                <CheckCircle size={20} className="text-gold mx-auto mb-3" aria-hidden="true" />
                <p className="text-navy text-sm font-semibold leading-snug">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Registration */}
      <section id="vendor-registration" className="section-padding bg-white" aria-labelledby="vendor-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Become a Supplier
              </span>
              <h2 id="vendor-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                Register as a Vendor
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Join Vochmal&rsquo;s approved vendor database and gain access to procurement
                opportunities across all six of our business divisions. Our vendor registration
                process is simple, transparent, and completed within 5 business days.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Access to RFQ invitations across all Vochmal divisions",
                  "Inclusion in Vochmal's approved supplier list",
                  "Dedicated vendor relationship management",
                  "Prompt payment terms on all approved purchase orders",
                  "Priority consideration for framework agreements",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <VendorForm />
          </div>
        </div>
      </section>

      {/* RFQ Form */}
      <section id="rfq" className="section-padding bg-offwhite" aria-labelledby="rfq-heading">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Request a Quotation"
            title="Submit Your RFQ"
            subtitle="Tell us what you need. Our sourcing team will respond with a competitive quotation within 48 hours."
            id="rfq-heading"
          />
          <RFQForm />
        </div>
      </section>

      <CTABanner
        eyebrow="Get a Quote"
        title="Submit Your RFQ Today"
        subtitle="Whether you need one item or a full category supply agreement, Vochmal Procurement has the network and expertise to deliver."
        buttons={[
          { label: "Submit an RFQ", href: "#rfq", variant: "primary", icon: "arrow" },
          { label: "Register as a Vendor", href: "#vendor-registration", variant: "secondary" },
        ]}
      />
    </>
  );
}
