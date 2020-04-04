import React from "react";
import GoogleForm from "./GoogleForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faTools,
  faBlog,
  faComment,
  faCode,
  faPaintBrush
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./App.scss";
// import bgImage from "./branko-stancevic-GI1hwOGqGtE-unsplash_resize.jpg";
import tomboImage from "./tombo_icon_red_resized.png";

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="header__title">
          <h1 class="header__title__main">Tombo Gokuraku</h1>
          <span class="header__title__sub"> - Portfolio site</span>
        </div>
        <nav class="navigation">
          <ul class="navigation__menu">
            <li class="navigation__item">
              <a
                class="navigation__text"
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
            <li class="navigation__item">
              <a
                class="navigation__text"
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
        <div class="link">
          <a
            href="https://twitter.com/Tombo__Gokuraku"
            class="link__container"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="link__icon"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCUVOtxzJS6kiIhDo1CEW4Og"
            aria-label="Youtube"
            class="link__container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="link__icon"
              icon={faYoutube}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://github.com/tombo-gokuraku"
            class="link__container"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="link__icon"
              icon={faGithub}
            ></FontAwesomeIcon>
          </a>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="hero__container--text">
            <h2 class="hero__text--large">Web Engineer && VTuber</h2>
            <h2 class="hero__text">Tombo Gokuraku</h2>
          </div>
          <div class="hero__container--image">
            <img class="hero__image" src={tomboImage} alt="トンボの画像" />
          </div>
        </section>
        <section id="about" class="about section">
          <div class="section__container">
            <div class="section__content">
              <h2 class="section__title">ABOUT</h2>
              <h3 class="section__heading">Tombo Gokuraku</h3>
              <p class="section__text">
                大企業を目指して大学院に進学し、
                <wbr />
                情報工学・ロボティクスを専攻するも、無い内定
                <br />
                オリジナルアプリを作るという野望を叶えるため、
                <wbr />
                Web系エンジニア && VTuberとして転生
                <wbr />
              </p>
              <h3 class="section__heading">LINKS</h3>
              <div class="link">
                <a
                  href="https://twitter.com/Tombo__Gokuraku"
                  class="link__container"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="link__icon"
                    icon={faTwitter}
                  ></FontAwesomeIcon>
                  <span class="link__text">Twitter</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUVOtxzJS6kiIhDo1CEW4Og"
                  class="link__container"
                  aria-label="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="link__icon"
                    icon={faYoutube}
                  ></FontAwesomeIcon>
                  <span class="link__text">Youtube</span>
                </a>
                <a
                  href="https://github.com/tombo-gokuraku"
                  class="link__container"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="link__icon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                  <span class="link__text">GitHub</span>
                </a>
              </div>
            </div>
            <div class="section__content section__content--bg-image"></div>
          </div>
        </section>
        <section id="skills" class="skills section">
          <h2 class="section__title">SKILLS</h2>
          <div class="section__container">
            <div class="section__content">
              <h3 class="section__heading">Coding</h3>
              <p class="section__text">
                HTML / CSS / SASS(SCSS) / JavaScript / Vue / AWS / Amplify /
                Python / NeoVim / tmux / Linux / Git
              </p>
              <p class="section__text">
                大学院時代に培ったC++/Pythonによる
                <wbr />
                ROSを使ったロボット制御の経験を活かし、
                <wbr />
                ProgateやfreeCodeCampなどを利用して
                <wbr />
                Web系の技術を独学しました。
                <br />
                最近ではVueを使ったWebサイト管理画面制作
                <wbr />
                プロジェクトにてデザインとコーディングを担当しています。
                <wbr />
              </p>

              <FontAwesomeIcon
                className="section__content--bg-icon"
                icon={faCode}
              ></FontAwesomeIcon>
            </div>
            <div class="section__content">
              <h3 class="section__heading">Design</h3>
              <p class="section__text">
                Figma / Gimp / Inkscape / Adobe Illustrator / Adobe Photoshop /
                Adobe Premiere Pro / Kdenlive / STUDIO
              </p>
              <p class="section__text">
                Figmaを使ったWebサイトのデザインや
                <wbr /> Adobe Premiere Proを用いた
                <wbr /> 動画編集などを得意としています。
                <br />
                最近ではNoCode(STUDIO)を用いた
                <wbr />
                Webサイト作成なども手がけています。
                <wbr />
              </p>
              <FontAwesomeIcon
                className="section__content--bg-icon"
                icon={faPaintBrush}
              ></FontAwesomeIcon>
            </div>
          </div>
        </section>
        <section id="contact" class="contact section">
          <h2 class="section__title">CONTACT</h2>
          <p class="section__text">
            ご依頼・お問い合わせは
            <wbr /> フォームまたは
            <a href="https://twitter.com/Tombo__Gokuraku">
              <span class="twitter-highlight">Twitter DM</span>
            </a>
            でご連絡ください。
          </p>
          <GoogleForm />
        </section>
      </main>
      <footer class="footer">©2020 TOMBO GOKURAKU PORTFOLIO.</footer>
    </div>
  );
}

export default App;
