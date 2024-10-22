"use client";

import React from "react";

interface ProductFiltersProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex flex-wrap justify-around items-center text-gray-400 bg-gray-100 mt-3 p-3 rounded-xl">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-2 w-64 h-10"
      />
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
        className="p-2 border border-gray-300 rounded mb-2 w-64 h-10">
        <option value="">Todas las categorías</option>
        <option value="Mola">Mola</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Muebles">Muebles</option>
        <option value="Vajillas">Vajillas</option>
      </select>
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
        className="p-2 border border-gray-300 rounded mb-2 w-64 h-10">
        <option value="asc">Ordenar por precio: Ascendente</option>
        <option value="desc">Ordenar por precio: Descendente</option>
      </select>
    </div>
  );
};

export default ProductFilters;
