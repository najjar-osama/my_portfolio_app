import React from "react";

const Section = props =>
  props.active ? (
    <div className={`section`} id={props.id}>
      <div
        className={`full-page container with-nav-content flex flex-content-spacing--center flex-direction--col ${
          props.cssClass
        }`}
      >
        {props.children}
      </div>
    </div>
  ) : (
    false
  );

export default Section;
