import Image from "next/image";
import Link from "next/link";
import React from "react";

// Static Product Data
const staticProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    imageUrl: "/assets/product1.jpg",
    originalPrice: 39.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    imageUrl: "/assets/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    imageUrl: "/assets/product3.jpg",
    originalPrice: 24.99,
  },
  {
    id: 4,
    name: "Product 4",
    price: 99.99,
    imageUrl: "/assets/product4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 59.99,
    imageUrl: "/assets/product5.jpg",
  },
];

const Products = () => {
  const products = staticProducts; // Using static product data

  return (
    <div className="p-4 w-[75%] max-lg:w-full">
      {/* Sort and Filter Options */}
      <div className="flex items-center mb-4 max-sm:w-full">
        <div>
          <label className="mr-2 text-xl font-medium">Sort By:</label>
          <select className="border border-gray-300 rounded p-1 focus:ring-orange-300 w-[236px] h-[46px] max-sm:w-[136px] max-sm:h-[46px]">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="pl-10 max-sm:pl-2">
          <label className="mr-2 text-xl font-medium">Show:</label>
          <select className="border border-gray-300 rounded p-1 focus:ring-orange-300 w-[236px] h-[46px] max-sm:w-[136px] max-sm:h-[46px]">
            <option>Default</option>
            <option>6 per page</option>
            <option>12 per page</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {products.map((product, index) => (
          <Link key={index} href={`/detail/${product.id}`}>
            <div className="border border-gray-200 rounded cursor-pointer">
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={267}
                  width={312}
                  className="w-full h-[267px] object-cover rounded"
                />
                {product.originalPrice && (
                  <span className="absolute top-2 right-2 bg-primary_color text-white text-xs px-2 py-1 rounded">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="mt-2 p-2">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2 text-sm mt-1">
                  <span className="text-primary_color font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xs">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          1
        </button>
        <button className="px-3 py-1 mx-1 text-white bg-orange-400 rounded">2</button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          3
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Products;
