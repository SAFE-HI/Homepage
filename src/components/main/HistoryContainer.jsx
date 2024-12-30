"use client";
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import useOnScreen from "../../hooks/useOnScreen";

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

const drawLine = keyframes`
  from {
    height: 0;
    background: linear-gradient(to bottom, transparent, transparent);
  }
  to {
    height: 100%;
    background: linear-gradient(to bottom, #fb5457, #fb5457);
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

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  gap: 80px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h2 {
    font-size: 32px;
    line-height: 160%;
    text-align: center;
    color: ${({ theme }) => theme.colors.mainText};
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
    color: #fb5457;
    text-align: center;
    font-family: "Gmarket Sans";
    font-size: 16px;
    font-weight: 400;
  }
  img {
    width: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 750px;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
  align-items: flex-start;
  flex-direction: row;
  &:last-child:before {
    bottom: auto;
    height: 50%;
  }
`;

const Year = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.sub1};
  text-align: center;
  flex-shrink: 0;
  width: 80px;
`;

const Events = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    ${({ $isVisible }) =>
      $isVisible &&
      css`
        animation: ${drawLine} 1s ease forwards;
      `}
  }
`;

const Event = styled.div`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.gray3 : "transparent"};
  padding: 0 20px;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    margin: 0;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.subText};
  }

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.mainText};
  }
  transition: scale 0.3s ease;
  opacity: 0;
  transform: translateY(20px);

  ${({ $isVisible, $delay }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 0.5s ease forwards;
      animation-delay: ${$delay}s;
    `}

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const History = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  const historyData = [
    { date: "2024.12.06", description: "사회보장정보원 표창장 수상" },
    {
      date: "2024.11.27",
      description: "동국대학교 창업아이디어 경진대회 대상 수상",
    },
    {
      date: "2024.11.14",
      description: "DPG AI Challenge 대회 최우수상 수상",
    },
    {
      date: "2024.09.13",
      description: "한전MCS 사회문제 해결 인턴형 프로그램 활동",
    },
  ];

  return (
    <AnimatedContainer ref={ref} $isVisible={isVisible}>
      <Container>
        <HeaderContainer>
          <Header>
            <img src="/logo.svg" alt="logo" />
            <p>연혁</p>
          </Header>
          <h2>
            2024년 8월을 시작으로 안심하이는 <br />
            꾸준히 성장해오고 있습니다.
          </h2>
        </HeaderContainer>
        <Content>
          <TimelineItem>
            <Year>2024</Year>
            <Events $isVisible={isVisible}>
              {historyData.map((item, index) => (
                <Event key={index} $delay={index * 0.4} $isVisible={isVisible}>
                  <h4>{item.date}</h4>
                  <p>{item.description}</p>
                </Event>
              ))}
            </Events>
          </TimelineItem>
        </Content>
      </Container>
    </AnimatedContainer>
  );
};

export default History;
