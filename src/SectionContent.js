import React from "react";

function SectionContent(props) {
  return (
    <div
      id={props.id}
      className={
        props.className === undefined
          ? "section__content"
          : props.className + " section__content"
      }
    >
      {props.children}
    </div>
  );
}

export default SectionContent;
