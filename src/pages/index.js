import React from "react";
import App from "../components/App";

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

export default function Index() {
  return (
    <React.StrictMode>
      <GlobalFonts />
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
}
