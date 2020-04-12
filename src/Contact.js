import React from "react";

import { Section, SectionTitle, SectionText } from "./Section";

import GoogleForm from "./GoogleForm";

function Contact(props) {
  return (
    <Section id="contact" className="contact">
      <SectionTitle>CONTACT</SectionTitle>
      <SectionText>
        ご依頼・お問い合わせは
        <wbr /> フォームまたは
        <a href="https://twitter.com/Tombo__Gokuraku">
          <span className="twitter-highlight">Twitter DM</span>
        </a>
        でご連絡ください。
      </SectionText>
      <GoogleForm />
    </Section>
  );
}

export default Contact;
