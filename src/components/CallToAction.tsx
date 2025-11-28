
import React from 'react';
import { FlaskConical, MessageCircle } from 'lucide-react';
import { SIMULATOR_LINK, WHATSAPP_LINK } from '../constants';

const CallToAction: React.FC = () => {
  return (
    <section id="cta">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Comece agora mesmo o seu pedido.
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-400">
          Simule um preço no Axify Lab ou fale diretamente com nosso suporte no WhatsApp.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={SIMULATOR_LINK}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-purple-900/50"
          >
            <FlaskConical size={22} />
            <span>Ir para o Axify Lab</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>Contato no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
