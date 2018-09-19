import React from "react";

const CarouselItemImage = props => (
  <div className="project-image">
    <img
      className={props.isCompany ? "company-logo" : ""}
      src={props.carouselItemImageSrc}
      alt={props.carouselItemImageAlt}
    />
  </div>
);

export default CarouselItemImage;
