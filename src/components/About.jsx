import { Check, Heart, Award, Users } from "lucide-react";
import content from "@/data/content.json";

export default function About() {
  const { sobre } = content;

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text content */}
          <div>
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {sobre.headline}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {sobre.texto}
            </p>

            <ul className="flex flex-col gap-4">
              {sobre.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="size-3.5 text-emerald-600" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="size-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="size-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Atendimento personalizado
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="size-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Award className="size-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">
                Avaliação em Google Maps
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer col-span-2">
              <div className="size-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Users className="size-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                Equipa Multidisciplinar
              </div>
              <div className="text-sm text-muted-foreground">
                Fisioterapeutas e Osteopatas com formação avançada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
