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

const Container = styled(AnimatedContainer)`
  width: 100%;
  box-sizing: border-box;
  padding: 12%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  align-items: center;
  h1 {
    font-family: "Gmarket Sans";
    font-weight: 600;
    font-size: 38px;
  }
`;

const ContentContainer = styled.div`
  h2 {
    font-family: "Gmarket Sans";
    font-weight: 500;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.main};
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 30px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  img {
    height: 90px;
  }
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray5};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContent = styled.img`
  height: 60px;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px 0;
`;

const EndContainer = () => {
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
    <Container ref={ref} $isVisible={isVisible}>
      <h1>안심하이는 다양한 협력 기관과 함께합니다</h1>
      <ContentContainer>
        <h2>기관</h2>
        <Content>
          <Item>
            <img src="한국사회보장정보원.png" alt="한국사회보장정보원" />
            <p>한국사회보장정보원</p>
          </Item>
          <Item>
            <img src="한국노인인력개발원.png" alt="한국노인인력개발원" />
            <p>한국노인인력개발원</p>
          </Item>
          <Item>
            <img src="한국장애인개발원.png" alt="한국장애인개발원" />
            <p>한국장애인개발원</p>
          </Item>
          <Item>
            <img src="아동권리보장원.png" alt="아동권리보장원" />
            <p>아동권리보장원</p>
          </Item>
          <Item>
            <img src="헬스경향.png" alt="헬스경향" />
            <p>헬스경향</p>
          </Item>
        </Content>
      </ContentContainer>
      <ContentContainer>
        <h2>지자체</h2>
        <ImageContainer>
          <ImageContent src="영등포구.png" alt="영등포구청" />
          <ImageContent src="관악구.png" alt="관악구청" />
          <ImageContent src="양산시.png" alt="양산시청" />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default EndContainer;
