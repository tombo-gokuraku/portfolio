import React from "react";
import styled from "styled-components";

import Colors from "./style/colors";

import { Section, SectionTitle, SectionText } from "./Section";

import GoogleForm from "./GoogleForm";

function Contact(props) {
  return (
    <Section id="contact">
      <SectionTitle>CONTACT</SectionTitle>
      <SectionText>
        ご依頼・お問い合わせは
        <wbr /> フォームまたは
        <a href="https://twitter.com/Tombo__Gokuraku">
          <TwitterHighlight>Twitter DM</TwitterHighlight>
        </a>
        でご連絡ください。
      </SectionText>
      <GoogleForm />
    </Section>
  );
}

const TwitterHighlight = styled.span`
  color: black;
  border-bottom: 3px solid ${Colors.twitter};
`;

export default Contact;
