import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 80px 150px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Title = styled.div`
  width: 100%;
  h1 {
    padding-left: 25px;
    padding-top: 20px;
    font-size: 35px;
  }
`;

const Circle = styled.img`
  width: 40px;
  position: absolute;
  z-index: -1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function TeamIntroduction() {
  return (
    <Container>
      <Title>
        <Circle src="/menuIcon.svg" alt="팀 소개" />
        <h1>팀 소개</h1>
        <ContentContainer>
          <h1></h1>
        </ContentContainer>
      </Title>
    </Container>
  );
}
