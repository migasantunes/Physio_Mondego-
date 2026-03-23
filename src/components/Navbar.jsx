"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import content from "@/data/content.json";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Horários", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="size-9 rounded-lg bg-emerald-600 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-emerald-900" : "text-white"
                }`}
              >
                {content.nome}
              </span>
              <span
                className={`text-xs leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-emerald-600" : "text-emerald-200"
                }`}
              >
                {content.localizacao_curta}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? "text-foreground/70 hover:text-emerald-700 hover:bg-emerald-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${content.telefone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isScrolled
                  ? "text-emerald-700 hover:text-emerald-800"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              <Phone className="size-4" />
              {content.telefone}
            </a>
            <a
              href="#contacto"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-0.5"
            >
              Marcar sessão
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
              isScrolled
                ? "text-foreground hover:bg-emerald-50"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-emerald-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/70 hover:text-emerald-700 hover:bg-emerald-50 text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-emerald-100 pt-3 mt-2 flex flex-col gap-2">
              <a
                href={`tel:${content.telefone}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-emerald-700 font-medium cursor-pointer"
              >
                <Phone className="size-4" />
                {content.telefone}
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMobileOpen(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-200 cursor-pointer"
              >
                Marcar sessão
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
