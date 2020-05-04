import React from "react";
// import Hero from "./Hero";
// import About from "./About";
// import Skills from "./Skills";
// import Contact from "./Contact";
import { SectionTitle } from "./Section";
import { FullPage, FullPageChild } from "./FullPage";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import GlobalFonts from "../fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,body,h1,h2,h3,h4,h5,h6,p {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    /* overflow: hidden; */
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Raleway, sans-serif;
    background-color: #263238;
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
      <FullPage as="main">
        <FullPageChild as="section" id="hero">
          <SectionTitle>Hero</SectionTitle>
        </FullPageChild>
        <FullPageChild as="section" id="about">
          <SectionTitle>About</SectionTitle>
        </FullPageChild>
        <FullPageChild as="section" id="works">
          <SectionTitle>Works</SectionTitle>
        </FullPageChild>
        <FullPageChild as="section" id="contact">
          <SectionTitle>Contact</SectionTitle>
        </FullPageChild>
      </FullPage>
    </React.Fragment>
  );
}

export default Layout;
