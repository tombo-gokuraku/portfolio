import React from "react";

function SectionText(props) {
  return (
    <p
      id={props.id}
      className={
        props.className === undefined
          ? "section__text"
          : props.className + " section__text"
      }
    >
      {props.children}
    </p>
  );
}

export default SectionText;
