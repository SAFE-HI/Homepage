"use client";
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

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

const StartContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 100px;
  gap: 50px;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border-radius: 20px;
  h2 {
    height: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 35px;
    line-height: 160%;
    font-weight: 500;
    white-space: nowrap;
    @media (max-width: 1100px) {
      font-size: 30px;
    }
    @media (max-width: 800px) {
      font-size: 25px;
    }
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

const Start = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
    <AnimatedContainer ref={ref} $isVisible={isVisible} id={id}>
      <StartContainer>
        <Content>
          <h2>
            안심하이는 웰페어테크 기반의 AI 시스템으로 <br /> 고독사 위험을
            관리하고 예방할 수 있도록 합니다. <br /> 안심하이는 맞춤형 복지 정책
            추천을 통해
            <br /> 복지 사각지대 해소에 앞장서고자 합니다.
          </h2>
        </Content>
      </StartContainer>
    </AnimatedContainer>
  );
};

export default Start;
