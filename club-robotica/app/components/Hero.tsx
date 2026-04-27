"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i * 3.7 + 2) % 100,
  size: (i % 3) + 2,
  duration: 12 + (i % 8),
  delay: -(i * 0.55),
}));

const CODE_LINES = [
  { text: "$ robot.initialize()", color: "text-green-400" },
  { text: "  Calibrating servos... OK", color: "text-white/50" },
  { text: "  Connecting sensors... OK", color: "text-white/50" },
  { text: "  Loading AI model... OK", color: "text-white/50" },
  { text: "$ robot.start()", color: "text-green-400" },
  { text: "  > SISTEMA LISTO ✓", color: "text-red-400 font-bold" },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalLines, setTerminalLines] = useState<number>(-1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Typing animation — cursor desaparece al terminar
  useEffect(() => {
    const fullText = "Innovando el Futuro";
    let i = 0;
    setTypedText("");
    setTypingDone(false);
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTypingDone(true);
        }
      }, 85);
      return () => clearInterval(timer);
    }, 500);
    return () => clearTimeout(delay);
  }, []);

  // Terminal animation
  useEffect(() => {
    let lineIndex = 0;
    const addLine = () => {
      setTerminalLines(lineIndex);
      lineIndex++;
      if (lineIndex < CODE_LINES.length) {
        setTimeout(addLine, 550);
      }
    };
    const t = setTimeout(addLine, 1600);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax
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
      className="hero-bg relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
    >
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse 700px 500px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(204,0,0,0.2) 0%, transparent 65%)`,
        }}
      />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translate(${dx * 12}px, ${dy * 12}px)`,
          transition: "transform 0.12s ease",
        }}
      />

      {/* Floating particles */}
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
              background: "rgba(255,255,255,0.22)",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(204,0,0,0.22) 0%, transparent 70%)",
            transform: `translate(${dx * 32}px, ${dy * 22}px)`,
            transition: "transform 0.15s ease",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-120px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(204,0,0,0.18) 0%, transparent 70%)",
            transform: `translate(${dx * -28}px, ${dy * -18}px)`,
            transition: "transform 0.15s ease",
          }}
        />
        {/* Circuit board icon top-right */}
        <svg
          className="absolute"
          style={{
            top: "10%",
            right: "7%",
            opacity: 0.1,
            transform: `translate(${dx * -22}px, ${dy * 16}px)`,
            transition: "transform 0.2s ease",
          }}
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 6V4M10 6V4M14 6V4M18 6V4" />
          <path d="M6 18v2M10 18v2M14 18v2M18 18v2" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
        </svg>
        {/* Gear icon bottom-left */}
        <svg
          className="absolute hero-spin-slow"
          style={{
            bottom: "14%",
            left: "5%",
            opacity: 0.08,
          }}
          width="110"
          height="110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Main content with parallax */}
      <div
        className="relative z-20 flex flex-col items-center"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translate(${dx * -10}px, ${dy * -10}px)`,
          transition: "opacity 1s ease, transform 0.15s ease",
        }}
      >
        <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-5">
          Club de Robótica · Ibero
        </p>

        <h1
          className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg select-none"
          style={{ minHeight: "1.2em" }}
        >
          {typedText}
          {/* Cursor sólo visible mientras se está escribiendo */}
          {!typingDone && (
            <span style={{ color: "#cc0000" }}>|</span>
          )}
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          style={{
            transform: `translate(${dx * -5}px, ${dy * -5}px)`,
            transition: "transform 0.2s ease",
          }}
        >
          Diseña, construye y programa robots que cambiarán el mundo
        </p>

        {/* Terminal widget */}
        <div
          className="text-left rounded-xl overflow-hidden shadow-2xl w-full max-w-xs"
          style={{
            background: "rgba(0,0,0,0.72)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.1)",
            transform: `translate(${dx * -6}px, ${dy * -6}px)`,
            transition: "transform 0.2s ease",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span className="text-white/35 text-xs ml-2 font-mono">robot.sh</span>
          </div>
          <div className="px-4 py-3 font-mono text-xs min-h-[112px]">
            {CODE_LINES.slice(0, terminalLines + 1).map((line, i) => (
              <div key={i} className={line.color}>
                {line.text}
              </div>
            ))}
            {terminalLines >= 0 && terminalLines < CODE_LINES.length - 1 && (
              <span className="text-green-400 hero-blink">█</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
