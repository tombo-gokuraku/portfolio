import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import GlobalFonts from "../fonts/fonts";

import Hero from "./Hero";
// import About from "./About";
// import Skills from "./Skills";
// import Contact from "./Contact";
import { SectionTitle } from "./Section";
import { FullPage, FullPageChild } from "./FullPage";
import { SkillMap } from "./SkillMap";

// themeを定義
const theme = {
  backgroundColor: "#263238",
  primary: "#4fc3f7",
  primaryLight: "#E1F5FE",
  primaryDark: "#01579B",
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
    font-family: Orbitron, sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

`;

const FullPageChildFlex = styled(FullPageChild)`
  display: flex;
`;

function Layout() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <FullPage as="main" child={FullPageChildFlex}>
          <FullPageChildFlex as="section" id="hero">
            <Hero />
          </FullPageChildFlex>
          <FullPageChildFlex as="section" id="about">
            <SectionTitle>About</SectionTitle>
            <SkillMap />
          </FullPageChildFlex>
          <FullPageChildFlex as="section" id="works">
            <SectionTitle>Works</SectionTitle>
          </FullPageChildFlex>
          <FullPageChildFlex as="section" id="contact">
            <SectionTitle>Contact</SectionTitle>
          </FullPageChildFlex>
        </FullPage>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
