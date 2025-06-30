import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary tracking-wide">
          Digital Store
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-dark-gray-2 hover:text-primary transition"
          >
            Início
          </Link>
          <Link
            to="/produtos"
            className="text-dark-gray-2 hover:text-primary transition"
          >
            Produtos
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
