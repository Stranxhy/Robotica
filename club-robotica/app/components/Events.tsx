"use client";

import { useEffect, useRef, useState } from "react";

const events = [
  {
    day: "25",
    month: "ABR",
    year: "2026",
    title: "Taller de Arduino para Principiantes",
    desc: "Aprende los fundamentos de Arduino desde cero: sensores, actuadores y programación básica.",
    location: "Lab de Electrónica, IBERO CDMX",
    type: "Taller",
    typeColor: "#1a6e1a",
    spots: "30 lugares",
  },
  {
    day: "15",
    month: "MAY",
    year: "2026",
    title: "Competencia Nacional de Robótica 2026",
    desc: "Representamos a la Universidad Iberoamericana en la competencia más importante del año.",
    location: "Campus Monterrey, NL",
    type: "Competencia",
    typeColor: "#cc0000",
    spots: "Inscripción abierta",
  },
  {
    day: "03",
    month: "JUN",
    year: "2026",
    title: "Hackathon Ibero: Robots para el Bien",
    desc: "48 horas para construir robots que resuelvan problemas reales en comunidades vulnerables.",
    location: "Auditorio Principal, IBERO CDMX",
    type: "Hackathon",
    typeColor: "#0055aa",
    spots: "50 lugares",
  },
  {
    day: "18",
    month: "JUN",
    year: "2026",
    title: "Simposio de IA y Robótica",
    desc: "Expertos nacionales e internacionales presentan los últimos avances en inteligencia artificial aplicada.",
    location: "Auditorio Principal, IBERO CDMX",
    type: "Simposio",
    typeColor: "#7a3aaa",
    spots: "Acceso libre",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Events() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, visible } = useInView();

  return (
    <section id="eventos" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Agenda</p>
          <h2 className="section-title mb-4">
            <span className="shimmer-dark">Próximos </span>
            <span className="shimmer-red">Eventos</span>
          </h2>
          <p className="section-subtitle">
            Talleres, competencias y simposios para aprender, competir y conectar
            con la comunidad tecnológica.
          </p>
        </div>

        {/* List */}
        <div ref={ref} className="flex flex-col gap-4">
          {events.map((ev, i) => (
            <div
              key={ev.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col sm:flex-row items-start sm:items-center"
              style={{
                gap: "1rem",
                background: "#fff",
                borderRadius: "1rem",
                padding: "1.25rem",
                border: hovered === i ? "1.5px solid #cc0000" : "1.5px solid #f0f0f0",
                boxShadow: hovered === i
                  ? "0 12px 40px rgba(204,0,0,0.1)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? `${i * 0.09}s` : "0s",
                cursor: "default",
              }}
            >
              {/* Date block */}
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl text-white shadow-md"
                style={{
                  width: "72px",
                  height: "72px",
                  background: hovered === i
                    ? "linear-gradient(135deg, #e60000, #990000)"
                    : "#cc0000",
                  transition: "background 0.3s ease",
                }}
              >
                <span style={{ fontSize: "1.6rem", fontWeight: 900, lineHeight: 1 }}>
                  {ev.day}
                </span>
                <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", marginTop: "2px" }}>
                  {ev.month}
                </span>
                <span style={{ fontSize: "0.55rem", opacity: 0.75 }}>{ev.year}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: ev.typeColor }}
                  >
                    {ev.type}
                  </span>
                  <span className="text-gray-400 text-xs">{ev.spots}</span>
                </div>
                <h3
                  className="font-bold text-gray-900 mb-1"
                  style={{ fontSize: "0.975rem" }}
                >
                  {ev.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-1.5">{ev.desc}</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {ev.location}
                </div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <a
                  href="#contacto"
                  className="btn-red w-full sm:w-auto justify-center"
                  style={{ fontSize: "0.75rem", padding: "0.55rem 1.25rem" }}
                >
                  Registrarse
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
