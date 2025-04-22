"use client";
import Image from "next/image";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import Start from "../../components/main/StartContainer";
import AppContainer from "../../components/main/AppContainer";
import WebContainer from "../../components/main/WebContainer";
import ScrollToTop from "../../components/ScrollToTop";
import EndContainer from "../../components/main/EndContainer";
import Footer from "../../components/Footer";
import History from "../../components/main/HistoryContainer";
import EffectContainer from "../../components/main/EffectContainer";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 10%, #faadb0 70%);
  align-items: flex-end;
  overflow: hidden;
`;

const ContentContainer = styled.main`
  padding: 150px 10%;
  padding-top: 35vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 60px;
    font-weight: 700;
    line-height: 120%;
    margin: 0;
    white-space: nowrap;
    @media (max-width: 1024px) {
      font-size: 45px;
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 35px;
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const Mockup = styled.div`
  position: absolute;
  width: 100vw;
  top: 70px;
  height: calc(100vh - 70px);
  z-index: -1; /* 콘텐츠 뒤에 위치 */
  left: 0;
  @media (max-width: 1024px) {
    visibility: hidden;
  }

  img {
    height: 100%;
    position: absolute;
    mask-image: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    right: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const More = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  cursor: pointer;
`;

const MoreIcon = styled.img`
  width: 50px;
  object-fit: contain;
  animation: ${bounceAnimation} 1.5s infinite ease-in-out;
`;

const Box = styled.div`
  padding: 7px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  p {
    color: ${({ theme }) => theme.colors.gray5};
  }
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export default function Main() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      const offset = nextSection.getBoundingClientRect().top + window.scrollY; // 정확한 위치 계산
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Background>
        <Header textColor="#595353" />
        <ContentContainer>
          <Content>
            <h1>
              돌봄이 부담이 되지 않는 세상, <br />
              안심하이가 만들어 갑니다
            </h1>
          </Content>
          <ButtonContainer>
            <p>*추후 서비스 예정입니다.</p>
            <ImageContainer>
              <Box>
                <Image
                  src="/googlePlay.svg"
                  alt="구글 플레이스토어 로고"
                  width={126}
                  height={28}
                />
              </Box>
              <Box>
                <Image
                  src="/appStore.svg"
                  alt="애플 앱 스토어 바로가기"
                  width={123}
                  height={28}
                />
              </Box>
            </ImageContainer>
          </ButtonContainer>
          <Mockup>
            <img src="/안심하이.png" alt="안심하이 배경 이미지" />
          </Mockup>
        </ContentContainer>
        <More onClick={scrollToNext}>
          <MoreIcon src="/moreIcon.svg" alt="더보기 버튼" />
        </More>
      </Background>
      <Start id="next-section" />
      <History />
      <AppContainer />
      <WebContainer />
      <EffectContainer />
      <EndContainer />
      <Footer />
      <ScrollToTop />
    </>
  );
}
