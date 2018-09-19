import React from "react";
import AboutImage from "./AboutImage";
import AboutBody from "./AboutBody";
import AboutTechStack from "./AboutTechStack";
import AboutLanguage from "./AboutLanguages";
import AboutSectionData from "../data/AboutSectionData";

const About = () => (
  <div className="about-wrapper">
    <div className="about-block">
      <AboutImage />
      <AboutBody bodyContent={AboutSectionData.bodyContent} />
      <AboutTechStack
        header={AboutSectionData.techHeader}
        techList={AboutSectionData.techList}
      />
      <AboutLanguage languages={AboutSectionData.languages} />
    </div>
  </div>
);

export default About;
