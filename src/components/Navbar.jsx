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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Logotype image. Guarde a imagem enviada como 'logo.png' na pasta 'public' do projeto */}
            <div className="h-12 w-12 relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105 rounded-xl overflow-hidden ring-2 ring-white/20 shadow-md bg-white">
               <img src="/logo.png" alt="Logotipo Physio Mondego" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
              >
                {content.nome}
              </span>
              <span
                className={`text-xs leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-blue-600" : "text-blue-200"
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
                className={`px-3 py-2 rounded-lg text-[15px] tracking-wide font-normal transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? "text-foreground/80 hover:text-blue-700 hover:bg-blue-50/50"
                    : "text-white/80 hover:text-white"
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
                  ? "text-blue-700 hover:text-blue-800"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              <Phone className="size-4" />
              {content.telefone}
            </a>
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
            >
              Marcar sessão
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
              isScrolled
                ? "text-foreground hover:bg-blue-50"
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
          <div className="flex flex-col gap-1 pt-2 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-blue-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/70 hover:text-blue-700 hover:bg-blue-50 text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-blue-100 pt-3 mt-2 flex flex-col gap-2">
              <a
                href={`tel:${content.telefone}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-blue-700 font-medium cursor-pointer"
              >
                <Phone className="size-4" />
                {content.telefone}
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMobileOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-200 cursor-pointer"
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
