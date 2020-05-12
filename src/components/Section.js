import styled from "styled-components";

import breaks from "../style/styled-breaks";

export const SectionContainer = styled.div`
  flex-grow: 1;
  margin: 0 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${breaks.greaterThan("md")`
    // flex-wrap: nowrap;
    margin: 0 48px;
  `}
`;

export const SectionContent = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-grow: 1; */
  margin-bottom: 8px;

  ${breaks.greaterThan("md")`
    flex-basis: 50%;
    // margin-right: 16px;
    margin-bottom: 0;
  `}
`;

export const SectionTitle = styled.h2`
  flex-basis: 100%;
  color: ${(props) => props.theme.primaryLight};
  font-size: 2rem;
  margin-bottom: 4px;

  ${breaks.greaterThan("md")`
    font-size: 6rem;
    margin-bottom: 16px;
  `}
`;

export const SectionHeading = styled.h3`
  color: ${(props) => props.theme.primaryLight};
  font-size: 2rem;
  margin-bottom: 8px;

  ${breaks.greaterThan("md")`
      font-size: 4rem;
      margin-bottom: 16px;
      padding-top: 8px;
  `}
`;

export const SectionText = styled.p`
  color: ${(props) => props.theme.primaryLight};
  font-size: 1.2rem;
  margin-bottom: 2px;
  letter-spacing: 0.4rem;
  line-height: 1.6;

  ${breaks.greaterThan("md")`
    font-size: 2rem;
    margin-bottom: 16px;
    letter-spacing: 0.3rem;
    line-height: 1.5;
  `}
`;
