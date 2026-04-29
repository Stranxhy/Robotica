"use client";

import { useState, useEffect, useRef } from "react";

const values = [
  {
    id: "equipo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trabajo en Equipo",
    desc: "Colaboramos juntos para superar desafíos complejos y lograr resultados extraordinarios. En el club, nadie trabaja solo.",
  },
  {
    id: "innovacion",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Innovación",
    desc: "Exploramos nuevas tecnologías para mantenernos a la vanguardia. No solo seguimos manuales, buscamos crear lo que antes no existía.",
  },
  {
    id: "aprendizaje",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Aprendizaje",
    desc: "Fomentamos una cultura de aprendizaje continuo. Aquí, fallar en un prototipo es solo el primer paso para entender cómo funciona.",
  },
  {
    id: "compromiso",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Compromiso",
    desc: "Dedicamos tiempo y esfuerzo a cada proyecto. Nuestro compromiso va más allá del taller, buscamos impactar en nuestra comunidad.",
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: tabsRef, visible: tabsVisible } = useInView();

  return (
    <section id="nosotros" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ──────────────────────────────────── */}
        <div
          ref={headerRef}
          className="mb-20 grid md:grid-cols-2 gap-16 items-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          <div>
            <p className="section-label">Quiénes somos</p>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#111",
                marginBottom: "0.75rem",
                display: "block",
              }}
            >
              Sobre el Club
            </h2>
            {/* Red accent line */}
            <div
              style={{
                width: "48px",
                height: "4px",
                background: "#cc0000",
                borderRadius: "2px",
                marginBottom: "1.75rem",
              }}
            />
            <p
              style={{
                color: "#666",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                marginBottom: "2rem",
                maxWidth: "400px",
              }}
            >
              El <strong style={{ color: "#111" }}>Club de Robótica Ibero</strong> es un espacio de alto rendimiento para mentes creativas. Aquí no solo construimos máquinas, diseñamos soluciones.
            </p>
            <a href="#contacto" className="btn-red">
              Únete ahora
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "8px" }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: "340px", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
          >
            <img
              src="/img/ClubRobotica.jpeg"
              alt="Equipo Club de Robótica Ibero"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(204,0,0,0.18) 0%, transparent 60%)",
              }}
            />
            {/* Red bottom bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "#cc0000",
              }}
            />
          </div>
        </div>

        {/* ── Values tabs ─────────────────────────────── */}
        <div
          ref={tabsRef}
          style={{
            opacity: tabsVisible ? 1 : 0,
            transform: tabsVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
          }}
        >
          {/* Tab buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderBottom: "2px solid #f0f0f0",
              marginBottom: "2.5rem",
            }}
          >
            {values.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveTab(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "1.25rem 1rem",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === i ? "3px solid #cc0000" : "3px solid transparent",
                  marginBottom: "-2px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "border-color 0.3s ease",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    color: activeTab === i ? "#cc0000" : "#ccc",
                    transition: "color 0.3s ease",
                  }}
                >
                  {v.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: activeTab === i ? "#111" : "#bbb",
                    transition: "color 0.3s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ minHeight: "120px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(4rem, 8vw, 7rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "rgba(204,0,0,0.07)",
                  lineHeight: 1,
                  userSelect: "none",
                  fontFamily: "monospace",
                }}
              >
                {String(activeTab + 1).padStart(2, "0")}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#111",
                    marginBottom: "0.75rem",
                  }}
                >
                  {values[activeTab].title}
                </h3>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#666",
                    lineHeight: 1.8,
                    maxWidth: "580px",
                  }}
                >
                  {values[activeTab].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
