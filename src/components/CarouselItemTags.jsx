import React from "react";

const CarouselItemTags = props => {
  return (
    <div className="project-tags">
      {props.carouselItemTags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default CarouselItemTags;
