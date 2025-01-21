"use client"
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
  category: string;
  available: boolean;
  originalPrice: number;
}

interface ShopProductsProps {
  searchTerm: string;
  selectedCategories: string[];
}

const Shopproducts: React.FC<ShopProductsProps> = ({ searchTerm, selectedCategories }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const query = `*[_type == "food"] {
    name,
    price,
    originalPrice,
    "image": image.asset->url,
    description,
    tags,
    category,
    available,
    _id
  }`;

  const fetchProducts = async () => {
    try {
      const data: Product[] = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between"
          >
            <Link href={`/products/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-lg"
              />
            </Link>
            <div className="mt-4 flex-grow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 font-medium mt-2">Price: ${product.price}</p>
              <p className="text-gray-600 font-medium">
                Discount: {(((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(2)}%
              </p>
              <p className="text-gray-600 font-medium">Category: {product.category}</p>
            </div>
            <div className="mt-4 text-center">
              <Link href={`/product/${product._id}`}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg--600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopproducts;
