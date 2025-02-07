import React from "react";
import Image from "next/image";
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
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 50px 40px;
  }
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
  h1 {
    text-align: center;
    word-break: keep-all;
    color: ${({ theme }) => theme.colors.mainText};
    font-weight: 700;
    font-size: 32px;
    line-height: 160%;
    @media (max-width: 1024px) {
      font-size: 24px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const ContentContainer = styled.div`
  h2 {
    font-weight: 500;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.main};
    @media (max-width: 1024px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  hr {
    height: 1px;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray3};
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
`;

const LogoImage = styled(Image)`
  height: 90px;
  width: auto;
  @media (max-width: 1024px) {
    height: 80px;
  }
  @media (max-width: 768px) {
    height: 60px;
  }
  img {
    object-fit: contain;
    width: auto;
    height: 100%;
  }
`;

const CityImage = styled(Image)`
  height: 60px;
  width: auto;
  @media (max-width: 1024px) {
    height: 40px;
  }
  @media (max-width: 768px) {
    height: 30px;
  }
  img {
    object-fit: contain;
    width: auto;
    height: 100%;
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
        {/* <h2>기관</h2> */}
        <hr />
        <Content>
          <Item>
            <LogoImage
              src="/한국사회보장정보원.png"
              alt="한국사회보장정보원"
              width={90}
              height={90}
            />
            <p>한국사회보장정보원</p>
          </Item>
          <Item>
            <LogoImage
              src="/한국노인인력개발원.png"
              alt="한국노인인력개발원"
              width={90}
              height={90}
            />
            <p>한국노인인력개발원</p>
          </Item>
          <Item>
            <LogoImage
              src="/한국장애인개발원.png"
              alt="한국장애인개발원"
              width={90}
              height={90}
            />
            <p>한국장애인개발원</p>
          </Item>
          <Item>
            <LogoImage
              src="/아동권리보장원.png"
              alt="아동권리보장원"
              width={90}
              height={90}
            />
            <p>아동권리보장원</p>
          </Item>
          <Item>
            <LogoImage
              src="/헬스경향.png"
              alt="헬스경향"
              width={90}
              height={90}
            />
            <p>헬스경향</p>
          </Item>
        </Content>
      </ContentContainer>
      {/* <ContentContainer>
        <h2>지자체</h2>
        <hr />
        <ImageContainer>
          <CityImage
            src="/영등포구.png"
            alt="영등포구청"
            width={120}
            height={100}
          />
          <CityImage
            src="/관악구.png"
            alt="관악구청"
            width={120}
            height={100}
          />
          <CityImage
            src="/양산시.png"
            alt="양산시청"
            width={120}
            height={100}
          />
        </ImageContainer>
      </ContentContainer> */}
    </Container>
  );
};

export default EndContainer;
