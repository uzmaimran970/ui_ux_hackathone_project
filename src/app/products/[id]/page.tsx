"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cartcontext";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Review from "@/components/review";

// Define the product interface
interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  tags: string[];
  category: string;
  available: boolean;
  stock: number;
}

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

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
        stock,
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

  const handleAddToCart = () => {
    if (!product) return;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        quantity,
      },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-8">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Image and Thumbnails */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <img
            className="w-full rounded-lg shadow-lg"
            src={product.image}
            alt={product.name}
          />
          <div className="flex gap-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-20 h-20 rounded-md object-cover border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <span
              className={`py-1 px-3 rounded-full text-white text-sm ${
                product.available ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {product.available ? "In stock" : "Out of stock"}
            </span>
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="mt-2">
            <strong>Category:</strong> {product.category}
          </p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-4">
            <p className="text-3xl font-bold text-orange-500">${product.price}</p>
            {product.originalPrice && (
              <p className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
              className="px-4 py-2 bg-gray-200 rounded-l-lg disabled:opacity-50"
            >
              -
            </button>
            <span className="px-6">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 bg-gray-200 rounded-r-lg"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="mt-4">
            <span className="text-lg">Total Price: </span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 flex items-center gap-4">
            <Link href="/addtocart">
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </Link>
            <button className="text-gray-600 hover:text-red-500 transition">
              Add to Wishlist
            </button>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <p>
              <strong>Tags:</strong>{" "}
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>

          {/* Social Sharing */}
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-300">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <Review />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
