"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="section-padding bg-bluegrey" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by businesses, developers, and institutions across Nigeria. Here is what our partners have to say."
          id="testimonials-heading"
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto">
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                title={t.title}
                company={t.company}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
