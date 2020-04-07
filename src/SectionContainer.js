import React from "react";

function SectionContainer(props) {
  return (
    <div
      id={props.id}
      className={
        props.className === undefined
          ? "section__container"
          : props.className + " section__container"
      }
    >
      {props.children}
    </div>
  );
}

export default SectionContainer;
