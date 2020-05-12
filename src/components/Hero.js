import React from "react";
import styled from "styled-components";

import breaks from "../style/styled-breaks";
import tomboImage from "../images/TomboHeroImage.svg";

function Hero() {
  return (
    <Flex>
      <HeroText>
        Tombo <br /> Gokuraku <br /> Web Engineer
      </HeroText>
      <HeroImage src={tomboImage} alt="トンボの画像" />
    </Flex>
  );
}

const Flex = styled.div`
  flex-grow: 1;
  padding: 0 36px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  ${breaks.greaterThan("md")`
    flex-wrap: nowrap;
    padding: 0 48px;
  `}
`;

const HeroText = styled.h1`
  flex-grow: 1;
  flex-basis: 50%;
  color: ${(props) => props.theme.primaryLight};

  line-height: 64px;
  letter-spacing: 2px;
  font-size: 3.0rem;

  ${breaks.greaterThan("sm")`
    line-height: 72px;
    letter-spacing: 4px;
    font-size: 4.0rem;
  `}

  ${breaks.greaterThan("md")`
    line-height: 80px;
    letter-spacing: 6px;
    font-size: 5.0rem;
  `}

  ${breaks.greaterThan("lg")`
    line-height: 88px;
    letter-spacing: 8px;
    font-size: 6.0rem;
  `}
`;

const HeroImage = styled.img`
  flex-grow: 1;
  flex-basis: 50%;
  width: 100%;
  /* height: auto; */
`;

export default Hero;
