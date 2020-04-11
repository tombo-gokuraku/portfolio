import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import breaks from "./style/styled-breaks";
import socialLinkData from "./SocialLinkData";

const SocialLinkContainer = ({ className, ...props }) => {
  const socialLinks = socialLinkData.map(item => {
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

  return <div className={className}>{socialLinks}</div>;
};

const SocialLinks = styled(SocialLinkContainer)`
  display: flex;
  align-items: center;
`;

const SocialLinkItem = styled.a`
  margin-right: 8px;

  ${breaks.sm`
    margin-right: 24px;
  `}
`;

const SocialLinkIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  margin-right: 8px;
  color: ${props => props.color || "black"};
`;

const SocialLinkText = styled.span`
  font-size: 1.8rem;
  color: black;
`;

export default SocialLinks;
