import React, { useState } from "react";
import Image from "next/image";

interface ShopSidebarProps {
  onSearch: (term: string) => void;
  onCategoryChange: (categories: string[]) => void;
}

const Sidebar: React.FC<ShopSidebarProps> = ({ onSearch, onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="w-[312px] bg-white p-4 border border-gray-200 max-lg:hidden">
      {/* Search */}
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-orange-300"
          onChange={handleSearchInput}
        />
        <button className="bg-orange-400 h-[46px] p-2 rounded-r">
          <Image src="/searchbar.svg" alt="Search Icon" width={24} height={24} />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Category</h3>
        <div className="space-y-2">
          {[
            "Sandwiches",
            "Burger",
            "Chicken Chup",
            "Drink",
            "Pizza",
            "Thi",
            "Non Veg",
            "Uncategorized",
            "Appetizer", // New Category
            "Dessert",   // New Category
            "Sandwich"   // New Category
          ].map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-orange-500"
                onChange={() => handleCategoryToggle(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="mb-6 bg-gray-100 rounded shadow-md text-center">
        <div className="relative">
          <img
            src="/bannersidebar.svg"
            alt="Classic Restaurant"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Filter by Price */}
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-2">Filter By Price</h3>
        <div>
          <input
            type="range"
            min="0"
            max="800"
            className="w-full bg-primary_color"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>From $0</span>
            <span>To $800</span>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Latest Products</h3>
        <div className="space-y-4">
          {["Pizza", "Cupcake", "Cookies", "Burger"].map((product) => (
            <div
              key={product}
              className="flex items-center space-x-4 border-b pb-2"
            >
              <img
                src="/sidebarlistimg.svg" // Replace with product image URLs
                alt={product}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="font-medium">{product}</p>
                <p className="text-sm text-gray-500">$35.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Services",
            "Our Menu",
            "Pizza",
            "Cupcake",
            "Burger",
            "Cookies",
            "Our Shop",
            "Tandoori Chicken",
          ].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
