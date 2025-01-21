"use client"
// context/cartcontext.tsx

import React, { createContext, useContext, useReducer } from "react";

// Define types for the product and cart state
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

type CartState = Product[];

interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: Product;
}

interface RemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: string;
}

interface UpdateQuantityAction {
  type: "UPDATE_QUANTITY";
  payload: { _id: string; quantity: number };
}

// Union type for all possible actions
type CartAction = AddToCartAction | RemoveFromCartAction | UpdateQuantityAction;

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ cart: [], dispatch: () => {} });

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload }];
      }
    }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
