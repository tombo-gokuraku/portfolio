import React from "react";

import Section from "./Section";
import SectionContainer from "./SectionContainer";
import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

import SocialLinks from "./SocialLink";

function About(props) {
  return (
    <Section id="about" className="about">
      <SectionContainer>
        <SectionContent>
          <SectionTitle>ABOUT</SectionTitle>
          <SectionHeading>Tombo Gokuraku</SectionHeading>
          <SectionText>
            大企業を目指して大学院に進学し、
            <wbr />
            情報工学・ロボティクスを専攻するも、無い内定
            <br />
            オリジナルアプリを作るという野望を叶えるため、
            <wbr />
            Web系エンジニア && VTuberとして転生
            <wbr />
          </SectionText>
          <SectionHeading>LINKS</SectionHeading>
          <SocialLinks />
        </SectionContent>
        <SectionContent className="section__content--bg-image"></SectionContent>
      </SectionContainer>
    </Section>
  );
}

export default About;
