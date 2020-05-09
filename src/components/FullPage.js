import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

const GlobalStyle = createGlobalStyle`
  html {
    // スクロールバーを消す
    overflow: hidden;
  }
`;

export class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      activeChildIndex: 0,
    };
  }

  countFullPageChildren() {
    return this.props.children.filter((child) => child.type === FullPageChild)
      .length;
  }

  // スクロールの度に現在のスクロール位置から表示されているFullPageChildを特定し、インデックスを更新する
  handleScroll(event) {
    let currentChildIndex = (
      event.target.scrollTop /
      (event.target.scrollHeight / this.countFullPageChildren())
    ).toFixed(0);
    this.setState({
      activeChildIndex: currentChildIndex,
    });
  }

  render() {
    const fullPageChildren = this.props.children.filter(
      (child) => child.type === FullPageChild
    );
    const controllerButtons = fullPageChildren.map((child, index) => {
      return (
        <ControllerItem key={child.props.id}>
          <ControllerButton
            href={"#" + child.props.id}
            isActive={index === Number(this.state.activeChildIndex)}
          />
        </ControllerItem>
      );
    });

    return (
      <React.Fragment>
        <GlobalStyle />
        <FullPageContainer as={this.props.as} onScroll={this.handleScroll}>
          <nav>
            <ControllerContainer>{controllerButtons}</ControllerContainer>
          </nav>
          {this.props.children}
        </FullPageContainer>
      </React.Fragment>
    );
  }
}

export const FullPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;

  // スクロールバーを消すための処理
  //スクロールバーを100vw+17pxの位置に描画し、かつcontent-boxでスクロールバーをはみ出させて、画面外から出す
  padding-right: 17px;
  box-sizing: content-box;

  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
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

  // アクティブな場合は色を変える
  border: solid 4px ${(props) => (props.isActive ? "#f7844f" : "#4fc3f7")};

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
