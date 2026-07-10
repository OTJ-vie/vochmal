import {
  Drill, Fuel, Pipette, HardHat, LineChart, PackageSearch, LucideIcon,
} from "lucide-react";
import { oilGasServices } from "@/data/oilAndGas";

const iconMap: Record<string, LucideIcon> = {
  Drill,
  Fuel,
  Pipette,
  HardHat,
  LineChart,
  PackageSearch,
};

export default function OilGasServices() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {oilGasServices.map((service) => {
        const Icon = iconMap[service.icon] || Drill;
        return (
          <article
            key={service.id}
            className="bg-white rounded-xl border border-gray-100 p-7 hover:shadow-xl hover:border-gold/30 transition-all duration-300 group flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
              <Icon
                size={22}
                className="text-gold group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-navy mb-3">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
            <ul className="mt-4 space-y-1.5 pt-4 border-t border-gray-100">
              {service.capabilities.slice(0, 3).map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-xs text-gray-500">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-1.5" aria-hidden="true" />
                  {cap}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
