import React from "react";

function Section(props) {
  return (
    <section
      id={props.id}
      className={
        props.className === undefined ? "section" : props.className + " section"
      }
    >
      {props.children}
    </section>
  );
}

export default Section;
