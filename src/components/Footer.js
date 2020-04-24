import React from "react";
import styled from "styled-components";

import breaks from "../style/styled-breaks";

function Footer(props) {
  return <StyledFooter>©2020 TOMBO GOKURAKU PORTFOLIO.</StyledFooter>;
}

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  padding: 32px;
  margin-bottom: 64px;

  ${breaks.md`
    margin-bottom: 0;
  `}
`;

export default Footer;
