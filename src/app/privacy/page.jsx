import content from '../../data/content.json';

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            A privacidade e segurança dos seus dados são uma prioridade para a <strong>{content.empresa.nome}</strong>. 
            Esta política explica como recolhemos e tratamos os dados pessoais que nos fornece através do nosso website.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Que dados recolhemos?</h2>
          <p>
            Através do nosso formulário de contacto, recolhemos estritamente os dados necessários para lhe podermos responder: Nome, Endereço de Email e a Mensagem/Pedido de Orçamento.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Qual a finalidade?</h2>
          <p>
            Os dados recolhidos destinam-se exclusivamente ao processamento do seu pedido de contacto ou orçamento, 
            não sendo utilizados para campanhas de marketing não solicitado (spam) nem partilhados com terceiros para fins comerciais.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Partilha de Dados (Processadores de Terceiros)</h2>
          <p>
            Para garantir a segurança e a entrega técnica das mensagens, utilizamos o serviço <em>Formspree</em> como processador de formulários. 
            Os dados submetidos são encriptados e transferidos temporariamente através dos seus servidores estritamente para entrega na nossa caixa de correio.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Os seus direitos</h2>
          <p>
            Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), tem o direito de solicitar o acesso, retificação ou apagamento dos seus dados pessoais. 
            Para exercer estes direitos, por favor contacte-nos através do email: <strong>{content.empresa.email}</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}