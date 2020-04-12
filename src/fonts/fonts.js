import { createGlobalStyle } from "styled-components";

import Raleway from "./Raleway-Regular.ttf";

export default createGlobalStyle`
  @font-face {
  font-family: Raleway;
  src: local('Raleway'), url(${Raleway}) format('truetype'), url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
`;
