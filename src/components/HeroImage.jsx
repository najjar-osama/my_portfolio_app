import React from "react";
import HeroImageSrc from "../images/me_1.jpg";
const HeroImage = () => (
  <img
    className="hero-image image image--circle image--center image--bordered image--shadow"
    src={HeroImageSrc}
    alt="profile avatar"
  />
);

export default HeroImage;
