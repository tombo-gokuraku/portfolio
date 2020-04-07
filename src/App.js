import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
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
        <Skills />
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
