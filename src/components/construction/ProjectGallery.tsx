"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { X, MapPin, Calendar } from "lucide-react";
import { projects } from "@/data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type FilterCategory = "All" | "Water Infrastructure" | "Education" | "Infrastructure";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [lightbox, setLightbox] = useState<(typeof projects)[0] | null>(null);

  const constructionProjects = projects.filter((p) => p.division === "Construction");
  const filtered =
    activeFilter === "All"
      ? constructionProjects
      : constructionProjects.filter((p) => p.category === activeFilter);

  const filters: FilterCategory[] = ["All", "Water Infrastructure", "Education", "Infrastructure"];

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeFilter === f
                ? "bg-gold text-white shadow-md shadow-gold/25"
                : "bg-bluegrey text-navy hover:bg-navy hover:text-white"
            }`}
            aria-pressed={activeFilter === f}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <button
            key={project.id}
            onClick={() => setLightbox(project)}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] text-left w-full"
            aria-label={`View project: ${project.title}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-display text-base font-bold text-white mt-1 leading-snug">
                {project.title}
              </h3>
              <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                <MapPin size={10} /> {project.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${lightbox.title}`}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              {(() => {
                const images = [lightbox.image, ...(lightbox.gallery || [])];
                return images.length > 1 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={img + i}>
                        <div className="relative h-64 md:h-80">
                          <Image
                            src={img}
                            alt={`${lightbox.title} — image ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 700px"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <Image
                    src={lightbox.image}
                    alt={lightbox.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                );
              })()}
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close project details"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
              <div
                className="absolute top-3 left-3 z-10 text-xs font-semibold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: lightbox.status === "Completed" ? "#16a34a" : "#f78405" }}
              >
                {lightbox.status}
              </div>
            </div>
            <div className="p-6">
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                {lightbox.division} — {lightbox.category}
              </span>
              <h2 className="font-display text-2xl font-bold text-navy mt-1">{lightbox.title}</h2>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gold" /> {lightbox.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gold" /> {lightbox.year}
                </span>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
