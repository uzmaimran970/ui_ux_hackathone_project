"use client";
import { client } from "@/sanity/lib/client";
import Navbarmanu from "../../../components/navbarmanu";
import React, { useEffect, useState } from "react";

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

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch product details based on the product ID
  const fetchProduct = async () => {
    try {
      const query = `*[_type == "food" && _id == $id][0] {
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
      const data = await client.fetch(query, { id: params.id });
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <>
      <Navbarmanu />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="border border-gray-200 rounded-lg shadow-lg p-10 max-w-[1000px] bg-white flex flex-col md:flex-row gap-4 mb-[80px]">
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name || "Product"}
              className="w-full h-48 md:h-72 object-cover rounded-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-orange-500 mb-6">${product.price.toFixed(2)}</p>
            {product.originalPrice && product.price !== product.originalPrice && (
              <p className="text-gray-600 font-medium">
              Discount: {(((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(2)}%
            </p>
            )}
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <button className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
