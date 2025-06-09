import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-200 transition">
          Digital Store
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200 transition">
            Início
          </Link>
          <Link to="/produtos" className="hover:text-gray-200 transition">
            Produtos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;