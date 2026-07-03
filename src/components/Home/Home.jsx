import React from "react";
import Intro from "../Intro/Intro";
import About from "../About/About";
import ProductList from "../ProductList/ProductList";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
};

export default Home;
