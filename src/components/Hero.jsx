import React from "react";
import HeroImage from "./HeroImage";
import HeroTtitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
const Hero = () => (
  <div className="hero">
    <HeroImage />
    <HeroTtitle />
    <HeroSubtitle />
  </div>
);

export default Hero;

/* 
<div class="hero">
<img class="hero-image image image--circle image--center image--bordered image--shadow" src="./images/me_1.jpg" alt="profile avatar">
<a href="#" class="hero-title hero-title-anim">
    <h1>
        <b>&lt;&nbsp;</b>Osa<span class="red-m">m</span>a Najjar
        <b>&nbsp;/&gt;</b><span class="cursor">_</span>
    </h1>
</a>
<h2 class="hero-subtitle">
    <span class="line line--main">
        Hi I am Osama! Software Developer from Syria.
    </span>
    <span class="line line--sub">
        <span class="qoute">“</span>
        I enjoy building modern & nice web apps!
        <span class="qoute">”</span>
    </span>
</h2>
</div>
*/
