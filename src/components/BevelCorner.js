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
      </BavelCornerContainer>
    );
  }
}

const BavelCornerContainer = styled.span`
  position: relative;
  color: ${(props) => props.theme.primaryLight};
  font-size: 4rem;
  padding: 4px 8px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background-color: red;
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    z-index: -1;
    width: 95%;
    height: 95%;
    background-color: blue;
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  }
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
