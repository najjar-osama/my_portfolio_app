import React from "react";

const CarouselItemDescription = props => (
  <div className="project-description">
    <h1>{props.title}</h1>
    {props.description.split("\n").map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </div>
);

export default CarouselItemDescription;
