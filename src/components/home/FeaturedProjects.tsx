"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-white" aria-labelledby="projects-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects & Highlights"
          subtitle="A cross-section of landmark projects and operational highlights from across Vochmal's six business divisions."
          id="projects-heading"
        />
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3.2 },
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        navigation
        className="px-6 lg:px-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="relative h-80 rounded-xl overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                  {project.division}
                </span>
                <h3 className="font-display text-lg font-bold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {project.location} &mdash; {project.year}
                </p>
              </div>
              <div
                className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full"
                style={{
                  backgroundColor: project.status === "Completed" ? "rgba(22,163,74,0.85)" : "rgba(247,132,5,0.85)",
                  color: "#fff",
                }}
              >
                {project.status}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
