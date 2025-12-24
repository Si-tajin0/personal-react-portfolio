import React, { useContext } from 'react';
import Product from "../Product/Product";
import { products } from "../../data";
import { ThemeContext } from "../../Context"; // Context ইম্পোর্ট করুন

const ProductList = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <section className={`py-20 px-6 md:px-16 lg:px-28 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-[#f9fafb]"}`} id="portfolio">
            {/* Header Section */}
            <div className="text-center mb-16 space-y-4">
                <h1 className={`text-4xl md:text-5xl font-black tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                    My Portfolio
                </h1>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto"></div>
                <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    I work with startups and top companies to design inclusive, effective, and impactful digital products. Here are some of my favorite works.
                </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(item => (
                    <Product 
                        key={item.id} 
                        img={item.img}
                        link={item.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;