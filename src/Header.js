import React from "react";
import styled from "styled-components";

import breaks from "./style/styled-breaks";

import Navigation from "./Navigation";
import SocialLinks from "./SocialLink";

const StyledHeader = styled.header`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  width: 100%;
  z-index: 10;

  ${breaks.sm`
    padding: 0 32px;
  `}
`;

const HeaderTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: ${props => (props.sub ? "1.6rem" : "2rem")};
  font-weight: ${props => (props.sub ? "300" : "")};
  display: ${props => (props.sub ? "none" : "")};
  margin-right: 16px;

  ${breaks.lg`
    display: ${props => (props.sub ? "block" : "")}
  `}
`;

function Header(props) {
  return (
    <StyledHeader>
      <HeaderTextContainer>
        <HeaderTitle>Tombo Gokuraku</HeaderTitle>
        <HeaderTitle sub as="span">
          - Portfolio site
        </HeaderTitle>
      </HeaderTextContainer>
      <Navigation />
      <SocialLinks notext />
    </StyledHeader>
  );
}

export default Header;
