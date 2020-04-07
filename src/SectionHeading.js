import React from "react";

function SectionHeading(props) {
  return (
    <h3
      id={props.id}
      className={
        props.className === undefined
          ? "section__heading"
          : props.className + " section__heading"
      }
    >
      {props.children}
    </h3>
  );
}

export default SectionHeading;
