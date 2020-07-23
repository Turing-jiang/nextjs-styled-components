import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
`;
const SubTitle = styled.h2`
  color: red;
`;

const Paragraph = styled.h3`
  color: blue;
`;

export default function Home() {
  return (
    <div>
      <Title>font-size 50px</Title>
      <SubTitle>font color red</SubTitle>
      <Paragraph>font color blue</Paragraph>
    </div>
  );
}
