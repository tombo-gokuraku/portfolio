import styled from "styled-components";
import breaks from "../style/styled-breaks";

const Item = styled.div`
  flex-basis: ${(props) => (props.main ? "100%" : "auto")};
  font-size: ${(props) => (props.main ? "1.4" : "1.2")}rem;
  color: ${(props) => props.theme.primaryLight};
  border: solid 2px ${(props) => props.theme.primary};
  border-radius: 8px;
  text-align: center;
  padding: 4px 8px;
  margin: 4px;

  ${breaks.greaterThan("sm")`
    font-size: ${(props) => (props.main ? "2" : "1.8")}rem;
    margin: 12px 16px;
  `}

  ${breaks.greaterThan("md")`
    font-size: ${(props) => (props.main ? "2.2" : "2")}rem;
    margin: 16px 20px;
  `}

  ${breaks.greaterThan("lg")`
    font-size: ${(props) => (props.main ? "2.4" : "2.2")}rem;
    margin: 20px 24px;
  `}

`;

export default Item;
