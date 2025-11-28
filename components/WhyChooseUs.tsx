import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Por que escolher a Axify Social?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Focamos em três pilares: Simplicidade, Profissionalismo e Resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4">
              <div className="flex-shrink-0">
                <feature.icon className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.text}</h3>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default WhyChooseUs;