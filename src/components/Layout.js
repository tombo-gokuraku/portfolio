import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import GlobalFonts from "../fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Raleway, sans-serif;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

`;

function Layout() {
  return (
    <React.Fragment>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
