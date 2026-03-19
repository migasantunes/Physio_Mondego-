import content from '../data/content.json';

export default function ContactForm() {
  return (
    <section id="contactos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl font-extrabold ${content.cores.texto_destaque} sm:text-4xl`}>
            Fale Connosco
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contacto */}
          <div className="bg-gray-50 p-8 rounded-2xl h-fit border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactos Diretos</h3>
            <div className="space-y-6 text-gray-600">
              <p><strong>Telefone:</strong> {content.empresa.telefone}</p>
              <p><strong>Email:</strong> {content.empresa.email}</p>
              <p><strong>Morada:</strong> {content.empresa.morada}</p>
            </div>
          </div>

          {/* Formulário Formspree */}
          <form 
            action={"https://formspree.io/f/COLOQUEM_O_ID_AQUI"} 
            method="POST" 
            className="space-y-6"
          >
            <input type="text" name="name" placeholder="Nome Completo" required className="w-full p-3 border rounded-md" />
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-md" />
            <textarea name="message" rows="4" placeholder="A sua mensagem" required className="w-full p-3 border rounded-md"></textarea>
            
            {/* 🛡️ Proteção RGPD */}
            <div className="flex items-start py-2">
              <input id="rgpd_consent" name="rgpd_consent" type="checkbox" required className="mt-1 w-5 h-5 cursor-pointer" />
              <label htmlFor="rgpd_consent" className="ml-3 text-sm text-gray-600 cursor-pointer">
                Aceito a <a href="/privacy" target="_blank" className={`font-semibold hover:underline ${content.cores.texto_destaque}`}>Política de Privacidade</a> e consinto o tratamento dos meus dados.
              </label>
            </div>

            <button type="submit" className={`w-full py-4 text-white font-bold rounded-lg shadow-md ${content.cores.primaria} hover:opacity-90 transition-all`}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}