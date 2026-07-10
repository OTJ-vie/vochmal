"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Users, Maximize2, CheckCircle, ArrowRight } from "lucide-react";
import { ApartmentListing } from "@/data/apartments";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ApartmentCard({ apt }: { apt: ApartmentListing }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Image Carousel */}
      <div className="relative">
        {apt.badge && (
          <div className="absolute top-3 left-3 z-10 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
            {apt.badge}
          </div>
        )}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-64"
          loop={apt.images.length > 1}
        >
          {apt.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-64">
                <Image
                  src={img}
                  alt={`${apt.name} — image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">{apt.type}</span>
            <h3 className="font-display text-xl font-bold text-navy mt-0.5">{apt.name}</h3>
          </div>
          <div className="text-right shrink-0">
            <p className="text-gold font-bold text-sm">{apt.priceRange}</p>
            <p className="text-gray-400 text-xs mt-0.5">{apt.priceNote}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">{apt.description}</p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 py-3 border-t border-b border-gray-100 mb-4">
          {apt.bedrooms > 0 && (
            <span className="flex items-center gap-1.5 text-sm text-gray-600">
              <Bed size={14} className="text-gold" aria-hidden="true" /> {apt.bedrooms} Bed{apt.bedrooms > 1 && "s"}
            </span>
          )}
          <span className="flex items-center gap-1.5 text-sm text-gray-600">
            <Bath size={14} className="text-gold" aria-hidden="true" /> {apt.bathrooms} Bath{apt.bathrooms > 1 && "s"}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-gray-600">
            <Users size={14} className="text-gold" aria-hidden="true" /> Up to {apt.maxGuests} guests
          </span>
          <span className="flex items-center gap-1.5 text-sm text-gray-600">
            <Maximize2 size={14} className="text-gold" aria-hidden="true" /> {apt.area}
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {apt.amenities.slice(0, 6).map((a) => (
            <span key={a} className="flex items-center gap-1 text-xs text-navy bg-bluegrey px-2.5 py-1 rounded-full">
              <CheckCircle size={11} className="text-gold" aria-hidden="true" /> {a}
            </span>
          ))}
          {apt.amenities.length > 6 && (
            <span className="text-xs text-gray-400 px-2 py-1">+{apt.amenities.length - 6} more</span>
          )}
        </div>

        <Link href="#booking" className="btn-primary w-full justify-center text-sm">
          Enquire About This Unit <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
