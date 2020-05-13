import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import breaks from "../style/styled-breaks";

import backgroundImage from "../images/BackgroundPCB.svg";

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
    return this.props.children.filter(
      (child) => child.type === this.props.child
    ).length;
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
      (child) => child.type === this.props.child
    );
    const controllerButtons = fullPageChildren.map((child, index) => {
      return (
        <ControllerItem key={child.props.id}>
          <ControllerButton
            href={"#" + child.props.id}
            isActive={index === Number(this.state.activeChildIndex)}
            ariaLabel={"go to " + child.props.id}
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
          <Background childrenNumber={this.countFullPageChildren()} />
        </FullPageContainer>
      </React.Fragment>
    );
  }
}

export const FullPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  scroll-behavior: smooth;

  ${breaks.greaterThan("md")`
    // スクロールバーを消すための処理
    //スクロールバーを100vw+17pxの位置に描画し、かつcontent-boxでスクロールバーをはみ出させて、画面外から出す
    padding-right: 17px;
    box-sizing: content-box;
  `}

  // 背景画像を固定するため
  position: relative;
`;

export const FullPageChild = styled.div`
  display: flex;

  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => props.childrenNumber * 100}vh;
  background: no-repeat
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3) -20%,
      #4fc3f7 0%,
      rgba(255, 255, 255, 0.3) 20%
    );
  opacity: 0.2;
  /* animation-name: ripple-circuit; */
  /* animation-duration: 5s; */
  /* animation-iteration-count: infinite; */

  mask-image: url(${backgroundImage});
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: cover;
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

export const ControllerButton = styled.a.attrs((props) => ({
  "aria-label": props.ariaLabel,
}))`
  display: flex;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin: 26px 0;
  border-radius: 50%;

  // アクティブな場合は色を変える
  border: solid 4px
    ${(props) =>
      props.isActive ? props.theme.secondary : props.theme.primaryDark};

  // アイテム間の線を描く
  &::after {
    content: "";
    display: block;
    background-color: ${(props) => props.theme.primaryDark};
    height: 54px;
    width: 4px;
    margin-top: 12px;
  }

  // 最後のControllerButtonだけItem間の線を表示しない
  ${ControllerItem}:last-of-type &::after {
    display: none;
  }
`;

FullPage.defaultProps = {
  child: FullPageChild,
};

FullPage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  child: PropTypes.object,
  as: PropTypes.string,
};
