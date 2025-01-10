"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 150px;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media (max-width: 1024px) {
    padding: 120px 80px;
  }
  @media (max-width: 768px) {
    padding: 100px 40px;
  }
`;

const Vision = styled.div`
  text-align: center;
  font-size: 36px;
  line-height: 180%;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
  color: ${({ theme }) => theme.colors.mainText};
  transition: all 0.3s ease;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  img {
    height: 80px;
    object-fit: contain;
  }
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.sub3 : "transparent"};
  transform: ${({ $isActive }) => ($isActive ? "scale(1.05)" : "transparent")};
  padding: 30px;
  border-radius: 20px;
  transition: all 0.3s ease;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 160%;
  word-break: keep-all;
  font-weight: 300;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  white-space: nowrap;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Logo = styled.div`
  img {
    width: 40px;
    object-fit: contain;
  }
  p {
    color: #fb5457;
    text-align: center;
    font-family: "Gmarket Sans";
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Number = styled.h2`
  font-size: 70px;
  position: absolute;
  top: 15px;
  left: 15px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.sub2 : "rgba(217, 217, 217, 0.6)"};
  z-index: -3;
`;

export default function VisionContent() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const texts = [
    "모두를 위한 따뜻한 돌봄",
    "기술로 함께하는",
    "지속 가능한 복지 세상",
  ];

  const contents = [
    {
      subTitle: "모두를 위한 따뜻한 돌봄",
      title: "everyone",
      imgSrc: "/everyone.svg",
      description:
        "- 사회적 고립, 돌봄 사각지대에 놓인 사람들을 포함하여 누구나 복지의 혜택을 받을 수 있도록 지원 \n" +
        "- 복지 대상자의 삶의 질을 향상시키고, 더 나은 사회를 위한 동반자가 되는 것을 목표로 함",
    },
    {
      subTitle: "기술로 함께하는",
      title: "technology",
      imgSrc: "/technology.svg",
      description:
        "- AI, 데이터 분석, 클라우드 기술 등 IT기술을 활용하여 복지 서비스를 효율적으로 설계 및 제공 \n" +
        "- 사람과 기술이 조화를 이루어 돌봄의 효과성과 신뢰성을 강화",
    },
    {
      subTitle: "지속 가능한 복지 세상",
      title: "sustain",
      imgSrc: "/sustainable.svg",
      description:
        "- 복지 자원의 낭비를 최소화하고, 효율적인 복지 시스템을 구축 \n" +
        "- 개인 맞춤형 복지 서비스를 통해 한정된 자원을 최대한 활용하며 장기적으로 지속 가능한 사회 모델 제시",
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <img src="/logo.svg" alt="안심하이 로고" />
          <p>비전</p>
        </Logo>
        <Vision>
          {texts.map((text, idx) => (
            <Text
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {text}
            </Text>
          ))}
        </Vision>
      </HeaderContainer>

      <ContentContainer>
        {contents.map((item, idx) => (
          <Content
            key={idx}
            // hoverIndex와 idx가 같으면 배경색 변경
            $isActive={hoverIndex === idx}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Number $isActive={hoverIndex === idx}>0{idx + 1}</Number>
              <SubTitle>{item.subTitle}</SubTitle>
              <Title>{item.title}</Title>
            </div>

            <img src={item.imgSrc} alt={item.title} />
            <Description>{item.description}</Description>
          </Content>
        ))}
      </ContentContainer>
    </Container>
  );
}
