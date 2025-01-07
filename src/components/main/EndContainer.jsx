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

const Container = styled(SlideUpDiv)`
  width: 100%;
  box-sizing: border-box;
  padding: 12%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  align-items: center;
  h1 {
    text-align: center;
    word-break: keep-all;
    color: ${({ theme }) => theme.colors.mainText};
    font-weight: 600;
    font-size: 32px;
    line-height: 160%;
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
    height: 40px;
  }
  @media (max-width: 500px) {
    height: 30px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 20px 0;
`;

const EndContainer = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

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
