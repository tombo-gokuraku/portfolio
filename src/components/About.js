import React from "react";
import styled from "styled-components";
import breaks from "../style/styled-breaks";

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
  SectionText,
} from "./Section";

import Item from "./Item";

function About() {
  return (
    <React.Fragment>
      <SectionContainer>
        <SectionTitle>About</SectionTitle>
        <SectionContent>
          <SectionText>
            大学院にてロボット工学を専攻し、C/C++,
            PythonでROSを用いてロボットを操る。 アイディアをすぐに形にできるWebの魅力に取り憑かれ、レファレンスとGitHubを片手に、持ち前の自走力でプログラミングスクールに通わず、独学でWebプログラミングを学ぶ。 好きなエディタはNeoVim、趣味はアニメ鑑賞。
          </SectionText>
        </SectionContent>
        <SectionContent>
          <Flex>
            <Item main>Skills</Item>
            <Item>Ubuntu</Item>
            <Item>NeoVim</Item>
            <Item>tmux</Item>
            <Item>Git</Item>
            <Item>Figma</Item>
            <Item>Gimp</Item>
            <Item>C/C++</Item>
            <Item>Python</Item>
            <Item>HTML</Item>
            <Item>CSS</Item>
            <Item>JavaScript</Item>
            <Item>React</Item>
            <Item>Vue</Item>
          </Flex>
        </SectionContent>
      </SectionContainer>
    </React.Fragment>
  );
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;

  ${breaks.greaterThan("md")`
    // flex-wrap: nowrap;
    // margin: 0 48px;
  `}
`;

export default About;
