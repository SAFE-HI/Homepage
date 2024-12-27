"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1100px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  p {
    font-size: 20px;
    line-height: 120%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.sub1};
  }

  h1 {
    font-size: 40px;
    line-height: 120%;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.mainText};
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  p {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 35px;
    padding-bottom: 50px;
    font-size: 24px;
    line-height: 150%;
    box-sizing: border-box;
  }
`;

const FirstImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 800px;
`;

const SecondImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 800px;
`;

export default function SecondFunction() {
  return (
    <Container>
      <HeaderContainer>
        <p>AI 추천 대화 가이드라인 제공</p>
        <h1>
          간단한 스몰토크로 <br />
          신뢰감 UP
        </h1>
      </HeaderContainer>
      <ImgContainer>
        <FirstImage src="/체크리스트.png" alt="체크리스트" />
        <SecondImage src="/스몰토크.png" alt="스몰토크" />
        <p>
          지난 대화를 바탕으로 <br />
          자연스럽게 체크리스트를 진행해요
        </p>
      </ImgContainer>
    </Container>
  );
}
