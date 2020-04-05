import React from "react";
import Navigation from "./Navigation";
import SocialLink from "./SocialLink";
import GoogleForm from "./GoogleForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./App.scss";
import tomboImage from "./tombo_icon_red_resized.png";

function App() {
  // SocialLinkのデータをmapで処理して、一気に描画する
  // ariaLabelがそのままlink__textになる
  const socialLinkData = [
    {
      hrefLink: "https://twitter.com/Tombo__Gokuraku",
      ariaLabel: "Twitter",
      fontawesomeIcon: faTwitter
    },
    {
      hrefLink: "https://www.youtube.com/channel/UCUVOtxzJS6kiIhDo1CEW4Og",
      ariaLabel: "Youtube",
      fontawesomeIcon: faYoutube
    },
    {
      hrefLink: "https://github.com/tombo-gokuraku",
      ariaLabel: "GitHub",
      fontawesomeIcon: faGithub
    }
  ];

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

  // About用のリンクアイコンのJSX
  const socialLinksForAbout = socialLinkData.map(item => {
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
        <span className="link__text">{item.ariaLabel}</span>
      </SocialLink>
    );
  });

  return (
    <div className="App">
      <header className="header">
        <div className="header__title">
          <h1 className="header__title__main">Tombo Gokuraku</h1>
          <span className="header__title__sub"> - Portfolio site</span>
        </div>
        <Navigation />

        <div className="link">{socialLinksForHeader}</div>
      </header>
      <main>
        <section className="hero">
          <div className="hero__container--text">
            <h2 className="hero__text--large">Web Engineer && VTuber</h2>
            <h2 className="hero__text">Tombo Gokuraku</h2>
          </div>
          <div className="hero__container--image">
            <img className="hero__image" src={tomboImage} alt="トンボの画像" />
          </div>
        </section>
        <section id="about" className="about section">
          <div className="section__container">
            <div className="section__content">
              <h2 className="section__title">ABOUT</h2>
              <h3 className="section__heading">Tombo Gokuraku</h3>
              <p className="section__text">
                大企業を目指して大学院に進学し、
                <wbr />
                情報工学・ロボティクスを専攻するも、無い内定
                <br />
                オリジナルアプリを作るという野望を叶えるため、
                <wbr />
                Web系エンジニア && VTuberとして転生
                <wbr />
              </p>
              <h3 className="section__heading">LINKS</h3>
              <div className="link">{socialLinksForAbout}</div>
            </div>
            <div className="section__content section__content--bg-image"></div>
          </div>
        </section>
        <section id="skills" className="skills section">
          <h2 className="section__title">SKILLS</h2>
          <div className="section__container">
            <div className="section__content">
              <h3 className="section__heading">Coding</h3>
              <p className="section__text">
                HTML / CSS / SASS(SCSS) / JavaScript / Vue / AWS / Amplify /
                Python / NeoVim / tmux / Linux / Git
              </p>
              <p className="section__text">
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
            <div className="section__content">
              <h3 className="section__heading">Design</h3>
              <p className="section__text">
                Figma / Gimp / Inkscape / Adobe Illustrator / Adobe Photoshop /
                Adobe Premiere Pro / Kdenlive / STUDIO
              </p>
              <p className="section__text">
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
        <section id="contact" className="contact section">
          <h2 className="section__title">CONTACT</h2>
          <p className="section__text">
            ご依頼・お問い合わせは
            <wbr /> フォームまたは
            <a href="https://twitter.com/Tombo__Gokuraku">
              <span className="twitter-highlight">Twitter DM</span>
            </a>
            でご連絡ください。
          </p>
          <GoogleForm />
        </section>
      </main>
      <footer className="footer">©2020 TOMBO GOKURAKU PORTFOLIO.</footer>
    </div>
  );
}

export default App;
