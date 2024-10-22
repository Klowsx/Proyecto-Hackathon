"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCartContext } from "@/components/CartContext/CartContext";
import pag3 from "@/app/assets/images/yappy.jpg";
import pag2 from "@/app/assets/images/paypal.jpg";
import pag1 from "@/app/assets/images/Clave.png";

interface Product {
  name: string;
  price: number;
  image: string; // Asegúrate de que la imagen esté incluida
}

const Pago = () => {
  const { productos } = useCartContext(); 
  const total = productos.reduce((acumulador: number, producto: Product) => acumulador + producto.price, 0);

  const [metodoPago, setMetodoPago] = useState<string>(""); // Estado para el método de pago seleccionado

  const handlePayment = () => {
    if (!metodoPago) {
      alert("Por favor, selecciona un método de pago.");
      return;
    }
    alert(`Pago procesado con ${metodoPago}!`);
  };

  return (
    <div className="container mx-auto h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      {productos.length > 0 ? (
        <>
          <ul className="mb-4">
            {productos.map((producto: Product, index: number) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={producto.image} // Usa Image de Next.js
                    alt={producto.name}
                    className="w-32 h-32 m-4 object-cover rounded-lg"
                    width={128} // Ancho
                    height={128} // Alto
                  />
                  <span>{producto.name}</span>
                </div>
                <span>${producto.price}</span>
              </li>
            ))}
          </ul>

          {/* Sección del total */}
          <div className="font-bold mb-4">Total: ${total}</div>

          {/* Sección de selección de método de pago */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Método de Pago</h2>
            <div className="flex space-x-4">
              {/* Opción Tarjeta de Crédito */}
              <div
                className={`cursor-pointer p-2 border-2 rounded-lg ${metodoPago === "Tarjeta de Crédito" ? "border-green-500" : "border-gray-300"}`}
                onClick={() => setMetodoPago("Tarjeta de Crédito")}
              >
                <Image
                  src={pag1} // Imagen de Tarjeta de Crédito
                  alt="Tarjeta de Crédito"
                  className="w-32 h-20 object-cover"
                  width={128} // Ancho
                  height={80} // Alto
                />
              </div>

              {/* Opción PayPal */}
              <div
                className={`cursor-pointer p-2 border-2 rounded-lg ${metodoPago === "PayPal" ? "border-green-500" : "border-gray-300"}`}
                onClick={() => setMetodoPago("PayPal")}
              >
                <Image
                  src={pag2} // Imagen de PayPal
                  alt="PayPal"
                  className="w-32 h-20 object-cover"
                  width={128} // Ancho
                  height={80} // Alto
                />
              </div>

              {/* Opción Yappy */}
              <div
                className={`cursor-pointer p-2 border-2 rounded-lg ${metodoPago === "Yappy" ? "border-green-500" : "border-gray-300"}`}
                onClick={() => setMetodoPago("Yappy")}
              >
                <Image
                  src={pag3} // Imagen de Yappy
                  alt="Yappy"
                  className="w-32 h-20 object-cover"
                  width={128} // Ancho
                  height={80} // Alto
                />
              </div>
            </div>
          </div>

          {/* Botón para confirmar el pago */}
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
