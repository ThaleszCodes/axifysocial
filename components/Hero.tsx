import React from 'react';
import { FlaskConical, MessageCircle } from 'lucide-react';
import { SIMULATOR_LINK, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 leading-tight">
          Axify Social — Crescimento Real, Sem Complicação.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          A solução profissional em Social Media Marketing da Axium Studio. Serviços rápidos, entrega automatizada e suporte humano direto.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={SIMULATOR_LINK}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-purple-900/50"
          >
            <FlaskConical size={22} />
            <span>Simular Preço (Axify Lab)</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;