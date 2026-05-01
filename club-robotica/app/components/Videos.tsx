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

function useInView(threshold = 0.1) {
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
  const [hovered, setHovered] = useState<number | null>(null);
  const [featured, setFeatured] = useState(0);
  const { ref, visible } = useInView();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const mainVideo = VIDEOS[featured];
  const sideVideos = VIDEOS.filter((_, i) => i !== featured);

  return (
    <>
      <section id="videos" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="section-label">Contenido</p>
            <h2 className="section-title">Robótica en Acción</h2>
          </div>

          {/* Layout: featured + sidebar */}
          <div
            ref={ref}
            className="grid md:grid-cols-3 gap-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Featured card */}
            <button
              className="md:col-span-2 relative rounded-2xl overflow-hidden text-left cursor-pointer"
              style={{
                aspectRatio: "16/9",
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onClick={() => setActiveVideo(mainVideo.id)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.015)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 20px 60px rgba(204,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.18)";
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${mainVideo.id}/maxresdefault.jpg`}
                alt={mainVideo.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${mainVideo.id}/hqdefault.jpg`;
                }}
              />
              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                }}
              />
              {/* Red top accent */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#cc0000" }} />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(204,0,0,0.9)",
                    boxShadow: "0 0 0 8px rgba(204,0,0,0.2)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "4px" }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration */}
              <div
                className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-bold"
                style={{ background: "rgba(0,0,0,0.75)", color: "white", backdropFilter: "blur(4px)" }}
              >
                {mainVideo.duration}
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wider uppercase mb-3"
                  style={{ background: "#cc0000", color: "white" }}
                >
                  {mainVideo.category}
                </span>
                <h3
                  className="text-white font-black leading-tight mb-2"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", letterSpacing: "-0.02em" }}
                >
                  {mainVideo.title}
                </h3>
                <p className="text-white/60 text-sm leading-snug">{mainVideo.desc}</p>
              </div>
            </button>

            {/* Sidebar: small cards */}
            <div className="flex flex-col gap-4">
              {/* "En la lista" label */}
              <div className="flex items-center gap-2 px-1">
                <div style={{ width: "3px", height: "16px", background: "#cc0000", borderRadius: "2px" }} />
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#999",
                  }}
                >
                  A continuación
                </span>
              </div>

              {sideVideos.map((video, i) => {
                const originalIndex = VIDEOS.indexOf(video);
                return (
                  <button
                    key={video.id}
                    onClick={() => setFeatured(originalIndex)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex gap-3 text-left rounded-xl overflow-hidden group"
                    style={{
                      background: hovered === i ? "#f9f9f9" : "transparent",
                      border: "1.5px solid",
                      borderColor: hovered === i ? "#f0f0f0" : "transparent",
                      padding: "10px",
                      transition: "background 0.2s ease, border-color 0.2s ease",
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative rounded-lg overflow-hidden flex-shrink-0"
                      style={{ width: "120px", height: "68px" }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        style={{
                          transform: hovered === i ? "scale(1.06)" : "scale(1)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: hovered === i ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.2)",
                          transition: "background 0.2s ease",
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            background: hovered === i ? "#cc0000" : "rgba(255,255,255,0.85)",
                            transition: "background 0.2s ease",
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill={hovered === i ? "white" : "#111"} style={{ marginLeft: "2px" }}>
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Duration */}
                      <div
                        className="absolute bottom-1 right-1 px-1 rounded text-white"
                        style={{ fontSize: "0.6rem", fontWeight: 700, background: "rgba(0,0,0,0.75)" }}
                      >
                        {video.duration}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center min-w-0">
                      <span
                        className="inline-block px-1.5 py-0.5 rounded text-white mb-1"
                        style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#cc0000", width: "fit-content" }}
                      >
                        {video.category}
                      </span>
                      <p
                        className="font-bold text-gray-900 leading-tight"
                        style={{ fontSize: "0.8rem", letterSpacing: "-0.01em" }}
                      >
                        {video.title}
                      </p>
                      <p
                        className="text-gray-400 mt-0.5 leading-snug line-clamp-2"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {video.desc}
                      </p>
                    </div>
                  </button>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(16px)" }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-11 right-0 flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "white")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)")}
              onClick={() => setActiveVideo(null)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
