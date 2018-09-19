import React from "react";

const AboutBody = props => {
  const paragraphs = props.bodyContent.split("\n");
  return (
    <div className="container about-body end-line">
      {paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default AboutBody;
