import React from "react";

const FilterSortBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <label className="mr-2 font-medium text-sm text-gray-700">Ordenar por:</label>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
          <option>Mais relevantes</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
        </select>
      </div>

      <div>
        <label className="mr-2 font-medium text-sm text-gray-700">Filtrar por:</label>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
          <option>Todos</option>
          <option>Notebook</option>
          <option>Smartphone</option>
          <option>Fone</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;

