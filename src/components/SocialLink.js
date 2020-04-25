import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import breaks from "../style/styled-breaks";
import socialLinkData from "./SocialLinkData";

const SocialLinkContainer = (props) => {
  const socialLinks = socialLinkData.map((item) => {
    return (
      <SocialLinkItem
        href={item.hrefLink}
        ariaLabel={item.ariaLabel}
        key={item.hrefLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialLinkIcon
          icon={item.fontawesomeIcon}
          color={item.color}
        ></SocialLinkIcon>
        {/* notext属性がある場合はテキストを表示しない */}
        {props.notext ? null : (
          <SocialLinkText>{item.ariaLabel}</SocialLinkText>
        )}
      </SocialLinkItem>
    );
  });

  // React DOMにスタイリングするにはclassNameを渡す必要がある
  return <div className={props.className}>{socialLinks}</div>;
};

SocialLinkContainer.propTypes = {
  notext: PropTypes.any,
  className: PropTypes.string,
};

const SocialLinks = styled(SocialLinkContainer)`
  display: flex;
  align-items: center;
`;

const SocialLinkItem = styled.a.attrs((props) => ({
  "aria-label": props.ariaLabel,
}))`
  margin-right: 8px;

  ${breaks.sm`
    margin-right: 24px;
  `}
`;

const SocialLinkIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 4px;
  color: ${(props) => props.color || "black"};

  ${breaks.md`
    font-size: 1.8rem;
  `}
`;

const SocialLinkText = styled.span`
  font-size: 1.4rem;
  color: black;

  ${breaks.md`
    font-size: 1.8rem;
  `}
`;

export default SocialLinks;
