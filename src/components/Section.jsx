import React from "react";

const Section = props => (
  <div className="section" id={props.id}>
    <div className="full-page container with-nav-content flex flex-content-spacing--center flex-direction--col">
      {props.children}
    </div>
  </div>
);

export default Section;
