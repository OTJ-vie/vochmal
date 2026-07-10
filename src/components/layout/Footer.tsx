import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "News & Insights", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const divisionLinks = [
  { name: "Construction", href: "/construction" },
  { name: "Mining", href: "/mining" },
  { name: "Bakery", href: "/bakery" },
  { name: "General Procurement", href: "/procurement" },
  { name: "Service Apartments", href: "/service-apartments" },
  { name: "Oil & Gas", href: "/oil-and-gas" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4" aria-label="Vochmal Limited — Home">
              <Image
                src="/logo.png"
                alt="Vochmal Limited"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A diversified Nigerian conglomerate delivering excellence across construction, mining, bakery, procurement, service apartments, and oil & gas.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { Icon: FacebookIcon, href: "#", label: "Facebook" },
                { Icon: InstagramIcon, href: "#", label: "Instagram" },
                { Icon: XIcon, href: "#", label: "X / Twitter" },
                { Icon: YoutubeIcon, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Vochmal on ${label}`}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5 text-white/90 after:block after:w-8 after:h-0.5 after:bg-gold after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Divisions */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5 text-white/90 after:block after:w-8 after:h-0.5 after:bg-gold after:mt-2">
              Our Divisions
            </h3>
            <ul className="space-y-2.5">
              {divisionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5 text-white/90 after:block after:w-8 after:h-0.5 after:bg-gold after:mt-2">
              Get In Touch
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="shrink-0 mt-0.5 text-gold" />
                <span>12 Corporate Drive, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li>
                <a
                  href="tel:+2348012345678"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-gold" />
                  +234 801 234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vochmal.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-gold" />
                  info@vochmal.com
                </a>
              </li>
            </ul>

            <div>
              <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Newsletter email address"
                  className="flex-1 bg-white/10 text-white placeholder-white/40 text-sm px-3 py-2 rounded-l-md outline-none focus:bg-white/15 transition-colors border border-white/10 focus:border-gold/50"
                />
                <button
                  aria-label="Subscribe to newsletter"
                  className="bg-gold hover:bg-gold/80 text-white text-sm font-semibold px-4 py-2 rounded-r-md transition-colors"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Vochmal Limited. All rights reserved. RC 1442966.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
