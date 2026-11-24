import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import { clients } from "@/data/clients";
import ProjectImages from "@/components/clients/ProjectImages";

interface Props {
  params: Promise<{ id: string; projectId: string }>;
}

export function generateStaticParams() {
  return clients.flatMap((client) =>
    client.projects.map((project) => ({ id: client.id, projectId: project.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, projectId } = await params;
  const client = clients.find((c) => c.id === id);
  const project = client?.projects.find((p) => p.id === projectId);
  if (!client || !project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — ${client.name}`,
    description: project.description,
  };
}

export default async function ClientProjectPage({ params }: Props) {
  const { id, projectId } = await params;
  const client = clients.find((c) => c.id === id);
  const project = client?.projects.find((p) => p.id === projectId);
  if (!client || !project) notFound();

  const images = project.images ?? [];
  const cover = images[0] ?? (client.divisionSlug === "construction"
    ? "/images/constructions/construction-hero.jpg"
    : client.divisionSlug === "oil-and-gas"
      ? "/images/oil-and-gas/downstream-and-midstream.jpg"
      : "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85");

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={`${project.status} project for ${client.name} · ${client.division}`}
        image={cover}
        breadcrumbs={[
          { label: client.division, href: `/${client.divisionSlug}` },
          { label: client.name, href: `/clients/${client.id}` },
          { label: project.title },
        ]}
        overlay="heavy"
        textAlign="left"
      />

      <section className="section-padding bg-white" aria-labelledby="project-overview-heading">
        <div className="container-custom">
          <Link
            href={`/clients/${client.id}`}
            className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors text-sm mb-8"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to {client.name}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                {project.status === "Ongoing" ? (
                  <Clock size={14} aria-hidden="true" />
                ) : (
                  <CheckCircle size={14} aria-hidden="true" />
                )}
                {project.status} Project
              </span>
              <h2 id="project-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">{project.description}</p>
              {project.imagesNote && (
                <p className="text-gray-400 text-xs mt-3 italic">{project.imagesNote}</p>
              )}
            </div>

            <aside className="bg-offwhite rounded-xl p-6 border border-gray-100 h-fit">
              <h3 className="font-display text-lg font-bold text-navy">Project Details</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Client</dt>
                  <dd className="font-medium text-navy">{client.name}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Division</dt>
                  <dd className="font-medium text-navy">{client.division}</dd>
                </div>
                {project.location && (
                  <div>
                    <dt className="text-gray-500">Location</dt>
                    <dd className="font-medium text-navy">{project.location}</dd>
                  </div>
                )}
                {project.year && (
                  <div>
                    <dt className="text-gray-500">Year</dt>
                    <dd className="font-medium text-navy">{project.year}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-gray-500">Status</dt>
                  <dd className="font-medium text-navy">{project.status}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite" aria-labelledby="project-images-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Visual Record"
            title={`Images — ${project.title}`}
            subtitle="Select any image to open the full-size gallery."
            id="project-images-heading"
          />
          <ProjectImages
            images={images}
            title={project.title}
            fallbackImage={cover}
          />
        </div>
      </section>

      <CTABanner
        eyebrow="Work With Us"
        title={`Deliver Your Next Project with Vochmal`}
        subtitle={`Talk to our ${client.division.toLowerCase()} team about your next project.`}
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary", icon: "arrow" },
          { label: `More ${client.name} Projects`, href: `/clients/${client.id}`, variant: "secondary" },
        ]}
      />
    </>
  );
}
