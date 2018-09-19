import React from "react";
import avatar_me from "../images/me_5.jpg";

const AboutImage = () => (
  <div>
    <img
      className="about-image image image--circle image--center  image--shadow"
      src={avatar_me}
      alt="about section avatar"
    />
  </div>
);

export default AboutImage;
