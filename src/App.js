import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import GoogleForm from "./GoogleForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />

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
