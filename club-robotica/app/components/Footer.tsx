"use client";

const footerLinks = {
  Club: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Eventos", href: "#eventos" },
  ],
  Recursos: [
    { label: "Tutoriales", href: "#" },
    { label: "Biblioteca", href: "#" },
    { label: "Galería", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Comunidad: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "https://www.youtube.com/@JADAROBOTICS" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111" }} className="text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <img 
                  src="/img/logo_blanco.png" 
                  alt="Logo Club de Robótica IBERO"
                  className="w-14 h-14 object-contain" 
                />
              </div>
              <div>
                <p className="font-bold text-base leading-tight uppercase tracking-wider text-white">
                  Club de<br />Robótica
                </p>
                <p className="text-gray-400 text-xs leading-tight">Univ. Iberoamericana</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Diseñando el futuro tecnológico desde la Universidad Iberoamericana, Ciudad de México.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { id: "instagram", href: "#" },
                { id: "youtube", href: "https://www.youtube.com/@JADAROBOTICS" },
                { id: "github", href: "#" },
              ].map(({ id: social, href }) => (
                <a
                  key={social}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#cc0000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    {social === "instagram" && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                      </>
                    )}
                    {social === "youtube" && (
                      <>
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                      </>
                    )}
                    {social === "github" && (
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Club de Robótica — Universidad Iberoamericana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}