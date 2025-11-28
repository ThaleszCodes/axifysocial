
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Dúvidas Frequentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-white hover:bg-gray-800/50 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 pt-0 text-gray-400">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FAQ;
