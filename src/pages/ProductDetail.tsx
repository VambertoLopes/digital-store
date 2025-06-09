import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Produto não encontrado.</div>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2 text-gray-700">{product.description}</p>
      <p className="text-green-600 font-bold text-xl mb-4">
        R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      <Link
        to="/produtos"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block"
      >
        Voltar para lista de produtos
      </Link>
    </div>
  );
};

export default ProductDetail;


