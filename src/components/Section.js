import styled from "styled-components";

import breaks from "../style/styled-breaks";

export const SectionContainer = styled.div`
  flex-grow: 1;
  padding: 0 32px;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${breaks.greaterThan("md")`
    padding: 0 48px;
  `}
`;

export const SectionContent = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-grow: 1; */
  /* margin: 0px 28px 8px; */
  /* padding: 0 28px; */
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${breaks.greaterThan("md")`
    flex-basis: 50%;
    margin-bottom: 0;
  `}
`;

export const SectionTitle = styled.h2`
  flex-basis: 100%;
  color: ${(props) => props.theme.primaryLight};
  font-size: 2.4rem;
  margin-bottom: 8px;

  ${breaks.greaterThan("sm")`
    font-size: 3rem;
    margin-bottom: 16px;
  `}

  ${breaks.greaterThan("md")`
    font-size: 4rem;
  `}

  ${breaks.greaterThan("lg")`
    font-size: 5rem;
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
  margin-bottom: 8px;
  letter-spacing: 0.4rem;
  line-height: 1.2;

  ${breaks.greaterThan("sm")`
    font-size: 1.4rem;
    margin-bottom: 10px;
    letter-spacing: 0.6rem;
    line-height: 1.4;
  `}

  ${breaks.greaterThan("md")`
    font-size: 1.6rem;
    margin-bottom: 12px;
    letter-spacing: 0.6rem;
    line-height: 1.6;
  `}

  ${breaks.greaterThan("lg")`
    font-size: 1.8rem;
    margin-bottom: 14px;
    letter-spacing: 0.6rem;
    line-height: 1.8;
  `}

`;
