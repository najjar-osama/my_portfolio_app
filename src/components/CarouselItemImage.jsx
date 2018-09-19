import React from "react";

const CarouselItemImage = props => (
  <div className="project-image">
    <img src={props.carouselItemImageSrc} alt={props.carouselItemImageAlt} />
  </div>
);

export default CarouselItemImage;
