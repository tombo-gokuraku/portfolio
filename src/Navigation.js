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
    <nav class="navigation">
      <ul class="navigation__menu">
        <li class="navigation__item">
          <a class="navigation__text" href="#about" aria-label="go to ABOUT">
            <FontAwesomeIcon
              className="navigation__icon"
              icon={faAddressCard}
            ></FontAwesomeIcon>
            ABOUT
          </a>
        </li>
        <li class="navigation__item">
          <a class="navigation__text" href="#skills" aria-label="go to SKILLS">
            <FontAwesomeIcon
              className="navigation__icon"
              icon={faTools}
            ></FontAwesomeIcon>
            SKILLS
          </a>
        </li>
        <li class="navigation__item">
          <a
            class="navigation__text"
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
        <li class="navigation__item">
          <a
            class="navigation__text"
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
