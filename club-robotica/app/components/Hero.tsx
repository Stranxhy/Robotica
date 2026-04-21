export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-bg relative flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      {/* Badge */}
      <div
        className="mb-6 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-white"
        style={{ backgroundColor: "rgba(180,0,0,0.75)", backdropFilter: "blur(4px)" }}
      >
        Universidad Iberoamericana
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
        Innovando el Futuro
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed">
        Diseña, construye y programa robots que cambiarán el mundo
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#proyectos"
          className="px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 shadow-lg"
          style={{ backgroundColor: "#cc0000" }}
        >
          Ver Proyectos
        </a>
        <a
          href="#nosotros"
          className="px-8 py-3.5 rounded-full text-sm font-bold text-white border-2 border-white/70 hover:bg-white hover:text-red-700 transition-all duration-200"
        >
          Conoce el Club
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-white/60 text-xs tracking-widest uppercase">Scroll</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
