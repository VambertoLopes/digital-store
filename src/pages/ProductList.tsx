import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSortBar from "../components/FilterSortBar"; 

const ProductList: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <FilterSortBar />
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

