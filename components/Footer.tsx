import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} Axify Social — Uma divisão da Axium Studio.</p>
        <p className="mt-2 text-sm">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
