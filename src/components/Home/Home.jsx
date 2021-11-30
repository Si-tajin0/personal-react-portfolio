import React from 'react';
import Intro from '../Intro/Intro';
import Toggle from '../Toggle/Toggle';
import About from '../About/About';
import ProductList from '../ProductList/ProductList';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
        </div>
    );
};

export default Home;