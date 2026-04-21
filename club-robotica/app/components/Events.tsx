const events = [
  {
    day: "25",
    month: "ABR",
    year: "2026",
    title: "Taller de Arduino para Principiantes",
    desc: "Aprende los fundamentos de Arduino desde cero: sensores, actuadores y programación básica.",
    location: "Lab de Electrónica, IBERO CDMX",
    type: "Taller",
    typeColor: "#1a6e1a",
    spots: "30 lugares",
  },
  {
    day: "15",
    month: "MAY",
    year: "2026",
    title: "Competencia Nacional de Robótica 2026",
    desc: "Representamos a la Universidad Iberoamericana en la competencia más importante del año.",
    location: "Campus Monterrey, NL",
    type: "Competencia",
    typeColor: "#cc0000",
    spots: "Inscripción abierta",
  },
  {
    day: "03",
    month: "JUN",
    year: "2026",
    title: "Hackathon Ibero: Robots para el Bien",
    desc: "48 horas para construir robots que resuelvan problemas reales en comunidades vulnerables.",
    location: "Auditorio Principal, IBERO CDMX",
    type: "Hackathon",
    typeColor: "#0055aa",
    spots: "50 lugares",
  },
  {
    day: "18",
    month: "JUN",
    year: "2026",
    title: "Simposio de IA y Robótica",
    desc: "Expertos nacionales e internacionales presentan los últimos avances en inteligencia artificial aplicada.",
    location: "Auditorio Principal, IBERO CDMX",
    type: "Simposio",
    typeColor: "#7a3aaa",
    spots: "Acceso libre",
  },
];

export default function Events() {
  return (
    <section id="eventos" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#cc0000" }}
          >
            Agenda
          </p>
          <h2 className="section-title mb-4">Próximos Eventos</h2>
          <p className="section-subtitle">
            Talleres, competencias y simposios para aprender, competir y conectar
            con la comunidad tecnológica.
          </p>
        </div>

        {/* Events list */}
        <div className="flex flex-col gap-5">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="card-hover flex flex-col sm:flex-row gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              {/* Date box */}
              <div
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex flex-col items-center justify-center text-white shadow-md"
                style={{ backgroundColor: "#cc0000" }}
              >
                <span className="text-2xl font-extrabold leading-none">{ev.day}</span>
                <span className="text-xs font-bold tracking-wider mt-0.5">{ev.month}</span>
                <span className="text-xs opacity-80">{ev.year}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: ev.typeColor }}
                  >
                    {ev.type}
                  </span>
                  <span className="text-gray-400 text-xs">{ev.spots}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{ev.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{ev.desc}</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {ev.location}
                </div>
              </div>

              {/* CTA */}
              <div className="flex sm:flex-col justify-end items-end gap-2 flex-shrink-0">
                <a
                  href="#contacto"
                  className="px-5 py-2 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#cc0000" }}
                >
                  Registrarse
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
