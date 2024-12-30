import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 80px 150px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Title = styled.div`
  width: 100%;
  h1 {
    padding-left: 25px;
    padding-top: 20px;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.mainText};
  }
`;

const Circle = styled.img`
  width: 40px;
  position: absolute;
  z-index: -1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    background: linear-gradient(to bottom, #fb5457, #fb5457);
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
    white-space: nowrap;
  }

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.mainText};
    white-space: nowrap;
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
                <h4>{item.date}</h4>
                <p>{item.description}</p>
              </Event>
            ))}
          </Events>
        </TimelineItem>
      </ContentContainer>
    </Container>
  );
}
