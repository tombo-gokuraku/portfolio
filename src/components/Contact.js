import React from "react";
// import styled from "styled-components";

import { SectionContainer, SectionTitle } from "./Section";

import NetlifyForm from "./NetlifyForm";

function Contact() {
  return (
    <React.Fragment>
      <SectionContainer>
        <SectionTitle>CONTACT</SectionTitle>
        <NetlifyForm />
      </SectionContainer>
    </React.Fragment>
  );
}

export default Contact;
