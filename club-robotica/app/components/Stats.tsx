"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 13, suffix: "",  label: "Miembros\nActivos" },
  { value: 10, suffix: "+", label: "Proyectos\nCompletados" },
  { value: 2,  suffix: "",  label: "Competencias\nGanadas" },
  { value: 2,  suffix: "",  label: "Años de\nInnovación" },
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
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 1400 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      style={{
        fontSize: "clamp(3rem, 6vw, 5rem)",
        fontWeight: 900,
        letterSpacing: "-0.05em",
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#cc0000" }} className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 stats-grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem 1rem",
                  transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
            >
              <div style={{ color: "#fff" }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>

              {/* Animated underline */}
              <div
                style={{
                  width: hovered === i ? "48px" : "24px",
                  height: "2px",
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: "2px",
                  margin: "0.75rem 0",
                  transition: "width 0.35s ease",
                }}
              />

              <span
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
