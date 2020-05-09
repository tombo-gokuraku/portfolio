//styled-breaks.js
import { generateMedia } from "styled-media-query";

const breaks = generateMedia({
  xs: "0",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
});

export default breaks;
