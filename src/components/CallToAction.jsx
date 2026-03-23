import { ArrowRight, Sparkles } from "lucide-react";
import content from "@/data/content.json";

export default function CallToAction() {
  const { call_to_action } = content;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/90 font-medium mb-6 border border-white/20">
              <Sparkles className="size-4" />
              <span>A sua recuperação começa aqui</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {call_to_action.headline}
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              {call_to_action.texto}
            </p>

            <a
              href={call_to_action.ctaHref}
              className="group inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-0.5"
            >
              {call_to_action.ctaLabel}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
