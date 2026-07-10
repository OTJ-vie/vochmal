"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Satisfied Clients" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
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
    <span ref={ref} aria-label={`${value}${suffix}`}>
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
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-white/70 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
