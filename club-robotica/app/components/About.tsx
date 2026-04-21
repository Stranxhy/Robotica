"use client";

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trabajo en Equipo",
    desc: "Colaboramos juntos para superar desafíos complejos y lograr resultados extraordinarios.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Innovación",
    desc: "Exploramos nuevas tecnologías y metodologías para mantenernos a la vanguardia.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Aprendizaje",
    desc: "Fomentamos una cultura de aprendizaje continuo en robótica, programación y electrónica.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Compromiso",
    desc: "Dedicamos tiempo y esfuerzo a cada proyecto con disciplina y pasión por la tecnología.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#cc0000" }}
            >
              Quiénes somos
            </p>
            <h2 className="section-title red-underline mb-6">
              Sobre el Club
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              El <strong>Club de Robótica de la Universidad Iberoamericana</strong> es un
              espacio donde estudiantes apasionados por la tecnología se reúnen para
              diseñar, construir y programar robots. Fomentamos el trabajo en equipo,
              la creatividad y la innovación tecnológica.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Abierto a estudiantes de todas las carreras, nuestro club ofrece talleres,
              competencias nacionales e internacionales, y proyectos de investigación
              aplicada que preparan a nuestros miembros para el futuro tecnológico.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#cc0000" }}
            >
              Únete ahora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-80">
            <img
              src="https://images.unsplash.com/photo-1561144257-e32e8506-4fc5-4fc5-b4fc-54fc54fc54fc?w=800&q=80"
              alt="Estudiantes trabajando en robótica"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80";
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(204,0,0,0.15) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-4 left-4 px-4 py-2 rounded-lg text-white text-sm font-semibold"
              style={{ backgroundColor: "rgba(204,0,0,0.85)", backdropFilter: "blur(4px)" }}
            >
              Ibero CDMX
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-hover p-6 rounded-xl border border-gray-100 bg-gray-50"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(204,0,0,0.1)", color: "#cc0000" }}
              >
                {v.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
