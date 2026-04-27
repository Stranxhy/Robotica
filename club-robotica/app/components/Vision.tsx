"use client";

import { useEffect, useRef, useState } from "react";

const PANELS = [
  {
    key: "vision",
    number: "01",
    label: "Visión",
    subheading: "A dónde vamos",
    heading: "Nuestra Visión",
    text: "Ser el club de robótica referente de México, formando ingenieros e innovadores capaces de diseñar tecnología que resuelva los grandes retos de la humanidad.",
    bullets: [
      "Competencias internacionales de robótica",
      "Investigación de impacto global publicada",
      "Alumni en las mejores empresas de tecnología",
      "Laboratorio equipado de última generación",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    key: "mision",
    number: "02",
    label: "Misión",
    subheading: "Por qué existimos",
    heading: "Nuestra Misión",
    text: "Crear un espacio interdisciplinario donde estudiantes de todas las carreras aprendan robótica, programación e inteligencia artificial mediante proyectos reales.",
    bullets: [
      "Talleres semanales de electrónica y software",
      "Proyectos reales con impacto en el campus",
      "Mentorías de ingenieros en la industria",
      "Comunidad activa de más de 50 miembros",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
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

export default function Vision() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useInView();

  return (
    <section id="vision" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Panels */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-4"
          style={{ minHeight: "360px" }}
        >
          {PANELS.map((panel, i) => {
            const isActive = active === i;
            return (
              <div
                key={panel.key}
                onClick={() => setActive(i)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  flex: isActive ? 2.8 : 1,
                  minWidth: 0,
                  background: isActive ? "#cc0000" : "#f9f9f9",
                  border: isActive
                    ? "1.5px solid #cc0000"
                    : "1.5px solid #e5e7eb",
                  boxShadow: isActive
                    ? "0 12px 48px rgba(204,0,0,0.18)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  transition:
                    "flex 0.65s cubic-bezier(0.4,0,0.2,1), background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(36px)",
                  transitionProperty:
                    "flex, background, border, box-shadow, opacity, transform",
                  transitionDuration: "0.65s, 0.4s, 0.4s, 0.4s, 0.55s, 0.55s",
                  transitionDelay: `0s, 0s, 0s, 0s, ${i * 0.1}s, ${i * 0.1}s`,
                }}
              >
                {/* Top accent line when inactive */}
                {!isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "#cc0000",
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                )}

                <div className="p-7 h-full flex flex-col">
                  {/* Number + icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono font-bold tracking-widest"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        color: isActive ? "rgba(255,255,255,0.6)" : "#cc0000",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {panel.number}
                    </span>
                    <div
                      style={{
                        color: isActive ? "rgba(255,255,255,0.85)" : "#cc0000",
                        transition: "color 0.35s ease, transform 0.4s ease",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {panel.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-extrabold leading-tight"
                    style={{
                      color: isActive ? "#fff" : "#111",
                      fontSize: isActive
                        ? "clamp(1.4rem, 2.5vw, 1.9rem)"
                        : "1.05rem",
                      marginBottom: "0.6rem",
                      transition: "font-size 0.45s ease, color 0.35s ease",
                      whiteSpace: isActive ? "normal" : "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {isActive ? panel.heading : panel.label}
                  </h3>

                  {/* Subheading */}
                  <p
                    className="uppercase font-bold tracking-widest"
                    style={{
                      fontSize: "0.62rem",
                      color: isActive ? "rgba(255,255,255,0.7)" : "#cc0000",
                      letterSpacing: "0.16em",
                      marginBottom: "1rem",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(6px)",
                      transition:
                        "opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s",
                      maxHeight: isActive ? "24px" : "0",
                      overflow: "hidden",
                    }}
                  >
                    {panel.subheading}
                  </p>

                  {/* Body text */}
                  <p
                    style={{
                      color: isActive ? "rgba(255,255,255,0.82)" : "#555",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      marginBottom: "1.25rem",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      transition:
                        "opacity 0.45s ease 0.25s, transform 0.45s ease 0.25s",
                    }}
                  >
                    {panel.text}
                  </p>

                  {/* Bullets */}
                  <ul className="flex-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {panel.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          color: isActive ? "rgba(255,255,255,0.88)" : "#444",
                          fontSize: "0.85rem",
                          marginBottom: "0.55rem",
                          opacity: isActive ? 1 : 0,
                          transform: isActive
                            ? "translateX(0)"
                            : "translateX(-12px)",
                          transition: `opacity 0.4s ease ${0.32 + bi * 0.07}s, transform 0.4s ease ${0.32 + bi * 0.07}s`,
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: isActive ? "#fff" : "#cc0000",
                            flexShrink: 0,
                            transition: "background 0.3s ease",
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Collapsed hint */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginTop: "auto",
                      paddingTop: "1.2rem",
                      opacity: isActive ? 0 : 0.45,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                  >
                    <span style={{ color: "#999", fontSize: "0.72rem" }}>
                      Haz clic para ver
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#999"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {PANELS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? "28px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: active === i ? "#cc0000" : "#ddd",
                border: "none",
                cursor: "pointer",
                transition: "width 0.4s ease, background 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
