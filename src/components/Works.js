import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
  SectionText,
} from "./Section";

import Item from "./Item";

import portfolio_1_6 from "../images/portfolio_1_6.jpg";
import portfolio_1_1 from "../images/portfolio_1_1.jpg";
import singlepageLayout from "../images/singlepage_layout.jpg";

function Works() {
  return (
    <React.Fragment>
      <StylesForReactResponsiveCarousel />
      <SectionContainer>
        <SectionTitle>Works</SectionTitle>
        <Carousel showThumbs={false}>
          <SectionContent>
            <Img src={portfolio_1_6} alt={"ポートフォリオサイト version 1.6"} />
            <SectionText>
              電子回路をテーマにしたポートフォリオ。Figmaでデザインを行い、Reactとstyled-componentsを使ってコンポーネントを作成した。スクロールジャックしない自作のFullPageSliderが特色!{" "}
            </SectionText>
            <Flex>
              <Item main>Tech Stack</Item>
              <Item>Figma</Item>
              <Item>JavaScript</Item>
              <Item>React</Item>
              <Item>Gatsby</Item>
              <Item>styled-components</Item>
              <Item>Netlify</Item>
            </Flex>
          </SectionContent>
          <SectionContent>
            <Img src={portfolio_1_1} alt={"ポートフォリオサイト version 1.1"} />
            <SectionText>
              STUDIOでデザインし、HTMLとSASS(SCSS)を使って作成したポートフォリオサイト。GoogleFormをスタイリングするために、カスタマイズしているのが特徴!
            </SectionText>
            <Flex>
              <Item main>Tech Stack</Item>
              <Item>STUDIO</Item>
              <Item>HTML</Item>
              <Item>SASS(SCSS)</Item>
              <Item>Github Pages</Item>
            </Flex>
          </SectionContent>
          <SectionContent>
            <Img
              src={singlepageLayout}
              alt={"シングルページレイアウトサイト"}
            />
            <SectionText>
              HTML、Vanilla
              CSSを使って作成したサイト。透過させた背景画像と交互にハイライトさせたセクションが特色!
              Github Pagesにホスティング
            </SectionText>
            <Flex>
              <Item main>Tech Stack</Item>
              <Item>HTML</Item>
              <Item>CSS</Item>
              <Item>Github Pages</Item>
            </Flex>
          </SectionContent>
        </Carousel>
      </SectionContainer>
    </React.Fragment>
  );
}

const StylesForReactResponsiveCarousel = createGlobalStyle`
  .carousel-root {
    // なぜかカルーセルだけはみ出すので
    max-width: 100%;
  }

  // override black background
  .carousel .slide {
    background-color: transparent;
  }

  // remove unnecessary element
  .carousel-status {
    display: none;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const Img = styled.img.attrs(() => ({
  loading: "lazy",
}))`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 8px;
`;

export default Works;
