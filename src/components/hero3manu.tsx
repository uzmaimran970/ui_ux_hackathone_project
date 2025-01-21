"use client";

import { client } from "@/sanity/lib/client"; // Assuming you have already configured your Sanity client
import React, { useEffect, useState } from "react";

// Define the type for your starter menu items
interface StarterMenuItem {
  _id: string;
  name: string;
  price: number;
  calories: number;
  description: string;
  image: string;
}

const StarterMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<StarterMenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // GROQ query to fetch the starter menu data
  const query = `*[_type == "starterMenu"] {
    _id,
    name,
    price,
    calories,
    description,
    "image": image.asset->url
  }`;

  const fetchMenuItems = async () => {
    try {
      const data: StarterMenuItem[] = await client.fetch(query);
      setMenuItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading menu items...</p>;
  }

  return (
    <div className="w-full max-w-[1320px] h-auto bg-white flex flex-col lg:flex-row items-center mx-auto pt-[60px] lg:pt-[180px] px-4">
      {/* Left Image */}
      <div className="relative flex-shrink-0 pt-[40px] lg:pt-[100px]">
        <img
          src="/hero2.svg"
          alt="Food Item"
          width={448}
          height={626}
          className="object-cover w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
        />
      </div>

      {/* Right Content */}
      <div className="lg:ml-8 pt-[40px] lg:pt-[100px]">
        {/* Heading */}
        <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-6 lg:mb-8 text-center lg:text-left">
          Starter Menu
        </h1>

        {/* Menu Items */}
        <div className="space-y-4">
          {menuItems.length === 0 ? (
            <div className="text-center text-xl font-bold text-red-600">
              No menu items available.
            </div>
          ) : (
            menuItems.map((item) => (
              <div
                key={item._id}
                className="w-full lg:w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div>
                  <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                    {item.name}
                  </h2>
                  <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                    {item.description}
                  </p>
                  <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                    {item.calories} CAL
                  </p>
                </div>
                <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0">
                  ${item.price}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
