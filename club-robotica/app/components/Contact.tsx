"use client";

import { useState, useEffect, useRef } from "react";

const INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Dirección",
    value: "Prol. Paseo de la Reforma 880, Lomas de Santa Fe, CDMX",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Correo",
    value: "club.robotica@ibero.mx",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Teléfono",
    value: "+52 55 5950 4000",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    label: "Redes Sociales",
    value: "@ClubRoboticaIbero",
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
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

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", carrera: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const { ref, visible } = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Únete</p>
          <h2 className="section-title mb-4">
            <span className="shimmer-dark">Contác</span>
            <span className="shimmer-red">tanos</span>
          </h2>
          <p className="section-subtitle">
            ¿Quieres unirte al club o tienes preguntas? Escríbenos y nos ponemos en contacto contigo.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {INFO.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "#fafafa",
                    border: "1.5px solid #f0f0f0",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(204,0,0,0.1)", color: "#cc0000" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-gray-800 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-8 shadow-sm"
            style={{
              border: "1.5px solid #f0f0f0",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(204,0,0,0.08)" }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Gracias por tu interés. Nos ponemos en contacto contigo pronto.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-bold transition-opacity hover:opacity-70"
                  style={{ color: "#cc0000" }}
                >
                  Enviar otro mensaje →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Envíanos un mensaje</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1.5">
                      Correo
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@ibero.mx"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1.5">
                    Carrera
                  </label>
                  <input
                    type="text"
                    placeholder="Ingeniería en Sistemas, Mecatrónica..."
                    value={form.carrera}
                    onChange={(e) => setForm({ ...form, carrera: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="¿Por qué quieres unirte al club?"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="form-input resize-none"
                    style={{ resize: "none" }}
                  />
                </div>
                <button type="submit" className="btn-red w-full mt-1">
                  Enviar mensaje
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "8px" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
