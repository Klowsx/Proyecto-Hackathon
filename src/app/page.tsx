"use client";

import ProductCard from "@/components/Products/ProductCard";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import staticProducts, { Product } from "@/data/staticProducts"; // Importar productos
import { useState, useEffect } from "react";

export default function Home() {
  const [productos, setProductos] = useState<Product[]>(staticProducts); // Usar los productos estáticos
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(staticProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filtrar y ordenar productos cuando cambie alguno de los estados relevantes
  useEffect(() => {
    let updatedProducts = [...productos];

    // Filtrar por categoría
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter((product) => product.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar por precio
    updatedProducts.sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    setFilteredProducts(updatedProducts);
  }, [productos, searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="">
      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="flex  justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)] ">
        <main className="flex flex-wrap gap-8 items-center sm:items-start justify-center ">
          {filteredProducts.map((producto) => (
            <ProductCard
              key={producto.id}
              name={producto.title}
              description={producto.description}
              price={producto.price}
              image={producto.image}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
