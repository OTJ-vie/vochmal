import type { Metadata } from "next";
import {
  Wifi, Shield, Zap, AirVent, SprayCan, Car, Waves, Dumbbell,
  Tv, ChefHat, MapPin, ChevronDown,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import BookingForm from "@/components/forms/BookingForm";
import VideoModal from "@/components/ui/VideoModal";
import { apartments, apartmentFAQs } from "@/data/apartments";

export const metadata: Metadata = {
  title: "Service Apartments",
  description:
    "Luxury fully furnished service apartments in Lagos for short-stay and long-stay corporate guests. Premium amenities, 24/7 security, and dedicated concierge.",
};

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Zap, label: "Backup Power Supply" },
  { icon: AirVent, label: "Air Conditioning" },
  { icon: SprayCan, label: "Daily Housekeeping" },
  { icon: Car, label: "Covered Parking" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Dumbbell, label: "Fully Equipped Gym" },
  { icon: Tv, label: "Smart TV" },
  { icon: ChefHat, label: "Fully Equipped Kitchen" },
];

export default function ServiceApartmentsPage() {
  return (
    <>
      <PageHero
        title="Your Home Away from Home in the Heart of the City"
        subtitle="Luxury fully furnished service apartments designed for the modern executive — comfort, security, and convenience in one address."
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85"
        breadcrumbs={[{ label: "Service Apartments" }]}
        overlay="heavy"
        textAlign="left"
      />

      {/* Overview */}
      <section className="section-padding bg-white" aria-labelledby="apt-overview-heading">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
            Welcome
          </span>
          <h2 id="apt-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
            Executive Accommodation — Reimagined
          </h2>
          <p className="text-gray-500 mt-5 leading-relaxed">
            Vochmal Service Apartments offers a portfolio of premium furnished apartments in Lagos
            designed specifically for corporate travellers, expatriates, and discerning individuals
            on extended stays. Every unit is fully serviced, professionally maintained, and equipped
            with everything you need to live and work comfortably — from a fully equipped kitchen and
            high-speed internet to 24/7 security and a dedicated concierge team.
          </p>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Whether you need a three-night studio for a quick business trip or a six-month corporate
            lease for a senior executive, Vochmal Service Apartments has the unit, the service, and
            the flexibility you need.
          </p>
        </div>
      </section>

      {/* Apartment Listings */}
      <section className="section-padding bg-offwhite" aria-labelledby="apartments-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Units"
            title="Apartment Listings"
            subtitle="Four apartment categories designed to suit every stay duration, guest count, and budget."
            id="apartments-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apartments.map((apt) => (
              <ApartmentCard key={apt.id} apt={apt} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-navy" aria-labelledby="amenities-heading">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What&rsquo;s Included"
            title="Amenities & Facilities"
            subtitle="Every Vochmal Service Apartment comes fully equipped with the amenities modern executives expect."
            light
            id="amenities-heading"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white/10 rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-gold" aria-hidden="true" />
                </div>
                <p className="text-white text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Video */}
      <VideoModal
        backgroundImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=85"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="Take a Virtual Tour"
        subtitle="Experience the Vochmal Service Apartments from the comfort of your screen before you book."
      />

      {/* Location */}
      <section className="section-padding bg-white" aria-labelledby="location-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10">
                Location
              </span>
              <h2 id="location-heading" className="font-display text-3xl font-bold text-navy leading-tight">
                Ideally Located. Perfectly Connected.
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Vochmal Service Apartments is located in Victoria Island, Lagos — Nigeria&rsquo;s
                premier commercial and diplomatic district. Our address puts you minutes from the
                major business hubs, embassies, shopping destinations, and Lagos&rsquo;s finest
                dining.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: MapPin, text: "12 Admiralty Way, Victoria Island, Lagos" },
                  { icon: MapPin, text: "20 minutes from Murtala Muhammed International Airport" },
                  { icon: MapPin, text: "5 minutes from Eko Atlantic City" },
                  { icon: MapPin, text: "Walkable to Victoria Island business district" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-gray-600">
                    <Icon size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bluegrey rounded-2xl h-72 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <MapPin size={32} className="text-gold mx-auto mb-3" aria-hidden="true" />
                <p className="font-display text-lg font-bold text-navy">Victoria Island, Lagos</p>
                <p className="text-gray-500 text-sm mt-1">Map embed placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section-padding bg-offwhite" aria-labelledby="booking-heading">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Make a Booking"
            title="Book Your Stay Today"
            subtitle="Complete the form below and our reservations team will confirm availability and pricing within 24 hours."
            id="booking-heading"
          />
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Have Questions?"
            title="Frequently Asked Questions"
            id="faq-heading"
          />
          <div className="space-y-3">
            {apartmentFAQs.map((faq, i) => (
              <details key={i} className="group bg-offwhite rounded-xl border border-gray-100">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-navy text-sm hover:text-gold transition-colors">
                  {faq.question}
                  <ChevronDown size={16} className="shrink-0 text-gold group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Reserve Now"
        title="Ready to Book Your Executive Stay?"
        subtitle="Ideal for corporate travellers, long-term project teams, expatriates, and individuals who demand more than a standard hotel room."
        buttons={[
          { label: "Book Your Stay", href: "#booking", variant: "primary", icon: "arrow" },
          { label: "Request a Site Visit", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
