import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
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
  box-sizing: border-box;
  min-height: 100vh;
  background-color: white;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1024px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (max-width: 768px) {
    gap: 30px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h3 {
    margin: 0;
    color: #fb5457;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    white-space: nowrap;
    @media (max-width: 1024px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.mainText};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    word-break: keep-all;
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

const HeaderContainer = styled(SlideUpDiv)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
`;

const Section = styled(SlideUpDiv)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  border-radius: 20px;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PhoneSection = styled(SlideUpDiv)`
  @media (min-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  border-radius: 20px;
  gap: 20px;
`;

const DesktopSection = styled(SlideUpDiv)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  border-radius: 20px;
  gap: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  gap: 5px;
  @media (max-width: 1024px) {
    padding-right: 0;
    text-align: center;
  }
`;

const Number = styled.h1`
  font-size: 80px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray3};
  @media (max-width: 900px) {
    font-size: 80px;
    left: 0;
    top: 0;
    position: relative;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
  margin-bottom: 10px;
  line-height: 120%;
  word-break: keep-all;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  word-break: keep-all;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  /* 이미지 래퍼에 대한 스타일 */
  .web-image {
    width: 500px; /* 정적 크기, 미디어쿼리로 조정 */
    border-radius: 10px;
    object-fit: contain; /* 보존 */
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;

const WebContainer = () => {
  const [headerRef, headerIsVisible] = useOnScreen({ threshold: 0.2 });
  const [firstContentRef, firstContentIsVisible] = useOnScreen({
    threshold: 0.2,
  });
  const [secondContentRef, secondContentIsVisible] = useOnScreen({
    threshold: 0.2,
  });
  return (
    <Container>
      <HeaderContainer ref={headerRef} $isVisible={headerIsVisible}>
        <Logo>
          <img src="/logo.svg" alt="안심하이 로고" />
          <p>SAFE-HI WEB</p>
        </Logo>
        <Header>
          <h3>안심 케어 매니저를 위한 관리 시스템</h3>
          <p>
            대면하는 동행 매니저와 간편하게 소통하고 관리할 수 있는 웹
            서비스입니다.
          </p>
        </Header>
      </HeaderContainer>
      <Section ref={firstContentRef} $isVisible={firstContentIsVisible}>
        <Content>
          <Number>01</Number>
          <Title>
            정확한 감정 파악으로 <br />
            대상자의 심리 상태를 이해해요
          </Title>
          <Description>
            AI는 고독사 위험군의 심리 상태를 분석하여 지자체가 선제적으로 조치를
            취할 수 있도록 돕습니다.
          </Description>
        </Content>
        <ImageContainer>
          <Image
            className="web-image"
            src="/webMockup.png"
            alt="안심하이 웹 기능 1: AI 감정 분석으로 심리 상태 객관적 파악"
            width={450}
            height={300}
          />
        </ImageContainer>
      </Section>
      <DesktopSection
        ref={secondContentRef}
        $isVisible={secondContentIsVisible}
      >
        <ImageContainer>
          <Image
            className="web-image"
            src="/webMockup2.png"
            alt="안심하이 웹 기능 2: LED ON/OFF 데이터 모니터링 "
            width={450}
            height={300}
          />
        </ImageContainer>
        <Content>
          <Number>02</Number>
          <Title>
            고독사 위험을 <br />
            선제적으로 관리해요
          </Title>
          <Description>
            5초마다 실시간으로 분석하여 대상자의 생활 패턴을 즉시
            모니터링합니다.
          </Description>
        </Content>
      </DesktopSection>

      <PhoneSection ref={secondContentRef} $isVisible={secondContentIsVisible}>
        <Content>
          <Number>02</Number>
          <Title>
            고독사 위험을 <br />
            선제적으로 관리해요
          </Title>
          <Description>
            5초마다 실시간으로 분석하여 대상자의 생활 패턴을 즉시
            모니터링합니다.
          </Description>
        </Content>
        <ImageContainer>
          <Image
            className="web-image"
            src="/webMockup2.png"
            alt="안심하이 웹 기능 2: LED ON/OFF 데이터 모니터링 "
            width={450}
            height={300}
          />
        </ImageContainer>
      </PhoneSection>
    </Container>
  );
};

export default WebContainer;
