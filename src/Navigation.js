import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faTools,
  faBlog,
  faComment
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="#about"
            aria-label="go to ABOUT"
          >
            <FontAwesomeIcon
              className="navigation__icon"
              icon={faAddressCard}
            ></FontAwesomeIcon>
            ABOUT
          </a>
        </li>
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="#skills"
            aria-label="go to SKILLS"
          >
            <FontAwesomeIcon
              className="navigation__icon"
              icon={faTools}
            ></FontAwesomeIcon>
            SKILLS
          </a>
        </li>
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="https://tombomemo.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="go to BLOG"
          >
            <FontAwesomeIcon
              className="navigation__icon"
              icon={faBlog}
            ></FontAwesomeIcon>
            BLOG
          </a>
        </li>
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="#contact"
            aria-label="go to CONTACT"
          >
            <FontAwesomeIcon
              className="navigation__icon"
              icon={faComment}
            ></FontAwesomeIcon>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
