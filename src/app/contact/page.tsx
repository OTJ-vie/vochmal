import type { Metadata } from "next";
import {
  MapPin, Phone, Mail, Clock,
  Building2, Mountain, ChefHat, Package, Hotel, Flame,
} from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon, XIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vochmal Limited — our team responds within 24 hours to all enquiries across construction, mining, bakery, procurement, service apartments, and oil & gas.",
};

const departmentContacts = [
  { icon: Building2, name: "Construction", email: "construction@vochmal.com", phone: "+234 801 234 5678" },
  { icon: Mountain, name: "Mining", email: "mining@vochmal.com", phone: "+234 801 234 5679" },
  { icon: ChefHat, name: "Bakery", email: "bakery@vochmal.com", phone: "+234 801 234 5680" },
  { icon: Package, name: "Procurement", email: "procurement@vochmal.com", phone: "+234 801 234 5681" },
  { icon: Hotel, name: "Service Apartments", email: "apartments@vochmal.com", phone: "+234 801 234 5682" },
  { icon: Flame, name: "Oil & Gas", email: "oilandgas@vochmal.com", phone: "+234 801 234 5683" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch with Vochmal Limited"
        subtitle="Our team responds to all enquiries within 24 business hours. We look forward to hearing from you."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Grid */}
      <section className="section-padding bg-white" aria-labelledby="contact-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 id="contact-heading" className="font-display text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <aside className="lg:col-span-2" aria-label="Contact details">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Contact Details
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4 bg-offwhite rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Head Office</p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      12 Corporate Drive, Victoria Island<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-offwhite rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">General Enquiries</p>
                    <a href="tel:+2348012345678" className="text-gray-500 text-sm hover:text-gold transition-colors">
                      +234 801 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-offwhite rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Email</p>
                    <a href="mailto:info@vochmal.com" className="text-gray-500 text-sm hover:text-gold transition-colors">
                      info@vochmal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-offwhite rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Business Hours</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday – Friday: 8:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-navy rounded-xl p-5">
                  <p className="font-semibold text-white text-sm mb-4">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {[
                      { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                      { Icon: FacebookIcon, href: "#", label: "Facebook" },
                      { Icon: InstagramIcon, href: "#", label: "Instagram" },
                      { Icon: XIcon, href: "#", label: "X / Twitter" },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={`Vochmal on ${label}`}
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors text-white"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="bg-bluegrey h-80 flex items-center justify-center border-t border-gray-100" aria-label="Office location map">
        <div className="text-center">
          <MapPin size={32} className="text-gold mx-auto mb-3" aria-hidden="true" />
          <p className="font-display text-lg font-bold text-navy">Victoria Island, Lagos</p>
          <p className="text-gray-500 text-sm mt-1">12 Corporate Drive — Map embed</p>
        </div>
      </div>

      {/* Department Cards */}
      <section className="section-padding bg-white" aria-labelledby="departments-heading">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 id="departments-heading" className="font-display text-2xl font-bold text-navy">
              Division-Specific Contacts
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Contact the relevant division directly for faster response.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departmentContacts.map((dept) => (
              <div
                key={dept.name}
                className="bg-offwhite rounded-xl p-5 border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors">
                  <dept.icon size={18} className="text-navy group-hover:text-gold transition-colors" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-navy text-sm">{dept.name}</p>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-xs text-gray-500 hover:text-gold transition-colors block mt-0.5 truncate"
                  >
                    {dept.email}
                  </a>
                  <a
                    href={`tel:${dept.phone.replace(/\s/g, "")}`}
                    className="text-xs text-gray-500 hover:text-gold transition-colors block mt-0.5"
                  >
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
