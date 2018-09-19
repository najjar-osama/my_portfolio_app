import React from "react";

const CarouselItem = props => (
  <div className="carousel-item ">
    <div className="project-wrapper container">{props.children}</div>
  </div>
);

export default CarouselItem;
