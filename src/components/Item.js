import styled from "styled-components";
import breaks from "../style/styled-breaks";

const Item = styled.div`
  flex-basis: ${(props) => (props.main ? "100%" : "auto")};
  font-size: ${(props) => (props.main ? "1.2" : "1.0")}rem;
  font-weight: ${(props) => (props.main ? "bold" : "normal")};
  letter-spacing: ${(props) => (props.main ? "4px" : "2px")};
  color: ${(props) => props.theme.primaryLight};
  border: solid 2px ${(props) => props.theme.primary};
  border-radius: 8px;
  text-align: center;
  padding: 4px 8px;
  margin: 2px;

  ${breaks.greaterThan("sm")`
    font-size: ${(props) => (props.main ? "1.6" : "1.4")}rem;
    letter-spacing: ${(props) => (props.main ? "4px" : "2px")};
    margin: 8px 12px;
  `}

  ${breaks.greaterThan("md")`
    font-size: ${(props) => (props.main ? "2.0" : "1.8")}rem;
    margin: 12px 16px;
  `}

  ${breaks.greaterThan("lg")`
    font-size: ${(props) => (props.main ? "2.4" : "2.2")}rem;
    margin: 16px 20px;
  `}

`;

export default Item;
