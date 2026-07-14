import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye, Target, Star, CheckCircle, ArrowRight, ExternalLink,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About Vochmal Limited",
  description:
    "Learn about Vochmal Limited — our founding story, leadership team, vision, mission, core values, and company milestones since 2017.",
};

const milestones = [
  { year: "2017", title: "Company Founded", description: "Vochmal Limited was incorporated in Lagos on 5th October 2017 (RC 1442966), with an initial focus on construction and general procurement services." },
  { year: "2019", title: "Mining Division Launch", description: "Vochmal expanded into mineral resources with the establishment of its Mining division, securing the first operating licence in Nasarawa State." },
  { year: "2020", title: "Jos Office Opens", description: "Vochmal opened a permanent office in Jos, Plateau State, to support its growing portfolio of government infrastructure and water projects across the state." },
  { year: "2021", title: "Bakery Division Established", description: "The Bakery division was launched with a commercial production facility in Lagos, targeting both retail and institutional markets across the South-West." },
  { year: "2022", title: "Service Apartments Launch", description: "The Service Apartments division opened its first portfolio of furnished units in Lagos, targeting the corporate and expatriate market." },
  { year: "2023", title: "Oil & Gas Division", description: "Vochmal entered the energy sector with the registration of its Oil & Gas division." },
  { year: "2024", title: "Plateau State Infrastructure Delivery", description: "Vochmal Construction delivered multiple government infrastructure projects across Plateau State, including solar-powered borehole water schemes, classroom construction and renovation, and a rainwater harvesting programme serving 2,000 households." },
  { year: "2025", title: "RAAMP Bridge & University Extension", description: "Vochmal Construction commenced the 30-metre span Musidzu–Daawki bridge under the Rural Access and Agricultural Marketing Project (RAAMP) and completed the Department of Geology extension at the University of Jos." },
];

const certifications = [
  "ISO 9001:2015 — Quality Management Systems",
  "NAFDAC Registration — Bakery Products",
  "NUPRC Pre-Qualification — Oil & Gas",
  "NCDMB Compliance Certificate",
  "SON Registration — Mining Operations",
  "COREN Membership — Engineering Division",
  "CORBON Registration — Construction",
  "NAFDAC HACCP Certification — Bakery",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Vochmal Limited"
        subtitle="Our story, our values, and the people who make it happen."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Company Story */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Our Story
              </span>
              <h2 id="story-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                Built on Ambition, Guided by Integrity
              </h2>
              <div className="space-y-4 mt-6 text-gray-600 leading-relaxed">
                <p>
                  Vochmal Limited was incorporated on 5th October 2017 (RC 1442966), with an
                  initial focus on construction and general procurement services. From offices in
                  Ikeja, Lagos and Jos, Plateau State, the company has since grown into a
                  diversified enterprise with interests spanning construction, mining, bakery,
                  general procurement, service apartments, and oil & gas.
                </p>
                <p>
                  Our Construction division has delivered government infrastructure across Plateau
                  State — solar-powered borehole water schemes, classroom construction and
                  renovation for local education boards, a rainwater harvesting programme serving
                  2,000 households, structural extension works at the University of Jos, and bridge
                  construction under the Rural Access and Agricultural Marketing Project (RAAMP).
                </p>
                <p>
                  Vochmal Limited operates with transparency, professionalism, and a commitment to
                  quality — in every division, on every project, with every client.
                </p>
              </div>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85"
                  alt="Vochmal Limited corporate headquarters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white rounded-xl p-5 shadow-xl">
                <p className="font-display text-4xl font-bold text-gold">8+</p>
                <p className="text-sm text-white/70 mt-1">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-offwhite" aria-labelledby="vmv-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Vision, Mission & Core Values"
            subtitle="The principles that guide every decision, every project, and every relationship at Vochmal Limited."
            id="vmv-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "At Vochmal Ltd., our vision is to be the most respected and trusted name in construction, renowned for excellence in craftsmanship, innovation, and sustainable practices.",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "At Vochmal Ltd., our mission is to deliver exceptional construction services with an unwavering commitment to quality, safety, and innovation — exceeding client expectations through our skilled workforce, technology, and sustainable practices, and building lasting relationships with our clients, employees, and communities.",
              },
              {
                icon: Star,
                title: "Core Values",
                list: ["Innovation", "Excellence", "Integrity", "Professionalism", "Teamwork", "Social responsibility"],
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy rounded-2xl p-8 text-white flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                {item.text && <p className="text-white/75 text-sm leading-relaxed">{item.text}</p>}
                {item.list && (
                  <ul className="space-y-2 mt-1">
                    {item.list.map((v) => (
                      <li key={v} className="flex items-start gap-2 text-white/75 text-sm">
                        <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                        {v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white" aria-labelledby="team-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Leadership"
            title="Our Board of Directors"
            subtitle="The Board that provides strategic direction and governance oversight for Vochmal Limited."
            id="team-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              return (
                <Link
                  key={member.id}
                  href={`/about/team/${member.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col"
                  aria-label={`View profile: ${member.name}`}
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-12 bg-gold rounded-full mb-5 group-hover:w-full transition-all duration-500" aria-hidden="true" />

                  {/* Initials Avatar */}
                  <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <span className="font-display font-bold text-xl text-navy group-hover:text-gold transition-colors duration-300">
                      {initials}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mt-0.5">{member.title}</p>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-gold mt-5 pt-4 border-t border-gray-100 group-hover:gap-2.5 transition-all">
                    View Full Profile <ExternalLink size={13} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-offwhite" aria-labelledby="timeline-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Journey"
            title="Company Milestones"
            subtitle="Key moments in Vochmal's growth from a Lagos-based contractor to a nationally recognised diversified enterprise."
            id="timeline-heading"
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-px" aria-hidden="true" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-0 items-start md:items-center`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-1.5 md:mt-0" aria-hidden="true" />

                  {/* Content */}
                  <div className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="inline-block text-gold font-display font-bold text-lg mb-1">{m.year}</span>
                    <h3 className="font-display text-lg font-bold text-navy">{m.title}</h3>
                    <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{m.description}</p>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white" aria-labelledby="certs-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & Affiliations"
            subtitle="Vochmal Limited holds all relevant regulatory certifications and professional memberships across its six business divisions."
            id="certs-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-bluegrey rounded-lg px-4 py-3"
              >
                <CheckCircle size={16} className="text-gold shrink-0" aria-hidden="true" />
                <span className="text-navy text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Partner With Us"
        title="Partner With a Company You Can Trust"
        subtitle="Whether you need a contractor, supplier, accommodation, or strategic partner — Vochmal Limited is ready."
        buttons={[
          { label: "Contact Our Team", href: "/contact", variant: "primary", icon: "arrow" },
          { label: "Explore Our Divisions", href: "/#divisions", variant: "secondary" },
        ]}
      />
    </>
  );
}
