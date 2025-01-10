import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 80px 150px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media (max-width: 1024px) {
    padding: 80px;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.div`
  width: 100%;
  h1 {
    padding-left: 25px;
    padding-top: 20px;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.mainText};
    @media (max-width: 1024px) {
      font-size: 32px;
      padding-left: 20px;
      padding-top: 15px;
    }
    @media (max-width: 768px) {
      font-size: 24px;
      padding-left: 18px;
      padding-top: 12px;
    }
  }
`;

const Circle = styled.img`
  width: 40px;
  object-fit: contain;
  position: absolute;
  z-index: -1;
  @media (max-width: 1024px) {
    width: 35px;
  }
  @media (max-width: 768px) {
    width: 30px;
  }
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
