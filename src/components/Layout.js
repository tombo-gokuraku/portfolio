import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import GlobalFonts from "../fonts/fonts";

import Hero from "./Hero";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import { FullPage, FullPageChild } from "./FullPage";

// themeを定義
const theme = {
  backgroundColor: "#263238",
  primary: "#4fc3f7",
  primaryLight: "#E1F5FE",
  primaryDark: "#0288D1",
  secondary: "#f7844f",
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,body,h1,h2,h3,h4,h5,h6,p {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Orbitron, Makinas4Square, sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
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
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <FullPage as="main">
          <FullPageChild as="section" id="hero">
            <Hero />
          </FullPageChild>
          <FullPageChild as="section" id="about">
            <About />
          </FullPageChild>
          <FullPageChild as="section" id="works">
            <Works />
          </FullPageChild>
          <FullPageChild as="section" id="contact">
            <Contact />
          </FullPageChild>
        </FullPage>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
