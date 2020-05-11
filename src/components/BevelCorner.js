import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// import breaks from "../style/styled-breaks";

export class BevelCorner extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.state = {
      boxWidth: 100,
      boxHeight: 20,
      bevelPoints: "",
    };
    this.updateShape = this.updateShape.bind(this);
  }

  componentDidMount() {
    this.updateShape();
  }

  updateShape() {
    const box = this.text.current.getBoundingClientRect();
    this.setState({
      boxWidth: box.width,
      boxHeight: box.height,
      bevelPoints: this.generateBevelPoints(
        box.width,
        box.height,
        this.props.strokeWidth,
        this.props.bevelWidth
      ),
    });
    console.log(box);
  }

  generateBevelPoints(width, height, strokeWidth, bevelWidth) {
    return `
      M${bevelWidth + strokeWidth / 2} ${strokeWidth / 2}
      H${width - bevelWidth + strokeWidth / 2}
      L${width + strokeWidth / 2} ${bevelWidth + strokeWidth / 2}
      V${height - bevelWidth + strokeWidth / 2}
      L${width - bevelWidth + strokeWidth / 2} ${height + strokeWidth / 2}
      H${bevelWidth + strokeWidth / 2}
      L${strokeWidth / 2} ${height - bevelWidth + strokeWidth / 2}
      V${bevelWidth + strokeWidth / 2}
      L${bevelWidth + strokeWidth / 2} ${strokeWidth / 2}
      H${bevelWidth + strokeWidth}
    `;
  }

  render() {
    // const strokeWidth = 4;
    // const bevelWidth = 8;
    console.log(this.state.boxWidth);
    console.log(this.state.boxHeight);
    console.log(this.state.bevelPoints);
    return (
      <BavelCornerContainer ref={this.text} onClick={this.updateShape}>
        {this.props.children}
        <BavelBorderContainer
          width={this.state.boxWidth}
          height={this.state.boxHeight}
          strokeWidth={this.props.strokeWidth}
        >
          <BavelBorder
            d={this.state.bevelPoints}
            strokeWidth={this.props.strokeWidth}
          />
        </BavelBorderContainer>
      </BavelCornerContainer>
    );
  }
}

const BavelCornerContainer = styled.span`
  position: relative;
  color: ${(props) => props.theme.primaryLight};
  font-size: 4rem;
  padding: 4px;
  text-align: center;
`;

const BavelBorderContainer = styled.svg.attrs((props) => ({
  width: `${props.width + props.strokeWidth}px`,
  height: `${props.height + props.strokeWidth}px`,
  // viewBox: "0 0 100% 100%",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
}))`
  position: absolute;
  top: -${(props) => props.strokeWidth / 2}px;
  left: -${(props) => props.strokeWidth / 2}px;
  width: ${(props) => {
    props.width + props.strokeWidth;
  }}px;
  height: ${(props) => {
    props.height + props.strokeWidth;
  }}px;
  // width: ${(props) => props.width};
  // height: ${(props) => props.height};
`;

const BavelBorder = styled.path.attrs((props) => ({
  stroke: props.theme.primary,
  d: props.d,
}))`
  position: absolute;
  width: 100%;
  height: 100%;
`;

BevelCorner.defaultProps = {
  strokeWidth: 4,
  bevelWidth: 8,
};

BevelCorner.propTypes = {
  children: PropTypes.string,
  as: PropTypes.string,
  strokeWidth: PropTypes.number,
  bevelWidth: PropTypes.number,
};

export default BevelCorner;
