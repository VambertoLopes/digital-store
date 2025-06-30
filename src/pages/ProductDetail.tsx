import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Imagem */}
      <div className="w-full bg-light-gray-3 p-6 rounded-3xl flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 object-contain"
        />
      </div>

      {/* Informações */}
      <div>
        <h1 className="text-4xl font-bold text-dark-gray-2 mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4 text-base">{product.description}</p>
        <p className="text-primary font-extrabold text-3xl mb-6">
  {product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}
</p>
        <button className="bg-primary text-white px-6 py-3 rounded-full uppercase tracking-wide hover:bg-tertiary transition">
          Adicionar ao Carrinho
        </button>
        <div className="mt-6">
          <Link
            to="/produtos"
            className="inline-block mt-4 text-sm text-dark-gray-2 hover:text-primary transition"
          >
            ← Voltar para lista de produtos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



