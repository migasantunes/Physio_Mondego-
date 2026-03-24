import { Phone, Mail, MapPin, Facebook, Map, ArrowUpRight } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">PM</span>
              </div>
              <div>
                <span className="font-bold text-lg text-white">
                  {content.nome}
                </span>
              </div>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed max-w-md mb-6">
              Unidade privada de Fisioterapia e Osteopatia em Coimbra,
              especializada em reabilitação, alívio da dor e otimização do
              desempenho físico. Tratamentos personalizados por profissionais
              experientes.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={content.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 cursor-pointer group"
                aria-label="Facebook"
              >
                <Facebook className="size-4 text-blue-200/70 group-hover:text-white transition-colors duration-200" />
              </a>
              <a
                href={content.redes.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 cursor-pointer group"
                aria-label="Google Maps"
              >
                <Map className="size-4 text-blue-200/70 group-hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm text-white/90 uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Testemunhos", href: "#testemunhos" },
                { label: "Horários", href: "#horarios" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-sm text-white/90 uppercase tracking-wider mb-4">
              Contactos
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${content.telefone}`}
                  className="flex items-center gap-3 text-sm text-blue-200/60 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  <Phone className="size-4 shrink-0" />
                  <span>{content.telefone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.email}`}
                  className="flex items-center gap-3 text-sm text-blue-200/60 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  <Mail className="size-4 shrink-0" />
                  <span>{content.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={content.redes.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-blue-200/60 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  <MapPin className="size-4 mt-0.5 shrink-0" />
                  <span>{content.morada}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200/40">
            © {new Date().getFullYear()} {content.nome}. Todos os direitos
            reservados.
          </p>
          <a
            href="/privacy"
            className="text-xs text-blue-200/40 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1"
          >
            Política de Privacidade
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
