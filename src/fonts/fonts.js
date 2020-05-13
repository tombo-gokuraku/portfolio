import { createGlobalStyle } from "styled-components";

import OrbitronRegular from "./Orbitron-Regular.ttf";
import OrbitronBold from "./Orbitron-Bold.ttf";
import Makinas4Square from "./Makinas-4-Square.otf";

export default createGlobalStyle`
  @font-face {
    font-family: Orbitron;
    src: local('Orbitron'), url(${OrbitronRegular}) format('truetype');
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: Orbitron;
    src: local('Orbitron'), url(${OrbitronBold}) format('truetype');
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: Makinas4Square;
    src: local('Makinas4Square'), url(${Makinas4Square}) format('opentype');
    font-display: swap;
  }
`;
