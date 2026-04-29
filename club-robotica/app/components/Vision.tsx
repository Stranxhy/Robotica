"use client";

import { useEffect, useRef, useState } from "react";

const PANELS = [
  {
    key: "vision",
    number: "01",
    label: "Visión",
    word: "VISIÓN",
    heading: "Nuestra\nVisión",
    subheading: "A dónde vamos",
    text: "Ser el club de robótica referente de México, formando ingenieros e innovadores capaces de diseñar tecnología que resuelva los grandes retos de la humanidad.",
    bullets: [
      "Competencias internacionales de robótica",
      "Investigación de impacto global publicada",
      "Alumni en las mejores empresas de tecnología",
      "Laboratorio equipado de última generación",
    ],
  },
  {
    key: "mision",
    number: "02",
    label: "Misión",
    word: "MISIÓN",
    heading: "Nuestra\nMisión",
    subheading: "Por qué existimos",
    text: "Crear un espacio interdisciplinario donde estudiantes de todas las carreras aprendan robótica, programación e inteligencia artificial mediante proyectos reales.",
    bullets: [
      "Talleres semanales de electrónica y software",
      "Proyectos reales con impacto en el campus",
      "Mentorías de ingenieros en la industria",
      "Comunidad activa de más de 50 miembros",
    ],
  },
];

function useInView() {
  const ref = useRef<HTMLElement>(null);
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
  const [fading, setFading] = useState(false);
  const { ref, visible } = useInView();

  const switchTab = (i: number) => {
    if (i === active || fading) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 220);
  };

  const panel = PANELS[active];

  return (
    <section ref={ref} id="vision" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Tab switcher ───────────────────────────────── */}
        <div
          style={{
            display: "flex",
            borderBottom: "2px solid #efefef",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          {PANELS.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={p.key}
                onClick={() => switchTab(i)}
                style={{
                  flex: 1,
                  padding: "1.5rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? "3px solid #cc0000" : "3px solid transparent",
                  marginBottom: "-2px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "border-color 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    color: isActive ? "#cc0000" : "#ccc",
                    transition: "color 0.3s ease",
                  }}
                >
                  {p.number}
                </span>
                <span
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: isActive ? "#111" : "#bbb",
                    transition: "color 0.3s ease",
                  }}
                >
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Content area ───────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
            opacity: fading ? 0 : (visible ? 1 : 0),
            transform: fading ? "translateY(10px)" : (visible ? "translateY(0)" : "translateY(28px)"),
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          {/* Left — heading + body */}
          <div>
            {/* Ghost word */}
            <div
              style={{
                fontSize: "clamp(5rem, 12vw, 10rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                color: "rgba(204,0,0,0.055)",
                lineHeight: 1,
                marginBottom: "-2rem",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {panel.word}
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.045em",
                lineHeight: 1.02,
                color: "#111",
                marginBottom: "1.5rem",
                whiteSpace: "pre-line",
              }}
            >
              {panel.heading}
            </h2>

            {/* Sub label */}
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#cc0000",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "28px",
                  height: "2px",
                  background: "#cc0000",
                  borderRadius: "2px",
                }}
              />
              {panel.subheading}
            </p>

            {/* Body */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#666",
                maxWidth: "420px",
              }}
            >
              {panel.text}
            </p>
          </div>

          {/* Right — decorative number + numbered list */}
          <div style={{ paddingTop: "1rem" }}>
            {/* Big decorative number */}
            <div
              style={{
                fontSize: "clamp(6rem, 14vw, 11rem)",
                fontWeight: 900,
                letterSpacing: "-0.06em",
                color: "rgba(204,0,0,0.07)",
                lineHeight: 1,
                marginBottom: "1.75rem",
                fontFamily: "monospace",
              }}
            >
              {panel.number}
            </div>

            {/* Numbered bullet list */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {panel.bullets.map((b, bi) => (
                <div
                  key={bi}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    padding: "1rem 0",
                    borderBottom: bi < panel.bullets.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateX(0)"
                      : "translateX(24px)",
                    transition: `opacity 0.5s ease ${0.25 + bi * 0.09}s, transform 0.5s ease ${0.25 + bi * 0.09}s`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#cc0000",
                      fontFamily: "monospace",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    {String(bi + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.97rem",
                      fontWeight: 500,
                      color: "#333",
                      lineHeight: 1.55,
                    }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
