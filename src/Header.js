import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./Navigation";
import SocialLink from "./SocialLink";
import socialLinkData from "./SocialLinkData";

function Header(props) {
  // Header用のリンクアイコンのJSX
  const socialLinksForHeader = socialLinkData.map(item => {
    return (
      <SocialLink
        href={item.hrefLink}
        ariaLabel={item.ariaLabel}
        key={item.hrefLink}
      >
        <FontAwesomeIcon
          className="link__icon"
          icon={item.fontawesomeIcon}
        ></FontAwesomeIcon>
      </SocialLink>
    );
  });
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__title__main">Tombo Gokuraku</h1>
        <span className="header__title__sub"> - Portfolio site</span>
      </div>
      <Navigation />

      <div className="link">{socialLinksForHeader}</div>
    </header>
  );
}

export default Header;
