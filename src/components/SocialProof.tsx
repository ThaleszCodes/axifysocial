
import React from 'react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">O que nossos clientes dizem</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            A confiança de quem já cresceu com a Axify Social.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col transform transition-all duration-300 hover:border-purple-500 hover:-translate-y-1">
              <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  loading="lazy"
                />
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default SocialProof;
