"use client";
import React from "react";
import styled, { css } from "styled-components";
import SecondFunction from "./SecondFunction";
import FirstFunction from "./FirstFunction";
import useOnScreen from "../../hooks/useOnScreen";

const SlideUpDiv = styled.div`
  /* 초기 상태 (화면에 보이지 않을 때) */
  opacity: 0;
  transform: translateY(30px);

  /* transition으로 in/out 모두 자연스럽게 */
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  /* isVisible 이 true 일 때 최종 상태 */
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 100px;
  gap: 100px;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 300px;
  align-items: center;
`;

const HeaderContainer = styled(SlideUpDiv)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h1 {
    margin: 0;
    color: #fb5457;
    text-align: center;
    font-family: "Gmarket Sans";
    font-size: 40px;
    font-weight: 600;
  }
  p {
    color: #101010;
    text-align: center;
    font-family: "Gmarket Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
  }
`;

const Logo = styled.div`
  img {
    width: 40px;
  }
  p {
    color: #fb5457;
    text-align: center;
    font-family: "Gmarket Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppContainer = () => {
  const [headerRef, headerVisible] = useOnScreen({
    threshold: 0.2,
  });

  return (
    <Container>
      <HeaderContainer ref={headerRef} $isVisible={headerVisible}>
        <Logo>
          <img src="/logo.svg" alt="safe-hi" />
          <p>SAFE-HI APP</p>
        </Logo>
        <Header>
          <h1>동행 매니저를 위한 안심하이</h1>
          <p>현장에서의 돌봄 매니저가 사용할 수 있는 AI 앱 서비스입니다.</p>
        </Header>
      </HeaderContainer>
      <ContentContainer>
        <FirstFunction />
        <SecondFunction />
      </ContentContainer>
    </Container>
  );
};

export default AppContainer;
