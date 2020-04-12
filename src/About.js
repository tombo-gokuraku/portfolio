import React from "react";

import {
  Section,
  SectionContainer,
  SectionContent,
  SectionBgImage,
  SectionTitle,
  SectionHeading,
  SectionText
} from "./Section";

import SocialLinks from "./SocialLink";

import codeImage from "./assets/branko-stancevic-GI1hwOGqGtE-unsplash_resize.jpg";

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
        <SectionBgImage src={codeImage} alt="コーディング画面" />
      </SectionContainer>
    </Section>
  );
}

export default About;
