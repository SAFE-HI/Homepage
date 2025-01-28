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
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  p {
    padding-left: 25px;
    font-size: 16px;
    line-height: 150%;
    font-weight: 300;
    word-break: keep-all;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  align-items: center;
  margin: 0 20px;
  justify-content: center;
  align-content: center;
  gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500) {
    grid-template-columns: repeat(1, 1fr);
  }
  h2 {
    font-size: 22px;
    font-weight: 400;
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    word-break: keep-all;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export default function TeamIntroduction() {
  return (
    <Container>
      <Title>
        <Circle src="/menuIcon.svg" alt="팀 소개" />
        <h1>팀 소개</h1>
        <p>
          팀 '안심하이'는 기술과 사회적 가치를 융합해 더 나은 사회를 만들겠다는
          목표를 공유하며 모였습니다. 우리는 AI 기술을 활용한 고독사 예방
          프로젝트를 통해, 인간의 존엄한 삶을 끝까지 지키고자 합니다.{" "}
        </p>
      </Title>

      <ContentContainer>
        <Content>
          <h2>한민우</h2>
          <h3>PM</h3>
          <p>중앙대학교 소프트웨어벤처 전공</p>
        </Content>
        <Content>
          <h2>남예준</h2>
          <h3>사업/기획</h3>
          <p>경희대학교 호텔경영학과 전공</p>
        </Content>
        <Content>
          <h2>김민수</h2>
          <h3>AI</h3>
          <p>동국대학교 정보통신공학과</p>
        </Content>
        <Content>
          <h2>강병민</h2>
          <h3>AI</h3>
          <p>동국대학교 멀티미디어공학과</p>
        </Content>

        <Content>
          <h2>이준학</h2>
          <h3>벡엔드</h3>

          <p>KAIST 정보보호대학원 석사과정</p>
        </Content>
        <Content>
          <h2>이유진</h2>
          <h3>프론트엔드&디자인</h3>

          <p>동국대학교 멀티미디어공학과</p>
        </Content>
        <Content>
          <h2>이정선</h2>
          <h3>프론트엔드&디자인</h3>

          <p>동국대학교 컴퓨터공학과</p>
        </Content>
        <Content>
          <h2>김연우</h2>
          <h3>데이터분석</h3>
          <p>동국대학교 산업시스템공학과</p>
        </Content>
        <Content>
          <h2>오민석</h2>
          <h3>데이터분석</h3>

          <p>동국대학교 산업시스템공학과</p>
        </Content>
      </ContentContainer>
    </Container>
  );
}
