"use client"
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  ratingCount: number;
  tags: string;
  discountPercentage: number;
  description: string;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const query = `
    *[_type == "product"] {
      price,
      "image": image.asset->url,
      rating,
      ratingCount,
      "tags": tags[0],
      discountPercentage,
      description,
      name,
      _id
    }
  `;

  const fetchProducts = async () => {
    try {
      const data: Product[] = await client.fetch(query);
      setProducts(data.slice(0, 20));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "calc(25% - 20px)",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h3>
          <p style={{ fontWeight: "bold", margin: "10px 0" }}>Price: ${product.price}</p>
          <Link href={`/product/${product._id}`}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
