import React, { useState, useContext } from "react";
import Product from "../Product/Product";
import { products } from "../../data"; // এই ফাইলটি এখন src/data.js থেকে আসবে
import { ThemeContext } from "../../Context";

const ProductList = () => {
  const [filter, setFilter] = useState("all");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <section
      className={`py-24 px-6 md:px-16 lg:px-28 transition-colors ${darkMode ? "bg-gray-900" : "bg-white"}`}
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Portfolio
          </h2>
          <h1
            className={`text-4xl md:text-5xl font-black mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Featured Work
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "mern", "wordpress"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold uppercase text-xs transition-all ${filter === cat ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-blue-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
