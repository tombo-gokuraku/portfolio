import React from "react";

function SectionContainer(props) {
  return (
    <section
      id={props.id}
      className={
        props.className === undefined
          ? "section__container"
          : props.className + " section__container"
      }
    >
      {props.children}
    </section>
  );
}

export default SectionContainer;
