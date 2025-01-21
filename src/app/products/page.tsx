"use client";

import Navbarmanu from "@/components/navbarmanu";
import Mainbanner from "../../components/mainbanner";
import Shopproducts from "../../components/shopproduct";
import Shopsidebar from "../../components/shopsidebar";
import { useState } from "react";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <>
    <Navbarmanu/>
      <Mainbanner name="Our Shop" pageName="Our Shop" />
      <div className="w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%]">
        {/* Pass filtering functions */}
        <Shopproducts searchTerm={searchTerm} selectedCategories={selectedCategories} />
        <Shopsidebar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </>
  );
};

export default Product;
