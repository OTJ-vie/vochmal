"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 8, suffix: "+", label: "Years in Business" },
  { value: 200, suffix: "+", label: "Active & Completed Contracts" },
  { value: 50, prefix: "₦", suffix: "B+", label: "Naira in Contract Value" },
];

function Counter({ value, prefix, suffix }: { value: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, value);
            setCount(Math.floor(current));
            if (current >= value) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} aria-label={`${prefix ?? ""}${value}${suffix}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatCounter() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-white/15">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-4xl md:text-5xl font-bold text-gold">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </p>
          <p className="text-white/70 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
