import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray-2 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Digital Store.
        </p>
        <p className="text-center md:text-left">
          Desenvolvido por <strong>Vamberto Lopes</strong>
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary transition">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




