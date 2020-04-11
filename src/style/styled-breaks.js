//styled-breaks.js
import { css } from "styled-components";

const breakpoints = {
  xs: "0",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px"
};

const breaks = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default breaks;
