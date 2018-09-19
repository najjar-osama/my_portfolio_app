import React from "react";

const CarouselItemDescription = props => (
  <div className="project-description">
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
);

export default CarouselItemDescription;
