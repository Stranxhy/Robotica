"use client";

import { useState } from "react";

const values = [
  {
    id: "equipo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trabajo en Equipo",
    desc: "Colaboramos juntos para superar desafíos complejos y lograr resultados extraordinarios. En el club, nadie trabaja solo; la sinergia entre diferentes habilidades es lo que nos hace fuertes.",
  },
  {
    id: "innovacion",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Innovación",
    desc: "Exploramos nuevas tecnologías y metodologías para mantenernos a la vanguardia. No solo seguimos manuales, buscamos crear soluciones que antes no existían.",
  },
  {
    id: "aprendizaje",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Aprendizaje",
    desc: "Fomentamos una cultura de aprendizaje continuo en robótica, programación y electrónica. Aquí, fallar en un prototipo es solo el primer paso para entender cómo funciona realmente.",
  },
  {
    id: "compromiso",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Compromiso",
    desc: "Dedicamos tiempo y esfuerzo a cada proyecto con disciplina y pasión. Nuestro compromiso va más allá del taller, buscamos impactar positivamente en nuestra comunidad.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="nosotros" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Superior */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#cc0000" }}>
              Quiénes somos
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Sobre el Club
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>Club de Robótica Ibero</strong> es un espacio de alto rendimiento para mentes creativas. Aquí no solo construimos máquinas, diseñamos soluciones.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#cc0000" }}
            >
              Únete ahora
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=800&q=80"
              alt="Robótica Ibero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sistema de Pestañas (Tabs) */}
        <div className="bg-gray-50 rounded-3xl p-4 md:p-8 border border-gray-100 shadow-sm">
          {/* Selectores de Pestaña */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 mb-10 border-b border-gray-200 pb-4">
            {values.map((v, index) => (
              <button
                key={v.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-2 rounded-xl transition-all duration-300 ${
                  activeTab === index 
                    ? "bg-white shadow-md scale-105" 
                    : "hover:bg-gray-200/50 grayscale opacity-60"
                }`}
              >
                <div 
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    activeTab === index ? "bg-[#cc0000] text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {v.icon}
                </div>
                <span className={`font-bold text-sm hidden sm:block ${activeTab === index ? "text-gray-900" : "text-gray-500"}`}>
                  {v.title}
                </span>
              </button>
            ))}
          </div>

          {/* Contenido de la Pestaña Activa */}
          <div className="min-h-[180px] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#cc0000] rounded-full" />
              {values[activeTab].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              {values[activeTab].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}