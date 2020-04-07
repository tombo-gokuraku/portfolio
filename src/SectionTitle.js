import React from "react";

function SectionTitle(props) {
  return (
    <h2
      id={props.id}
      className={
        props.className === undefined
          ? "section__title"
          : props.className + " section__title"
      }
    >
      {props.children}
    </h2>
  );
}

export default SectionTitle;
