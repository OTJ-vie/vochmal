"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Building2, Mountain, ChefHat,
  Package, Hotel, Flame, Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const divisionLinks = [
  { name: "Construction", href: "/construction", icon: Building2, desc: "Civil engineering & building projects" },
  { name: "Mining", href: "/mining", icon: Mountain, desc: "Mineral extraction & site operations" },
  { name: "Bakery", href: "/bakery", icon: ChefHat, desc: "Artisan & commercial baked goods" },
  { name: "General Procurement", href: "/procurement", icon: Package, desc: "Supply chain & vendor sourcing" },
  { name: "Service Apartments", href: "/service-apartments", icon: Hotel, desc: "Luxury furnished short & long stays" },
  { name: "Oil & Gas", href: "/oil-and-gas", icon: Flame, desc: "Upstream & downstream energy services" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy shadow-lg shadow-black/20"
            : "bg-[rgba(13,27,64,0.75)]"
        )}
      >
        <nav className="container-custom flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Vochmal Limited — Home">
            <Image
              src="/logo.png"
              alt="Vochmal Limited"
              width={160}
              height={56}
              priority
              className="h-12 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-white/90 hover:text-gold transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-gold after:scale-x-0 after:transition-transform",
                  isActive(link.href) && "text-gold after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mega Menu Trigger */}
            <div ref={megaRef} className="relative">
              <button
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-gold transition-colors",
                  megaOpen && "text-gold"
                )}
              >
                Our Divisions
                <ChevronDown
                  size={15}
                  className={cn("transition-transform duration-200", megaOpen && "rotate-180")}
                />
              </button>

              {/* Mega Dropdown */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl shadow-black/15 border border-gray-100 p-6 grid grid-cols-2 gap-3">
                  {divisionLinks.map((div) => (
                    <Link
                      key={div.name}
                      href={div.href}
                      onClick={() => setMegaOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bluegrey transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                        <div.icon size={18} className="text-navy group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                          {div.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{div.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+2348036305694"
              className="flex items-center gap-2 text-white/80 hover:text-gold text-sm transition-colors"
              aria-label="Call Vochmal"
            >
              <Phone size={15} />
              <span>+234 803 630 5694</span>
            </a>
            <Link href="/contact" className="btn-primary text-sm py-2 px-5">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy transition-transform duration-300 lg:hidden flex flex-col pt-20",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block py-3 text-lg font-medium border-b border-white/10 transition-colors",
                isActive(link.href) ? "text-gold" : "text-white/90 hover:text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setMobileDivisionsOpen((v) => !v)}
            className="w-full flex items-center justify-between py-3 text-lg font-medium text-white/90 hover:text-gold border-b border-white/10"
            aria-expanded={mobileDivisionsOpen}
          >
            Our Divisions
            <ChevronDown
              size={18}
              className={cn("transition-transform", mobileDivisionsOpen && "rotate-180")}
            />
          </button>

          {mobileDivisionsOpen && (
            <div className="pl-4 border-l-2 border-gold/30 my-2">
              {divisionLinks.map((div) => (
                <Link
                  key={div.name}
                  href={div.href}
                  className="flex items-center gap-3 py-2.5 text-white/80 hover:text-gold transition-colors"
                >
                  <div.icon size={16} />
                  <span className="text-base">{div.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 pb-8 border-t border-white/10 pt-6 space-y-3">
          <a
            href="tel:+2348036305694"
            className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors"
          >
            <Phone size={16} />
            <span>+234 803 630 5694</span>
          </a>
          <Link href="/contact" className="btn-primary w-full justify-center">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
