import Link from "next/link";
import { ArrowRight, Building2, ChefHat, Hotel, Mountain, PackageSearch, Shield } from "lucide-react";
import type { Client } from "@/data/clients";

const divisionIcons: Record<string, typeof Building2> = {
  construction: Building2,
  "oil-and-gas": Shield,
  procurement: PackageSearch,
  mining: Mountain,
  bakery: ChefHat,
  "service-apartments": Hotel,
};

interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  const Icon = divisionIcons[client.divisionSlug] ?? Building2;
  const completedCount = client.projects.filter((p) => p.status === "Completed").length;
  const ongoingCount = client.projects.filter((p) => p.status === "Ongoing").length;

  return (
    <Link
      href={`/clients/${client.id}`}
      className="group bg-offwhite rounded-xl p-6 border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all flex flex-col"
      aria-label={`View projects for ${client.name}`}
    >
      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
        <Icon size={20} className="text-navy group-hover:text-gold transition-colors" aria-hidden="true" />
      </div>

      <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors">
        {client.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mt-2 flex-1">{client.description}</p>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <div className="text-xs text-gray-500">
          <span className="font-medium text-navy">{client.division}</span>
          {client.projects.length > 0 && (
            <span className="ml-2">
              {completedCount > 0 && `${completedCount} completed`}
              {completedCount > 0 && ongoingCount > 0 && " · "}
              {ongoingCount > 0 && `${ongoingCount} ongoing`}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold shrink-0">
          View projects <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
