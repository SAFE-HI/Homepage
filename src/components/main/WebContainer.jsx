import React, { useEffect, useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StartContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: white;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
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

const AnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeInUp} 0.8s ease-out forwards;
    `}
`;

const HeaderContainer = styled(AnimatedContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
`;

const Section = styled(AnimatedContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 20px;
  gap: 10px;
  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const Number = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray3};

  @media (max-width: 768px) {
    font-size: 80px;
    left: 0;
    top: 0;
    position: relative;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  font-family: "Gmarket Sans";
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 100%;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;

const WebContainer = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setVisibleSections((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <StartContainer>
      <HeaderContainer
        ref={(el) => (sectionRefs.current[0] = el)}
        $isVisible={visibleSections[0]}
      >
        <Logo>
          <img src="/logo.svg" alt="safe-hi" />
          <p>SAFE-HI WEB</p>
        </Logo>
        <Header>
          <h1>안심 케어 매니저를 위한 관리 시스템</h1>
          <p>
            대면하는 동행 매니저와 간편하게 소통하고 관리할 수 있는 웹
            서비스입니다.
          </p>
        </Header>
      </HeaderContainer>
      <Section
        ref={(el) => (sectionRefs.current[1] = el)}
        $isVisible={visibleSections[1]}
      >
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
          <img src="/webMockup.png" />
        </ImageContainer>
      </Section>
      <Section
        ref={(el) => (sectionRefs.current[2] = el)}
        $isVisible={visibleSections[2]}
      >
        <Content>
          <Number>02</Number>
          <Title>고독사 위험을 선제적으로 관리해요</Title>
          <Description>
            5초마다 실시간으로 분석하여 대상자의 생활 패턴을 즉시
            모니터링합니다.
          </Description>
        </Content>
        <ImageContainer>
          <img src="/webMockup2.png" />
        </ImageContainer>
      </Section>
    </StartContainer>
  );
};

export default WebContainer;
