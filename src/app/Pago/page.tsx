"use client";
import React from "react";
import { useCartContext } from "@/components/CartContext/CartContext";

interface Product {
  name: string;
  price: number;
  image: string; // Asegúrate de que la imagen esté incluida
}

const Pago = () => {
  const { productos } = useCartContext(); 
  const total = productos.reduce((acumulador: number, producto: Product) => acumulador + producto.price, 0);

  const handlePayment = () => {
    alert("Pago procesado!");
  };

  return (
    <div className="container mx-auto p-4" >
      <h1 className="text-2xl font-bold mb-4 items-center ">Productos</h1>
      {productos.length > 0 ? (
        <>
          <ul className="mb-4">
            {productos.map((producto: Product, index: number) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* Renderiza la imagen del producto */}
                  <img src={producto.image} alt={producto.name} className="w-32 h-32 m-4 object-cover rounded-lg" />
                  <span>{producto.name}</span>
                </div>
                <span>${producto.price}</span>
              </li>
            ))}
          </ul>
          <div className="font-bold">Total: ${total}</div>
          <button
            onClick={handlePayment}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Confirmar Pago
          </button>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Pago;
