import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class FullPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.children);
    const controllerButtons = this.props.children.map((child) => {
      return (
        <ControllerItem key={child.props.id}>
          <ControllerButton href={"#" + child.props.id} />
        </ControllerItem>
      );
    });

    return (
      <FullPageContainer as={this.props.as}>
        <nav>
          <ControllerContainer>{controllerButtons}</ControllerContainer>
        </nav>
        {this.props.children}
      </FullPageContainer>
    );
  }
}

export const FullPageContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  overflow: scroll;
  scroll-behavior: smooth;
`;

export const FullPageChild = styled.div`
  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
`;

export const ControllerContainer = styled.ul`
  position: fixed;
  top: 0;
  left: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const ControllerItem = styled.li``;

export const ControllerButton = styled.a`
  display: flex;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin: 26px 0;
  border-radius: 50%;
  border: solid 4px #4fc3f7;

  background-color: #f7844f;

  // アイテム間の線を描く
  &::after {
    content: "";
    display: block;
    background-color: #4fc3f7;
    height: 54px;
    width: 4px;
    margin-top: 11px;
  }

  // 最後のControllerButtonだけItem間の線を表示しない
  ${ControllerItem}:last-of-type &::after {
    display: none;
  }
`;

FullPage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  as: PropTypes.string,
};
