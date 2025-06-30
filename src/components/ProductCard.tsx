import React from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold tracking-wide mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-zinc-800 font-bold text-lg mb-4">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Link
          to={`/produto/${product.id}`}
          className="block w-full text-center uppercase tracking-wide bg-black text-white py-2 rounded-full hover:bg-zinc-800 transition"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

