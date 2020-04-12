import React from "react";
import tomboImage from "./assets/tombo_icon_red_resized.png";

function Hero(props) {
  return (
    <section className="hero">
      <div className="hero__container--text">
        <h2 className="hero__text--large">Web Engineer && VTuber</h2>
        <h2 className="hero__text">Tombo Gokuraku</h2>
      </div>
      <div className="hero__container--image">
        <img className="hero__image" src={tomboImage} alt="トンボの画像" />
      </div>
    </section>
  );
}

export default Hero;
