import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CheckCircle, Clock, PackageSearch, Shield } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import { clients } from "@/data/clients";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return clients.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const client = clients.find((c) => c.id === id);
  if (!client) return { title: "Client Not Found" };
  return {
    title: `${client.name} — Client Projects`,
    description: `${client.name} projects and engagement with Vochmal Limited's ${client.division} division.`,
  };
}

const divisionIcons: Record<string, typeof Building2> = {
  construction: Building2,
  "oil-and-gas": Shield,
  procurement: PackageSearch,
};

export default async function ClientDetailPage({ params }: Props) {
  const { id } = await params;
  const client = clients.find((c) => c.id === id);
  if (!client) notFound();

  const Icon = divisionIcons[client.divisionSlug] ?? Building2;
  const completed = client.projects.filter((p) => p.status === "Completed");
  const ongoing = client.projects.filter((p) => p.status === "Ongoing");

  return (
    <>
      <PageHero
        title={client.name}
        subtitle={`${client.division} client — projects and engagement with Vochmal Limited.`}
        image={
          client.divisionSlug === "construction"
            ? "/images/constructions/construction-hero.jpg"
            : client.divisionSlug === "oil-and-gas"
              ? "/images/oil-and-gas/downstream-and-midstream.jpg"
              : "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85"
        }
        breadcrumbs={[
          { label: client.division, href: `/${client.divisionSlug}` },
          { label: client.name },
        ]}
        overlay="heavy"
        textAlign="left"
      />

      <section className="section-padding bg-white" aria-labelledby="client-overview-heading">
        <div className="container-custom">
          <Link
            href={`/${client.divisionSlug}`}
            className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors text-sm mb-8"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to {client.division}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Client Overview
              </span>
              <h2 id="client-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                {client.name}
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">{client.description}</p>

              {client.testimonial && (
                <blockquote className="mt-8 bg-offwhite rounded-xl p-6 border-l-4 border-gold">
                  <p className="text-gray-700 leading-relaxed italic">&ldquo;{client.testimonial}&rdquo;</p>
                  {(client.contactName || client.contactTitle) && (
                    <footer className="mt-4 text-sm">
                      {client.contactName && <span className="font-semibold text-navy">{client.contactName}</span>}
                      {client.contactTitle && <span className="text-gray-500">, {client.contactTitle}</span>}
                      <span className="text-gray-500"> — {client.name}</span>
                    </footer>
                  )}
                </blockquote>
              )}
            </div>

            <aside className="bg-offwhite rounded-xl p-6 border border-gray-100 h-fit">
              <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-navy" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy">Engagement Summary</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Division</dt>
                  <dd className="font-medium text-navy">{client.division}</dd>
                </div>
                {client.contactName && (
                  <div>
                    <dt className="text-gray-500">Contact</dt>
                    <dd className="font-medium text-navy">{client.contactName}</dd>
                    {client.contactTitle && <dd className="text-gray-500">{client.contactTitle}</dd>}
                  </div>
                )}
                <div>
                  <dt className="text-gray-500">Completed projects</dt>
                  <dd className="font-medium text-navy">{completed.length}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Ongoing projects</dt>
                  <dd className="font-medium text-navy">{ongoing.length}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite" aria-labelledby="client-projects-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Projects"
            title={`Projects with ${client.name}`}
            subtitle={`Completed and ongoing work delivered for ${client.name} through our ${client.division} division.`}
            id="client-projects-heading"
          />

          {client.projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {client.projects.map((project) => {
                const isOngoing = project.status === "Ongoing";
                const thumbnail = project.images?.[0];
                return (
                  <Link
                    key={project.id}
                    href={`/clients/${client.id}/projects/${project.id}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all"
                    aria-label={`View project images: ${project.title}`}
                  >
                    {thumbnail && (
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={thumbnail}
                          alt={`${project.title} — project image`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            isOngoing ? "bg-gold/10 text-gold" : "bg-green-50 text-green-700"
                          }`}
                        >
                          {isOngoing ? (
                            <Clock size={12} aria-hidden="true" />
                          ) : (
                            <CheckCircle size={12} aria-hidden="true" />
                          )}
                          {project.status}
                        </span>
                        <div className="flex items-center gap-3">
                          {project.year && <span className="text-gray-400 text-xs">{project.year}</span>}
                          <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold">
                            View images <ArrowRight size={12} aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors">{project.title}</h3>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{project.description}</p>
                      {project.location && (
                        <p className="text-gray-400 text-xs mt-3">{project.location}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 border border-gray-100 text-center">
              <p className="text-gray-500">Project details for this client are being updated.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        eyebrow="Work With Us"
        title={`Start a Project with Vochmal ${client.division}`}
        subtitle={`Talk to our ${client.division.toLowerCase()} team about your next project.`}
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary", icon: "arrow" },
          { label: `View ${client.division}`, href: `/${client.divisionSlug}`, variant: "secondary" },
        ]}
      />
    </>
  );
}
