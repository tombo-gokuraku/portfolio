import React from "react";
import styled from "styled-components";

import breaks from "../style/styled-breaks";
import Colors from "../style/colors";
import tomboImage from "../assets/tombo_icon_red_resized.png";

function Hero(props) {
  return (
    <HeroSection>
      <HeroContainer grow="2">
        <HeroText large>Web Engineer && VTuber</HeroText>
        <HeroText>Tombo Gokuraku</HeroText>
      </HeroContainer>
      <HeroContainer grow="1">
        <HeroImage src={tomboImage} alt="トンボの画像" />
      </HeroContainer>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background-color: ${Colors.materialTeal300};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 48px 16px 32px;

  ${breaks.md`
    padding: 96px 64px 32px;
  `}
`;

const HeroContainer = styled.div`
  flex-grow: ${(props) => props.grow}
  line-height: 1.8;
  letter-spacing: 0.4rem;

  ${breaks.md`
    line-height: 1.5;
    letter-spacing: 0.5rem;
  `}
`;

const HeroText = styled.h2`
  // largeを指定した時に微妙にフォントサイズが大きくなるようにする
  font-size: ${(props) => (props.large ? 1.4 + 0.4 : 1.4)}rem;
  ${breaks.sm`
    font-size: ${(props) => (props.large ? 2.8 + 0.4 : 2.8)}rem;
  `}

  ${breaks.md`
    font-size: ${(props) => (props.large ? 3.6 + 0.4 : 3.6)}rem;
  `}

  ${breaks.lg`
    font-size: ${(props) => (props.large ? 4.0 + 0.4 : 4.0)}rem;
  `}
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 250px;
`;

export default Hero;
