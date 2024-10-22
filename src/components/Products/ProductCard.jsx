/* eslint-disable @next/next/no-img-element */
import { useCartContext, useCartDispatchContext } from "../CartContext/CartContext";
import { use, useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function ProductCard({ name, description, price, image }) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(false);
  const { productos } = useCartContext();
  const dispatch = useCartDispatchContext();

  return (
    <div className="text-black hover:scale-105 transform transition-transform duration-300 flex flex-col border w-64 h-96 border-gray-300 p-6 rounded-xl items-center justify-center">
      {productoSeleccionado && (
        <div className="relative">
          <div className="absolute bg-orange-400 rounded-full w-fit p-3">
            <CheckBadgeIcon className="w-32 h-32" />
          </div>
        </div>
      )}
      <Image src={image} alt="image" className="w-30 h-36 rounded-lg" />
      <h1 className="text-lg font-bold text-center">{name}</h1>
      <p className="overflow-hidden h-24 ">{description}</p>
      <p className="mt-3">${price}</p>
      <button
        className="p-3 mt-1 bg-purple-700 text-white rounded-lg w-24"
        onClick={() => {
          dispatch({
            type: "ADD_PRODUCT",
            producto: { name, description, price, image },
          });
        }}>
        Add
      </button>
      {productos.filter((producto) => producto.name === name).length > 0 && (
        <button
          className="p-3 mt-1 bg-red-700 rounded-lg w-24"
          onClick={() => {
            dispatch({
              type: "REMOVE_PRODUCT",
              name: name,
            });
          }}>
          Remove
        </button>
      )}
    </div>
  );
}
