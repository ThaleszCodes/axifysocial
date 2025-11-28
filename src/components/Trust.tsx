
import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section id="trust">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white tracking-tight">Confiança e Profissionalismo</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
          A Axify Social é uma frente da <span className="text-purple-500 font-semibold">Axium Studio</span>, uma marca com anos de experiência produzindo projetos de tecnologia e design. Nosso sistema é proprietário, garantindo automação, segurança e a melhor entrega possível.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-800">
                <Shield className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Painel Próprio</h3>
                <p className="text-gray-400">Controle total sobre nossos serviços, sem depender de terceiros.</p>
            </div>
            <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-800">
                <Zap className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Automação e Segurança</h3>
                <p className="text-gray-400">Processos automatizados que garantem rapidez e a segurança da sua conta.</p>
            </div>
            <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-800">
                <Users className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Anos de Experiência</h3>
                <p className="text-gray-400">A qualidade e o profissionalismo que você já conhece da Axium Studio.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
