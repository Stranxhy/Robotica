"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Miembros activos" },
  { value: 20, suffix: "+", label: "Proyectos completados" },
  { value: 10, suffix: "+", label: "Competencias ganadas" },
  { value: 5, suffix: "", label: "Años de innovación" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl font-extrabold leading-none tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#cc0000" }} className="py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center group cursor-default"
          >
            <div
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <span className="text-red-200 text-sm mt-1 font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
