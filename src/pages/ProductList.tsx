import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const ProductList: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold mb-4">
              R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <Link
              to={`/produto/${product.id}`}
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block"
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
