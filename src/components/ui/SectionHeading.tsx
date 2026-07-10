import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full",
            light
              ? "text-gold bg-gold/20"
              : "text-gold bg-gold/10"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-0.5 w-16 bg-gold",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
