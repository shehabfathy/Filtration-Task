import React from "react";
import Testymonials from "../testymonials/testymonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Recipe from "../Recipe/Recipe";
import Category from "../Category/Category";
import Head from "../Head/Head";
import Center from "../Center/Center";

export default function Home() {
  return (
    <>
      <div className="paddingX ">
        <Head />
        <Center />
        <Category />
        <About />
        <Recipe />
        <Testymonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
