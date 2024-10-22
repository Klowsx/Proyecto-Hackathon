// src/app/page.tsx
"use client";

import ProductCard from "@/components/Products/ProductCard";
import ProductFilters from "@/components/ProductFilters/ProductFilters"; // Importa el nuevo componente
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string; // Incluye la categoría aquí
}

export default function Home() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" o "desc"

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((productos) => {
        setProductos(productos);
        setFilteredProducts(productos); // Inicialmente, todos los productos son filtrados
      });
  }, []);

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
    <>
      {/* Usar el componente de filtros */}
      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-wrap gap-8 items-center sm:items-start justify-center">
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
    </>
  );
}
