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
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 6V4M10 6V4M14 6V4M18 6V4" />
              <path d="M6 18v2M10 18v2M14 18v2M18 18v2" />
              <circle cx="8" cy="12" r="1.5" fill="white" stroke="none" />
              <circle cx="12" cy="12" r="1.5" fill="white" stroke="none" />
              <circle cx="16" cy="12" r="1.5" fill="white" stroke="none" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-base leading-tight">
              Club de Robótica
            </p>
            <p className="text-red-200 text-xs leading-tight">
              Universidad Iberoamericana
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white border-2 border-white/60 hover:bg-white hover:text-red-700 transition-all duration-200"
        >
          Únete al Club
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          className="md:hidden px-6 pb-4"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-white/90 hover:text-white font-medium py-1 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="inline-block mt-1 px-4 py-2 rounded-full text-sm font-semibold text-white border-2 border-white/60"
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
