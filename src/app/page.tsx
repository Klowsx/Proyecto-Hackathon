"use client";
import ProductCard from "@/components/Products/ProductCard";
import Nav from "@/components/NavBar/Nav";
import { useState, useEffect } from "react";

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((productos) => setProductos(productos));
  }, []);

  return (
    <>
      <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-wrap gap-8 items-center sm:items-start justify-center">
          {productos.map((producto) => (
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
