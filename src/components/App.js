import React from "react";

/* import Component Sections */
import Header from "./sections/Header";
import Hero from "./sections/hero/Hero";
import Quote from "./sections/Quote";
import AboutMe from "./sections/AboutMe";
import Icons from "./sections/Icons";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
/* import css */
import "../css/section.css";
/* start App component */
export default function App(props) {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Quote />
      <AboutMe />
      <Icons />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
