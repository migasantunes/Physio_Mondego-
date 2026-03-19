import content from '../data/content.json';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      {/* Imagem de Fundo com Overlay Escuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${content.hero.imagem_fundo})` }}
      ></div>
      
      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {content.hero.titulo}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {content.hero.subtitulo}
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#contactos" 
            className={`${content.cores.primaria} hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl`}
          >
            {content.hero.cta_botao}
          </a>
        </div>
      </div>
    </section>
  );
}