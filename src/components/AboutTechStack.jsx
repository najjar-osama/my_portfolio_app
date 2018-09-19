import React from "react";

const AboutTechStack = props => (
  <div className="container about-tech-stack">
    <h2 className="about-header">{props.header}</h2>
    <ul className="tech-list">
      {props.techList.map((icon, index) => (
        <li className="tech-list-item" key={index}>
          <img className="tech-item" src={icon} />
        </li>
      ))}
    </ul>
  </div>
);

export default AboutTechStack;
