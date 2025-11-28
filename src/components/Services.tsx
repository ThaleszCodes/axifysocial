
import React from 'react';
import { Check } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Serviços Principais</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Soluções diretas para o crescimento do seu perfil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.platform} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 transform transition-all duration-300 hover:border-purple-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 mr-4 text-white" />
                <h3 className="text-2xl font-bold text-white">{category.platform}</h3>
              </div>
              <div className="space-y-6">
                {category.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">{service.name}</h4>
                      <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Services;
