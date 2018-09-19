import React from "react";
import githubIcon from "../images/github.png";
import linkIcon from "../images/link.png";
const CarouselItemLinks = props => {
  const links = props.carouselItemLinks.map((link, index) => (
    <a href={link.href} target="_blank" key={index}>
      <img
        className={`icon ${link.type === "github" ? "github" : "link"}`}
        src={link.type === "github" ? githubIcon : linkIcon}
        alt={`${link.type === "github" ? "github repo" : ""} link`}
      />
    </a>
  ));

  return <div className="project-links">{links}</div>;
};

export default CarouselItemLinks;
