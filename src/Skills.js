import React from "react";

import {
  Section,
  SectionContainer,
  SectionContent,
  SectionBgIcon,
  SectionTitle
} from "./Section";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function Skills(props) {
  return (
    <Section id="skills" className="skills">
      <SectionTitle>SKILLS</SectionTitle>
      <SectionContainer>
        <SectionContent>
          <SectionHeading>Coding</SectionHeading>
          <SectionText>
            HTML / CSS / SASS(SCSS) / JavaScript / Vue / AWS / Amplify / Python
            / NeoVim / tmux / Linux / Git
          </SectionText>
          <SectionText>
            大学院時代に培ったC++/Pythonによる
            <wbr />
            ROSを使ったロボット制御の経験を活かし、
            <wbr />
            ProgateやfreeCodeCampなどを利用して
            <wbr />
            Web系の技術を独学しました。
            <br />
            最近ではVueを使ったWebサイト管理画面制作
            <wbr />
            プロジェクトにてデザインとコーディングを担当しています。
            <wbr />
          </SectionText>
          <SectionBgIcon icon={faCode} />
        </SectionContent>
        <SectionContent>
          <SectionHeading>Design</SectionHeading>
          <SectionText>
            Figma / Gimp / Inkscape / Adobe Illustrator / Adobe Photoshop /
            Adobe Premiere Pro / Kdenlive / STUDIO
          </SectionText>
          <SectionText>
            Figmaを使ったWebサイトのデザインや
            <wbr /> Adobe Premiere Proを用いた
            <wbr /> 動画編集などを得意としています。
            <br />
            最近ではNoCode(STUDIO)を用いた
            <wbr />
            Webサイト作成なども手がけています。
            <wbr />
          </SectionText>
          <SectionBgIcon icon={faPaintBrush} />
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

export default Skills;
