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
  padding: 50px 100px;
  gap: 40px;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 30px;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 100px;
  }
  @media (max-width: 768px) {
    gap: 80px;
  }
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
  h3 {
    margin: 0;
    color: #fb5457;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.mainText};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Logo = styled.div`
  p {
    margin: 0;
    color: #fb5457;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  img {
    width: 40px;
    object-fit: contain;
    @media (max-width: 1024px) {
      width: 32px;
    }
    @media (max-width: 768px) {
      width: 24px;
    }
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
          <img src="/logo.svg" alt="안심하이 로고" />
          <p>SAFE-HI APP</p>
        </Logo>
        <Header>
          <h3>동행 매니저를 위한 안심하이</h3>
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
