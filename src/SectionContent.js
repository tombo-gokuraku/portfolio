import React from "react";

function SectionContent(props) {
  return (
    <section
      id={props.id}
      className={
        props.className === undefined
          ? "section__content"
          : props.className + " section__content"
      }
    >
      {props.children}
    </section>
  );
}

export default SectionContent;
