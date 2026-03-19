import content from '../data/content.json';

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-extrabold ${content.cores.texto_destaque} sm:text-4xl`}>
            Os Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções à medida das suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.servicos.map((servico) => (
            <div key={servico.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{servico.titulo}</h3>
              <p className="text-gray-600 leading-relaxed">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}