"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroSlides } from "@/data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]" aria-label="Featured hero slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={slide.id === "s1"}
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl">
                  <span className="inline-block h-0.5 w-12 bg-gold mb-6" aria-hidden="true" />
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow-sm">
                    {slide.headline}
                  </h1>
                  <p className="mt-5 text-white/80 text-lg md:text-xl leading-relaxed">
                    {slide.tagline}
                  </p>
                  <div className="mt-8">
                    <Link href={slide.cta.href} className="btn-primary text-base">
                      {slide.cta.label}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
