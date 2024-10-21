"use client";
import { createContext, useContext, useReducer } from "react";

const initialState = {
  productos: [],
};

const CartDispatchContext = createContext(() => {});
const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, productos: [...state.productos, action.producto] };

    case "REMOVE_PRODUCT":
      const index = state.productos.findIndex((producto) => producto.name === action.name);
      if (index !== -1) {
        const nuevosProductos = [...state.productos];
        nuevosProductos.splice(index, 1);
        return { ...state, productos: nuevosProductos };
      }
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export const useCartDispatchContext = () => useContext(CartDispatchContext);
