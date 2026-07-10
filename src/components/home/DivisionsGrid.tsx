import DivisionCard from "@/components/ui/DivisionCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { divisions } from "@/data/divisions";

export default function DivisionsGrid() {
  return (
    <section className="section-padding bg-offwhite" aria-labelledby="divisions-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Divisions"
          title="What We Do"
          subtitle="Vochmal Limited operates across six strategic business divisions, each delivering specialised expertise and international-quality services across Nigeria."
          id="divisions-heading"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div) => (
            <DivisionCard
              key={div.id}
              name={div.name}
              description={div.shortDescription}
              icon={div.icon}
              slug={div.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
