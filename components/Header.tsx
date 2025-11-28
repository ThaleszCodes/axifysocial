import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-baseline space-x-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Axify</h1>
          <span className="text-sm font-light text-gray-400">by Axium Studio</span>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
        >
          <MessageCircle size={18} />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;