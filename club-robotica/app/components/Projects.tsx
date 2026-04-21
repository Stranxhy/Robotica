"use client";

const projects = [
  {
    title: "Robot Seguidor de Línea",
    category: "Automatización",
    desc: "Robot autónomo con sensores infrarrojos capaz de seguir trayectorias complejas a alta velocidad.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    tag: "Competencia",
    tagColor: "#cc0000",
  },
  {
    title: "Brazo Robótico",
    category: "Mecatrónica",
    desc: "Brazo articulado de 6 grados de libertad controlado por Arduino con interfaz de usuario personalizada.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    tag: "Proyecto",
    tagColor: "#1a6e1a",
  },
  {
    title: "Dron Autónomo",
    category: "Visión Artificial",
    desc: "Dron equipado con cámara y algoritmos de visión por computadora para navegación sin piloto.",
    img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&q=80",
    tag: "Investigación",
    tagColor: "#0055aa",
  },
  {
    title: "Robot de Sumo",
    category: "Competencia",
    desc: "Robot de combate diseñado para competencias de sumo, optimizado en peso, tracción y estrategia.",
    img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&q=80",
    tag: "Competencia",
    tagColor: "#cc0000",
  },
  {
    title: "Estación Meteorológica IoT",
    category: "IoT",
    desc: "Red de sensores distribuidos que monitorea temperatura, humedad y calidad del aire en el campus.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tag: "Campus",
    tagColor: "#7a3aaa",
  },
  {
    title: "Exoesqueleto de Mano",
    category: "Bioingeniería",
    desc: "Dispositivo de asistencia para rehabilitación de movilidad en mano, controlado con señales EMG.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
    tag: "Investigación",
    tagColor: "#0055aa",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#cc0000" }}
          >
            Nuestro trabajo
          </p>
          <h2 className="section-title mb-4">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Desde robots autónomos hasta dispositivos biomédicos — exploramos
            el límite de lo posible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80";
                  }}
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold"
                  style={{ backgroundColor: p.tagColor }}
                >
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "#cc0000" }}
                >
                  {p.category}
                </p>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold border-2 transition-all duration-200 hover:text-white"
            style={{
              borderColor: "#cc0000",
              color: "#cc0000",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#cc0000";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#cc0000";
            }}
          >
            Ver todos los proyectos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
