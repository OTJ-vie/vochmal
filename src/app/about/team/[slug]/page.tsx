import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle, Briefcase, GraduationCap,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { teamMembers } from "@/data/team";
import CTABanner from "@/components/ui/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: "Profile Not Found" };
  return {
    title: `${member.name} — ${member.title}`,
    description: member.bio,
  };
}

export default async function TeamProfilePage({ params }: Props) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16" aria-label={`${member.name} profile`}>
        <div className="container-custom">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm mb-8"
          >
            <ArrowLeft size={15} /> Back to About Us
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Avatar — initials only, no photo */}
            <div className="w-24 h-24 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center shrink-0">
              <span className="font-display text-3xl font-bold text-gold" aria-hidden="true">
                {initials}
              </span>
            </div>

            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                Leadership
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                {member.name}
              </h1>
              <p className="text-white/70 text-lg mt-1">{member.title}</p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                {member.division && member.divisionSlug && (
                  <Link
                    href={member.divisionSlug}
                    className="flex items-center gap-2 text-sm bg-white/10 hover:bg-gold/20 text-white/80 hover:text-gold px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Briefcase size={13} />
                    {member.division} Division
                  </Link>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex items-center gap-2 text-sm bg-white/10 hover:bg-[#0A66C2] text-white/80 hover:text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    <LinkedinIcon size={13} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Profile Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Full Bio */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-gold rounded-full" aria-hidden="true" />
                Professional Profile
              </h2>
              <div className="space-y-5">
                {member.fullBio.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Qualifications */}
              <div className="bg-offwhite rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display text-lg font-bold text-navy mb-4 flex items-center gap-2">
                  <GraduationCap size={18} className="text-gold" aria-hidden="true" />
                  Qualifications
                </h3>
                <ul className="space-y-2.5">
                  {member.qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas of Expertise */}
              <div className="bg-navy rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase size={18} className="text-gold" aria-hidden="true" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((e) => (
                    <span
                      key={e}
                      className="text-xs font-medium bg-white/10 text-white/85 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Division Link */}
              {member.division && member.divisionSlug && (
                <div className="bg-gold/10 rounded-2xl p-6 border border-gold/20">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.name.split(" ")[0]} leads the{" "}
                    <strong className="text-navy">{member.division} Division</strong> at Vochmal Limited.
                  </p>
                  <Link
                    href={member.divisionSlug}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold mt-3 hover:gap-3 transition-all"
                  >
                    Explore {member.division} <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="section-padding bg-offwhite" aria-labelledby="other-members-heading">
        <div className="container-custom">
          <h2 id="other-members-heading" className="font-display text-2xl font-bold text-navy mb-8">
            Other Leadership Team Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers
              .filter((m) => m.slug !== member.slug)
              .map((m) => {
                const ini = m.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
                return (
                  <Link
                    key={m.id}
                    href={`/about/team/${m.slug}`}
                    className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <span className="font-display font-bold text-navy group-hover:text-gold transition-colors text-sm">
                        {ini}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-bold text-navy text-sm group-hover:text-gold transition-colors truncate">
                        {m.name}
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5 truncate">{m.title}</p>
                    </div>
                    <ArrowRight size={15} className="shrink-0 text-gray-300 group-hover:text-gold transition-colors ml-auto" />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Get In Touch"
        title="Work With the Vochmal Team"
        subtitle="Speak with our team about your construction, mining, procurement, energy, or accommodation needs."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary", icon: "arrow" },
          { label: "Back to About Us", href: "/about", variant: "secondary" },
        ]}
      />
    </>
  );
}
