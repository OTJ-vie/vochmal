import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Globe, Award, Users, Layers, HeartHandshake, ArrowRight,
} from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import StatCounter from "@/components/home/StatCounter";
import DivisionsGrid from "@/components/home/DivisionsGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import NewsPreview from "@/components/home/NewsPreview";
import VideoModal from "@/components/ui/VideoModal";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Vochmal Limited — Diversified Excellence Across Nigeria",
  description:
    "Vochmal Limited is a leading Nigerian conglomerate delivering excellence across construction, mining, bakery, general procurement, service apartments, and oil & gas.",
  openGraph: {
    title: "Vochmal Limited — Diversified Excellence Across Nigeria",
    description:
      "A diversified Nigerian conglomerate with six business divisions operating at international standards.",
  },
};

const valueProps = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Over a decade of delivering complex projects across construction, energy, and supply chain sectors.",
    iconColor: "text-gold",
  },
  {
    icon: Globe,
    title: "Pan-Nigeria Presence",
    description:
      "Operations spanning Lagos, Abuja, Port Harcourt, Kaduna, Nasarawa, and the Niger Delta.",
    iconColor: "text-navy",
  },
  {
    icon: Shield,
    title: "International Standards",
    description:
      "ISO-certified processes, NAFDAC and NUPRC compliance, and NCDMB-aligned operations.",
    iconColor: "text-gold",
  },
  {
    icon: HeartHandshake,
    title: "Committed to Quality",
    description:
      "Every deliverable is governed by rigorous quality assurance protocols and client sign-off.",
    iconColor: "text-navy",
  },
  {
    icon: Layers,
    title: "Diverse Portfolio",
    description:
      "Six complementary divisions create cross-sector synergies that reduce risk and maximise value.",
    iconColor: "text-gold",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "Dedicated relationship managers, transparent reporting, and a commitment to on-time delivery.",
    iconColor: "text-navy",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Strip */}
      <section className="bg-navy section-padding" aria-labelledby="about-strip-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                About Vochmal
              </span>
              <h2
                id="about-strip-heading"
                className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Nigeria&rsquo;s Diversified Enterprise of the Modern Era
              </h2>
              <p className="text-white/70 mt-5 text-base leading-relaxed">
                Established in 2014, Vochmal Limited has grown into one of Nigeria&rsquo;s most
                dynamic diversified companies, operating across six strategic business divisions
                that collectively serve the construction, mining, food production, supply chain,
                hospitality, and energy sectors.
              </p>
              <p className="text-white/70 mt-4 text-base leading-relaxed">
                Our mission is simple: to deliver exceptional value to our clients, create
                sustainable livelihoods for our people, and build a company that Nigeria can be
                proud of on the world stage.
              </p>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <StatCounter />
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <DivisionsGrid />

      {/* Value Proposition */}
      <section className="section-padding bg-white" aria-labelledby="why-vochmal-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-gold/10">
              Why Choose Us
            </span>
            <h2
              id="why-vochmal-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy"
            >
              The Vochmal Advantage
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Six reasons why Nigeria&rsquo;s leading businesses, developers, and institutions
              choose Vochmal as their trusted partner.
            </p>
            <div className="h-0.5 w-16 bg-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((vp) => (
              <div key={vp.title} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-bluegrey flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors duration-300">
                  <vp.icon
                    size={22}
                    className={`${vp.iconColor} group-hover:text-gold transition-colors duration-300`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">{vp.title}</h3>
                  <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{vp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Video Section */}
      <VideoModal
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="See Vochmal in Action"
        subtitle="Watch how our teams across construction, mining, oil & gas, and bakery divisions deliver excellence every single day across Nigeria."
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Latest News */}
      <NewsPreview />

      {/* CTA Banner */}
      <CTABanner
        eyebrow="Work With Us"
        title="Ready to Work With Vochmal Limited?"
        subtitle="Speak with our team today about your construction, procurement, mining, oil & gas, or accommodation needs. We respond within 24 hours."
        buttons={[
          { label: "Get In Touch", href: "/contact", variant: "primary", icon: "arrow" },
          { label: "Download Company Profile", href: "#", variant: "secondary", icon: "download" },
        ]}
      />
    </>
  );
}
