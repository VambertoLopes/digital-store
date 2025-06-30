import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-20 text-center">
      <h1 className="text-4xl font-bold mb-10">Bem-vindos</h1>
      <div className="grid gap-4 sm:grid-cols-2 justify-center">
        <Link
          to="/produto/1"
          className="block bg-white shadow-md hover:shadow-xl p-6 rounded-xl text-lg font-semibold"
        >
          Ver Produto
        </Link>
        <Link
          to="/produtos"
          className="block bg-white shadow-md hover:shadow-xl p-6 rounded-xl text-lg font-semibold"
        >
          Ver Lista de Produtos
        </Link>
      </div>
    </div>
  );
};

export default Home;
