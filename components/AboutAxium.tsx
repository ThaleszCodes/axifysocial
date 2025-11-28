import React from 'react';
import { Award, Code, PenTool } from 'lucide-react';

const AboutAxium: React.FC = () => {
  return (
    <section id="about-axium">
      <div className="grid md:grid-cols-2 gap-12 items-center">
          
        <div>
          <span className="text-sm font-bold tracking-widest text-purple-500 uppercase">
            A Força por Trás da Axify
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
            Sobre a Axium Studio
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A Axify Social não nasceu do nada. Somos uma divisão da Axium Studio, uma agência com vasta experiência no mercado de tecnologia e design. Todo o nosso sistema, da automação à segurança, é construído com a expertise que a Axium acumulou ao longo dos anos, entregando projetos sólidos e inovadores.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Anos de Mercado</h3>
                <p className="text-gray-400">Construindo soluções digitais robustas e confiáveis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Code className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Tecnologia de Ponta</h3>
                <p className="text-gray-400">Desenvolvimento de plataformas proprietárias para máxima performance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PenTool className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Design e Experiência</h3>
                <p className="text-gray-400">Foco em interfaces intuitivas e experiências de usuário memoráveis.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute inset-8 border-2 border-purple-500/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-16 border-2 border-gray-700 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-black text-white select-none opacity-80">A</span>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAxium;