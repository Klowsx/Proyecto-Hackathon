"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useCartContext } from "../CartContext/CartContext";
import { useEffect, useState } from "react";

// Define una interfaz para el producto
interface Product {
  name: string;
  price: number;
}

export default function NavBar() {
  const { productos }: { productos: Product[] } = useCartContext(); // Asegúrate de que useCartContext tenga el tipo correcto
  const [distinctProducts, setDistinctProducts] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    setDistinctProducts(
      productos.filter(
        (producto, index, self) => index === self.findIndex((p) => p.name === producto.name)
      )
    );
  }, [productos]);

  return (
    <nav className="navbar bg-light p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="text-xl font-bold">
          Pagina Ecommerce
        </Link>

        <div className="space-x-4">
          <Link href="/Inicio" className="hover:text-blue-500">
            Inicio
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Comercio
          </Link>
          <Link href="/Nosotros" className="hover:text-blue-500">
            Nosotros
          </Link>
        </div>
        <div className="relative">
          <button onClick={toggleCart} className="text-white hover:text-gray-400">
            <ShoppingCartIcon className="w-6 h-6" />
            {productos.length > 0 && (
              <span className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5">
                {productos.length}
              </span>
            )}
          </button>
          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
              {distinctProducts.length > 0 ? (
                <ul>
                  {distinctProducts.map((product, index) => (
                    <li key={index} className="border-b py-2 text-gray-800 flex justify-between">
                      <span>
                        {product.name}
                        {productos.filter((prod) => prod.name === product.name).length !== 0
                          ? ` x ${productos.filter((prod) => prod.name === product.name).length}`
                          : ""}
                      </span>
                      <span>
                        {productos
                          .filter((prod) => prod.name === product.name)
                          .reduce((acumulador, prod) => acumulador + prod.price, 0)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No tienes productos</p>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}


