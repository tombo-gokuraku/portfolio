import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import breaks from "./style/styled-breaks";
import Colors from "./style/colors";

// function Section(props) {
//   return (
//     <section
//       id={props.id}
//       className={
//         props.className === undefined ? "section" : props.className + " section"
//       }
//     >
//       {props.children}
//     </section>
//   );
// }

export const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto 32px;
  padding: 32px 16px;

  ${breaks.sm`
    padding: 64px 32px;
  `}

  ${breaks.md`
    margin: 0 auto 64px;
    padding: 64px;
  `}
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 16px;

  ${breaks.md`
    flex-wrap: nowrap;
  `}
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;

  ${breaks.md`
    width:50%;
    margin-right: 16px;
  `}
`;

export const SectionBgImage = styled.img`
  display: none;

  ${breaks.md`
    display: flex;
    flex-grow: 1;
    width: 50%;
    margin: 0;
    padding: 0;
    opacity: 0.7;
    filter: blur(2px);
    object-fit: cover;
  `}
`;

export const SectionBgIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0;
  top: 25%;
  // react-fontawesomeが追加する.svg-inline--fa.fa-w-20 {width: 1.25em;} を上書きするため
  && {
    width: 100%;
  }
  font-size: 14rem;
  text-align: center;
  color: ${Colors.materialTeal500};
  opacity: 0.3;

  ${breaks.sm`
    font-size: 12rem;
  `}
  ${breaks.md`
    font-size: 18rem;
  `}
  ${breaks.lg`
    font-size: 20rem;
  `}
`;

export default Section;
