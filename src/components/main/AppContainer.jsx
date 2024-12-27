"use client";
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import SecondFunction from "./Secondfunction";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 100px;
  gap: 80px;
  align-items: center;
`;

const HeaderContainer = styled.div`
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

const Point = styled.div`
  display: flex;
  padding: 6px 9px;
  justify-content: center;
  align-items: center;
  border-radius: 4.5px;
  background: #fb5457;
  color: white;
  font-family: "Gmarket Sans";
  font-size: 12px;
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeInUp} 0.5s ease-out forwards;
    `}
`;

const AppContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  const slides = [
    {
      title: "개인 맞춤형 복지 서비스 추천",
      subtitle: "한 사람, 한 사람에게 딱 맞는 복지를 제공해요",
      description:
        "AI가 수집한 데이터를 통해 복지 대상자에게 가장 적합한 복지 프로그램을 추천할 수 있도록 도와드립니다.",
      image: "/개인_맞춤형_복지서비스_추천.png",
    },
    {
      title: "대화 가이드라인 제공",
      subtitle: "간단한 스몰토크로 친밀감을 쌓아보아요",
      description:
        "적절한 스몰토크 주제를 제안하여 대상자와의 신뢰를 쌓고 대화를 원활히 이어갈 수 있도록 돕습니다.",
      image: "/대화_가이드라인_제공.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <AnimatedContainer ref={ref} $isVisible={isVisible}>
      <Container>
        <HeaderContainer>
          <Logo>
            <img src="/logo.svg" alt="safe-hi" />
            <p>SAFE-HI APP</p>
          </Logo>
          <Header>
            <h1>동행 매니저를 위한 안심하이</h1>
            <p>현장에서의 돌봄 매니저가 사용할 수 있는 AI 앱 서비스입니다.</p>
          </Header>
        </HeaderContainer>

        <SecondFunction />
      </Container>
    </AnimatedContainer>
  );
};

export default AppContainer;
