import { Clock, Phone, AlertCircle } from "lucide-react";
import content from "@/data/content.json";

const days = [
  { label: "Segunda a Sexta", key: "seg_sex" },
  { label: "Sábado", key: "sabado" },
  { label: "Domingo", key: "domingo" },
];

export default function Schedule() {
  const { horarios } = content;

  return (
    <section id="horarios" className="py-20 lg:py-28 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Horários
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quando nos pode{" "}
              <span className="text-blue-600">visitar</span>
            </h2>
          </div>

          {/* Schedule card */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-blue-600 px-6 py-4 flex items-center gap-3">
              <Clock className="size-5 text-white" />
              <h3 className="text-white font-semibold">
                Horário de Funcionamento
              </h3>
            </div>

            {/* Schedule rows */}
            <div className="divide-y divide-border">
              {days.map(({ label, key }) => {
                const hours = horarios[key];
                const isClosed = hours === "Encerrado";
                return (
                  <div
                    key={key}
                    className="flex items-center justify-between px-6 py-5 hover:bg-blue-50/50 transition-colors duration-200"
                  >
                    <span className="font-medium text-foreground">{label}</span>
                    <span
                      className={`font-semibold text-sm px-3 py-1.5 rounded-lg ${
                        isClosed
                          ? "bg-red-50 text-red-600"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Note */}
            {horarios.nota && (
              <div className="px-6 py-4 bg-amber-50/80 border-t border-amber-100 flex items-start gap-3">
                <AlertCircle className="size-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  {horarios.nota}
                </p>
              </div>
            )}
          </div>

          {/* Phone CTA */}
          <div className="text-center mt-8">
            <a
              href={`tel:${content.telefone}`}
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-colors duration-200 cursor-pointer"
            >
              <Phone className="size-4" />
              Ligue para {content.telefone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
