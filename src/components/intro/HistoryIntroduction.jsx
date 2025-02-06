import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1024px) {
    padding: 50px 80px;
  }
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
`;

const Title = styled.div`
  width: 100%;
  h1 {
    padding-left: 25px;
    padding-top: 15px;
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
  /* align-items: center; */
  white-space: nowrap;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 25px;
  &:last-child:before {
    bottom: auto;
    height: 50%;
  }
  @media (max-width: 1024px) {
    gap: 15px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Year = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.sub1};
  text-align: center;
  flex-shrink: 0;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
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
    background: linear-gradient(to bottom, #fb5457, #fb5457);
  }
  @media (max-width: 1024px) {
    gap: 40px;
  }
  @media (max-width: 768px) {
    gap: 30px;
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
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const DateText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subText};
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mainText};
  white-space: nowrap;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function HistoryIntroduction() {
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
    <Container>
      <Title>
        <Circle src="/menuIcon.svg" alt="연혁" />
        <h1>연혁</h1>
      </Title>
      <ContentContainer>
        <TimelineItem>
          <Year>2024</Year>
          <Events>
            {historyData.map((item, index) => (
              <Event key={index}>
                <DateText>{item.date}</DateText>
                <Description>{item.description}</Description>
              </Event>
            ))}
          </Events>
        </TimelineItem>
      </ContentContainer>
    </Container>
  );
}
