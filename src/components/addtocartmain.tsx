"use client"
import React, { useState } from "react";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 35,
      quantity: 1,
      imageUrl: "/addcart1.svg",
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 25,
      quantity: 1,
      imageUrl: "/addcart2.svg",
    },
    {
      id: 3,
      name: "Pizza",
      price: 15,
      quantity: 1,
      imageUrl: "/addcart3.svg",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 45,
      quantity: 1,
      imageUrl: "/addcart4.svg",
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 15,
      quantity: 1,
      imageUrl: "/addtocart5.svg",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6 w-[90%] mx-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-4 px-2">Product</th>
            <th className="text-left py-4 px-2">Price</th>
            <th className="text-center py-4 px-2">Quantity</th>
            <th className="text-left py-4 px-2">Total</th>
            <th className="text-center py-4 px-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
            >
              <td className="py-4 px-2 flex items-center">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <span className="ml-4 font-medium">{item.name}</span>
              </td>
              <td className="py-4 px-2">${item.price.toFixed(2)}</td>
              <td className="py-4 px-2 text-center">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4 border-t border-b border-gray-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4 px-2">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="py-4 px-2 text-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cart Summary */}
      <div className="flex justify-end mt-6">
        <div className="text-lg font-medium">
          Total: <span className="text-[#FF9F0D]">${calculateTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
