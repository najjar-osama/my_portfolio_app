import React from "react";
import Hero from "./Hero";
import "../images/intro_bg.png";
const Intro = () => (
  <div className="intro-wrapper">
    <div className="hero-wrapper">
      <div className="full-page container flex flex-content-spacing--center flex-content-align--center">
        <Hero />
      </div>
    </div>
  </div>
);

export default Intro;
