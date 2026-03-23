import { ArrowRight, ChevronRight, MapPin, Shield, Users, Sparkles } from "lucide-react";
import content from "@/data/content.json";

export default function Hero() {
  const { hero, nome, localizacao_curta } = content;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 size-72 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-emerald-300/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-in">
            {hero.badges.map((badge, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 stagger-${i + 1} ${
                  i === 0
                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                    : "bg-white/5 text-white/70 border-white/10"
                }`}
              >
                {i === 0 && <Shield className="size-3" />}
                {i === 1 && <Users className="size-3" />}
                {i === 2 && <Sparkles className="size-3" />}
                {badge}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in-up">
            {hero.headline.split("Coimbra").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  {hero.headline.includes("Coimbra") && (
                    <span className="text-emerald-400">Coimbra</span>
                  )}
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8 animate-fade-in-up stagger-2">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up stagger-3">
            <a
              href={hero.primaryCtaHref}
              className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              {hero.primaryCtaLabel}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCtaHref}
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer backdrop-blur-sm"
            >
              {hero.secondaryCtaLabel}
              <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up stagger-4">
            {hero.highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/60">
                <div className="size-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location tag */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-white/40 text-sm">
          <MapPin className="size-4" />
          <span>{content.morada}</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}