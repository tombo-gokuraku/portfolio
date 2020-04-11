import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faTools,
  faBlog,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Colors from "./style/colors";
import breaks from "./style/styled-breaks";

const StyledNavigation = styled.nav`
  // bottom-navigationと統合する
  // 960px(for-md)より大きい場合は普通のNavigation
  // 小さい場合はBottom Navigation

  padding: 0 32px;
  display: flex;
  align-items: stretch; //headerいっぱいにnavigation__menuを広げる
  background-color: ${Colors.materialTeal300};
  position: fixed;
  z-index: 10;
  width: 100%;
  bottom: 0;
  left: 0;

  ${breaks.md`
    position: static;
    background-color: transparent;
    width: auto;
    flex-grow: 1;
  `}
`;

const NavigationMenu = styled.ul`
  display: flex; // navigation__itemを横に並べる
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const NavigationItem = styled.li`
  flex-grow: 1; // navigation__itemをmenuいっぱいになるまで伸ばす

  &:hover {
    background-color: ${Colors.materialTeal100};
  }
`;

const NavigationLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-size: 1.6rem;
  color: #333;

  ${breaks.md`
      flex-direction: row;
      justify-content: center;
      text-align: center;
      height: 100%;
      font-weight: bold;
      color: black;
    `}
`;

const NavigationIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 4px;

  ${breaks.md`
    display: none;
  `}
`;

function Navigation() {
  return (
    <StyledNavigation>
      <NavigationMenu>
        <NavigationItem>
          <NavigationLink href="#about" aria-label="go to ABOUT">
            <NavigationIcon icon={faAddressCard}></NavigationIcon>
            ABOUT
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#skills" aria-label="go to SKILLS">
            <NavigationIcon icon={faTools}></NavigationIcon>
            SKILLS
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            href="https://tombomemo.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="go to BLOG"
          >
            <NavigationIcon icon={faBlog}></NavigationIcon>
            BLOG
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#contact" aria-label="go to CONTACT">
            <NavigationIcon icon={faComment}></NavigationIcon>
            CONTACT
          </NavigationLink>
        </NavigationItem>
      </NavigationMenu>
    </StyledNavigation>
  );
}

export default Navigation;
