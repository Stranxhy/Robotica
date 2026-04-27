"use client";

import { useState, useEffect, useRef } from "react";

const VIDEOS = [
  {
    id: "fn3KWM1kuAw",
    title: "¿Nos Amas?",
    desc: "Boston Dynamics – robótica bípeda y cuadrúpeda de vanguardia",
    category: "Robótica Avanzada",
    duration: "2:44",
  },
  {
    id: "LikxFZZO2sk",
    title: "¿Qué hay de nuevo, Atlas?",
    desc: "Capacidades de movimiento y equilibrio de última generación",
    category: "IA & Movimiento",
    duration: "1:08",
  },
  {
    id: "tF4DML7FIWk",
    title: "Parkour con Atlas",
    desc: "Robot autónomo superando obstáculos en tiempo real",
    category: "Autonomía",
    duration: "0:58",
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

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, visible } = useInView();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section
        id="videos"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          {/* Cards */}
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {VIDEOS.map((video, i) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative rounded-2xl overflow-hidden text-left cursor-pointer group"
                style={{
                  aspectRatio: "16/9",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.97)",
                  transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s, box-shadow 0.3s ease`,
                  boxShadow:
                    hoveredCard === i
                      ? "0 28px 70px rgba(204,0,0,0.45), 0 0 0 2px rgba(204,0,0,0.65)"
                      : "0 4px 24px rgba(0,0,0,0.5)",
                }}
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: hoveredCard === i ? "scale(1.07)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      hoveredCard === i
                        ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 100%)",
                    transition: "background 0.3s ease",
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        hoveredCard === i ? "#cc0000" : "rgba(255,255,255,0.12)",
                      transform: hoveredCard === i ? "scale(1.2)" : "scale(1)",
                      transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                      backdropFilter: "blur(8px)",
                      border:
                        hoveredCard === i
                          ? "none"
                          : "2px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: "3px" }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "white",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {video.duration}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-bold tracking-wider uppercase mb-2"
                    style={{ background: "rgba(204,0,0,0.85)", color: "white" }}
                  >
                    {video.category}
                  </span>
                  <h3 className="text-white font-bold text-sm leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-white/55 text-xs mt-1 leading-snug">
                    {video.desc}
                  </p>
                </div>

                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow:
                      hoveredCard === i
                        ? "inset 0 0 0 2px rgba(204,0,0,0.7)"
                        : "inset 0 0 0 2px transparent",
                    transition: "box-shadow 0.3s ease",
                  }}
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.93)",
            backdropFilter: "blur(14px)",
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-11 right-0 flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "white")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.7)")
              }
              onClick={() => setActiveVideo(null)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Cerrar (Esc)
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full rounded-2xl"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
