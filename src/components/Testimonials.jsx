import { Star, Quote, MapPin, Calendar } from "lucide-react";
import content from "@/data/content.json";

const originIcons = {
  "Google Maps": MapPin,
  Fresha: Calendar,
};

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Testemunhos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O que dizem os nossos{" "}
            <span className="text-emerald-600">pacientes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A satisfação de quem nos escolhe é o melhor indicador da qualidade
            do nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testemunhos.map((testemunho, index) => {
            const OriginIcon = originIcons[testemunho.origem] || MapPin;
            return (
              <article
                key={index}
                className="group relative bg-card rounded-2xl p-7 border border-border hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 cursor-pointer"
              >
                {/* Quote icon */}
                <Quote className="size-8 text-emerald-200 mb-4" />

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testemunho.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="size-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testemunho.texto}&rdquo;
                </blockquote>

                {/* Author and origin */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-700 font-semibold text-sm">
                        {testemunho.nome.charAt(0)}
                      </span>
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {testemunho.nome}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <OriginIcon className="size-3.5" />
                    <span>{testemunho.origem}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
