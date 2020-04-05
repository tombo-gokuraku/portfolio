import React from "react";

function SocialLink(props) {
  return (
    <a
      className="link__item"
      href={props.href}
      aria-label={props.ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

export default SocialLink;
