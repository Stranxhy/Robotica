"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&q=80",
  "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=1920&q=80",
];

const CAROUSEL_INTERVAL = 5000;

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 5.1 + 3) % 100,
  size: (i % 3) + 2,
  duration: 14 + (i % 7),
  delay: -(i * 0.7),
}));


export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % CAROUSEL_IMAGES.length),
      CAROUSEL_INTERVAL
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const dx = (mousePos.x - 0.5) * 2;
  const dy = (mousePos.y - 0.5) * 2;

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      {/* ── Carousel background ── */}
      <div className="absolute inset-0">
        {CAROUSEL_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === slide ? 1 : 0,
              transition: "opacity 1.6s ease-in-out",
            }}
          />
        ))}
        {/* Gradient: heavier on left for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.38) 100%)",
          }}
        />
      </div>

      {/* ── Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          transform: `translate(${dx * 10}px, ${dy * 10}px)`,
          transition: "transform 0.14s ease",
        }}
      />

      {/* ── Mouse spotlight ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse 600px 450px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(204,0,0,0.15) 0%, transparent 65%)`,
        }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="hero-particle absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: "-8px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "rgba(255,255,255,0.18)",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Carousel dots ── */}
      <div className="absolute bottom-8 left-16 flex gap-2 z-30">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            style={{
              width: i === slide ? "28px" : "8px",
              height: "4px",
              borderRadius: "9999px",
              background: i === slide ? "#cc0000" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.4s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* ── Prev / Next ── */}
      <button
        onClick={() => setSlide((s) => (s - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)}
        className="absolute left-4 bottom-16 z-30 flex items-center justify-center rounded-full"
        style={{
          width: "36px", height: "36px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(204,0,0,0.7)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => setSlide((s) => (s + 1) % CAROUSEL_IMAGES.length)}
        className="absolute left-12 bottom-16 z-30 flex items-center justify-center rounded-full"
        style={{
          width: "36px", height: "36px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(204,0,0,0.7)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* ── Main content ── */}
      <div
        className="relative z-20 w-full max-w-6xl mx-auto px-8 md:px-16 flex items-center"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translate(${dx * -8}px, ${dy * -8}px)`,
          transition: "opacity 0.9s ease, transform 0.15s ease",
        }}
      >
        <h1
          className="select-none"
          style={{
            fontWeight: 900,
            color: "#fff",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            textAlign: "left",
          }}
        >
          <span style={{ display: "block", fontSize: "clamp(3rem, 8.5vw, 7.5rem)", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
            Diseña.
          </span>
          <span style={{ display: "block", fontSize: "clamp(3rem, 8.5vw, 7.5rem)", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
            Construye.
          </span>
          <span style={{ display: "block", fontSize: "clamp(3rem, 8.5vw, 7.5rem)", color: "#cc0000", textShadow: "0 2px 40px rgba(204,0,0,0.4)" }}>
            Innova.
          </span>
        </h1>
      </div>
    </section>
  );
}
