import Link from "next/link";
import {
  Building2, Mountain, ChefHat, Package, Hotel, Flame, ArrowRight, LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Mountain,
  ChefHat,
  Package,
  Hotel,
  Flame,
};

interface DivisionCardProps {
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export default function DivisionCard({ name, description, icon, slug }: DivisionCardProps) {
  const Icon = iconMap[icon] || Building2;

  return (
    <Link
      href={slug}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
      aria-label={`Explore Vochmal ${name} division`}
    >
      {/* Gold top border — animates in on hover */}
      <div className="h-1 bg-gray-100 group-hover:bg-gold transition-colors duration-300" />

      <div className="p-7 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-lg bg-bluegrey flex items-center justify-center mb-5 group-hover:bg-navy transition-colors duration-300">
          <Icon
            size={22}
            className="text-navy group-hover:text-gold transition-colors duration-300"
            aria-hidden="true"
          />
        </div>

        <h3 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-200">
          {name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

        <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-200">
          Explore
          <ArrowRight size={15} />
        </div>
      </div>
    </Link>
  );
}
