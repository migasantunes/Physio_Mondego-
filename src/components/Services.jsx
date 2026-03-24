import {
  Activity,
  Hand,
  Bone,
  Dumbbell,
  ChevronRight,
  Check,
} from "lucide-react";
import content from "@/data/content.json";

const serviceIcons = {
  "fisioterapia-musculo-esqueletica": Activity,
  osteopatia: Hand,
  "quiropraxia-manipulacao-articular": Bone,
  "massagem-terapeutica-e-desportiva": Dumbbell,
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Os Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tratamentos especializados para a sua{" "}
            <span className="text-blue-600">recuperação</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Na Physio Mondego oferecemos um leque completo de serviços de
            fisioterapia, osteopatia e reabilitação, sempre adaptados às suas
            necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.servicos.map((servico, index) => {
            const Icon = serviceIcons[servico.slug] || Activity;
            return (
              <article
                key={servico.slug}
                className="group relative bg-card rounded-2xl p-7 border border-border hover:border-blue-200 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-blue-100">
                  <Icon className="size-6 text-blue-600" />
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {servico.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {servico.descricao}
                </p>

                {/* Benefits */}
                <ul className="flex flex-col gap-2.5">
                  {servico.beneficios.map((beneficio, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check className="size-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow indicator */}
                <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                  <ChevronRight className="size-5 text-blue-500" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}