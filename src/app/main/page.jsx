"use client";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import Start from "../../components/main/StartContainer";
import AppContainer from "../../components/main/AppContainer";
import WebContainer from "../../components/main/WebContainer";
import ScrollToTop from "../../components/ScrollToTop";
import EndContainer from "../../components/main/EndContainer";
import Footer from "../../components/Footer";
import History from "../../components/main/HistoryContainer";

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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, #fdd8da 95%);
  overflow: hidden;
`;

const ContentContainer = styled.div`
  padding: 150px 10%;
  padding-top: 220px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1100px) {
    padding-top: 220px;
    padding-bottom: 100px;
    align-items: center;
  }
  @media (max-width: 600px) {
    gap: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 50px;
    font-weight: 500;
    line-height: 120%;
    margin: 0;
    white-space: nowrap;
    @media (max-width: 1100px) {
      font-size: 45px;
      text-align: center;
    }
    @media (max-width: 650px) {
      font-size: 35px;
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 1100px) {
    align-items: center;
  }
`;

const Mockup = styled.img`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  overflow: hidden;
  object-fit: cover;
  z-index: -1; /* 콘텐츠 뒤에 위치 */
  @media (max-width: 1100px) {
    visibility: hidden;
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

const ButtonImage = styled.img`
  height: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  p {
    color: ${({ theme }) => theme.colors.gray5};
  }
  @media (max-width: 1100px) {
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
                <ButtonImage
                  src="/googlePlay.svg"
                  alt="구글 플레이스토어 바로가기"
                />
              </Box>
              <Box>
                <ButtonImage
                  src="/appStore.svg"
                  alt="애플 앱 스토어 바로가기"
                />
              </Box>
            </ImageContainer>
          </ButtonContainer>

          <Mockup src="/background.png" alt="mockup" />
        </ContentContainer>
        <More onClick={scrollToNext}>
          <MoreIcon src="/moreIcon.svg" alt="더보기" />
        </More>
      </Background>
      <Start id="next-section" />
      <History />
      <AppContainer />
      <WebContainer />
      <EndContainer />
      <Footer />
      <ScrollToTop />
    </>
  );
}
