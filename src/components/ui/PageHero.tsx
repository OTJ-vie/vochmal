import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  overlay?: "light" | "medium" | "heavy";
  textAlign?: "left" | "center";
}

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs,
  overlay = "medium",
  textAlign = "center",
}: PageHeroProps) {
  const overlayClass = {
    light: "bg-navy/40",
    medium: "bg-navy/60",
    heavy: "bg-navy/80",
  }[overlay];

  return (
    <section className="relative h-[420px] md:h-[500px] flex items-end" aria-label={`${title} hero`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent`}
      />

      <div className={`relative container-custom pb-14 w-full ${textAlign === "center" ? "text-center" : "text-left"}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/60 text-sm mb-4 justify-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={13} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative gold bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
