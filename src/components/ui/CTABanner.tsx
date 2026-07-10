import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "white";
  icon?: "arrow" | "download";
}

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttons?: CTAButton[];
}

export default function CTABanner({
  eyebrow = "Get Started",
  title,
  subtitle,
  buttons = [
    { label: "Get In Touch", href: "/contact", variant: "primary", icon: "arrow" },
    { label: "Download Company Profile", href: "#", variant: "secondary", icon: "download" },
  ],
}: CTABannerProps) {
  return (
    <section className="bg-navy relative overflow-hidden" aria-label="Call to action">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/3 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container-custom py-20 relative text-center">
        {eyebrow && (
          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {buttons.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {buttons.map((btn) => {
              const Icon = btn.icon === "download" ? Download : ArrowRight;
              const className =
                btn.variant === "white"
                  ? "btn-white"
                  : btn.variant === "secondary"
                  ? "btn-secondary"
                  : "btn-primary";
              return (
                <Link key={btn.label} href={btn.href} className={className}>
                  {btn.label}
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
