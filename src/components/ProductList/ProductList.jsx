import React from 'react';
import './ProductList.css';
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Portfolio</h1>
                <p className="pl-desc">
                    I work with startups and top companies to design inclusive, effective, and impactful digital products.
                </p>
            </div>
            <div className="pl-list">

                {
                    products.map(item => (
                        <Product key={item.id} img={item.img}
                            link={item.link}
                        ></Product>
                    ))}
                    
            </div>
        </div>
    );
};

export default ProductList;