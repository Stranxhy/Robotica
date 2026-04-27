"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Visión", href: "#vision" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Videos", href: "#videos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: "#cc0000" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl py-1" : "py-2"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo Section */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <img 
              src="/img/logo_blanco.png" 
              alt="Logo Club de Robótica"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-white font-bold text-sm md:text-base leading-tight uppercase tracking-tight">
              Club de Robótica
            </p>
            <p className="text-red-100 text-[10px] md:text-xs leading-tight opacity-90">
              Universidad Iberoamericana
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-white/80 hover:text-white text-[13px] font-medium uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-red-700 bg-white hover:bg-red-50 transition-all duration-200 shadow-lg"
          >
            Únete al Club
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-md transition-colors hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#b30000" }}
          className="lg:hidden px-6 pb-8 border-t border-white/10"
        >
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-white/90 hover:text-white font-semibold py-2 text-sm uppercase tracking-widest"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                className="inline-block w-full text-center px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest bg-white text-red-700 shadow-xl"
                onClick={() => setMenuOpen(false)}
              >
                Únete al Club
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}