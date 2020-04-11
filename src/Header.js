import React from "react";
import styled from "styled-components";

import Colors from "./style/colors";
import breaks from "./style/styled-breaks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./Navigation";
import SocialLink from "./SocialLink";
import socialLinkData from "./SocialLinkData";

const StyledHeader = styled.header`
  padding: 0 16px;
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
  // Header用のリンクアイコンのJSX
  const socialLinksForHeader = socialLinkData.map(item => {
    return (
      <SocialLink
        href={item.hrefLink}
        ariaLabel={item.ariaLabel}
        key={item.hrefLink}
      >
        <FontAwesomeIcon
          className="link__icon"
          icon={item.fontawesomeIcon}
        ></FontAwesomeIcon>
      </SocialLink>
    );
  });
  return (
    <StyledHeader className="header">
      <HeaderTextContainer>
        <HeaderTitle>Tombo Gokuraku</HeaderTitle>
        <HeaderTitle sub as="span">
          - Portfolio site
        </HeaderTitle>
      </HeaderTextContainer>
      <Navigation />

      <div className="link">{socialLinksForHeader}</div>
    </StyledHeader>
  );
}

export default Header;
