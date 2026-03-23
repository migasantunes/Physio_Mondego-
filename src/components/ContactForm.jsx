import { Phone, Mail, MapPin, Send } from "lucide-react";
import content from "@/data/content.json";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Fale <span className="text-emerald-600">connosco</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tem dúvidas ou quer marcar uma sessão? Entre em contacto — estamos
            aqui para ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info — Left */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Phone card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-emerald-200 transition-all duration-300 hover:shadow-md cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors duration-200">
                  <Phone className="size-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    Telefone
                  </h3>
                  <a
                    href={`tel:${content.telefone}`}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200"
                  >
                    {content.telefone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-emerald-200 transition-all duration-300 hover:shadow-md cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors duration-200">
                  <Mail className="size-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${content.email}`}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200"
                  >
                    {content.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-emerald-200 transition-all duration-300 hover:shadow-md cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors duration-200">
                  <MapPin className="size-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    Morada
                  </h3>
                  <a
                    href={content.redes.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-emerald-600 text-sm leading-relaxed transition-colors duration-200"
                  >
                    {content.morada}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form — Right */}
          <div className="lg:col-span-3">
            <form
              action="https://formspree.io/f/COLOQUEM_O_ID_AQUI"
              method="POST"
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="O seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="email@exemplo.pt"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-medium text-foreground"
                >
                  Telefone{" "}
                  <span className="text-muted-foreground font-normal">
                    (opcional)
                  </span>
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="+351 9XX XXX XXX"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Descreva brevemente o motivo do seu contacto..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-200 resize-none"
                />
              </div>

              {/* RGPD consent */}
              <div className="flex items-start gap-3 mb-6">
                <input
                  id="rgpd_consent"
                  name="rgpd_consent"
                  type="checkbox"
                  required
                  className="mt-1 size-4 cursor-pointer accent-emerald-600"
                />
                <label
                  htmlFor="rgpd_consent"
                  className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                >
                  Aceito a{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-2 transition-colors duration-200"
                  >
                    Política de Privacidade
                  </a>{" "}
                  e consinto o tratamento dos meus dados pessoais para efeitos
                  de resposta ao meu pedido de contacto.
                </label>
              </div>

              <button
                type="submit"
                className="group w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                Enviar mensagem
                <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}