import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-6 min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-5xl font-bold text-center mb-12">Bem-vindos</h1>
      
      <div className="grid gap-6 w-full max-w-md">
        <Link
          to="/produtos"
          className="bg-white shadow-md hover:shadow-lg rounded-2xl px-6 py-5 text-center text-blue-600 font-semibold text-lg transition"
        >
          Ir para Produtos
        </Link>
        <Link
          to="/produto/1"
          className="bg-white shadow-md hover:shadow-lg rounded-2xl px-6 py-5 text-center text-blue-600 font-semibold text-lg transition"
        >
          Ver Produto
        </Link>
      </div>
    </div>
  );
};

export default Home;
