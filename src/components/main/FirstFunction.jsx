"use client";
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (min-width: 1024px) {
    width: 1000px;
  }
`;

const HeaderContainer = styled(SlideUpDiv)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  p {
    font-size: 20px;
    line-height: 120%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.sub1};
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  h1 {
    font-size: 40px;
    line-height: 120%;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.mainText};
    @media (max-width: 1024px) {
      font-size: 34px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FirstImage = styled(SlideUpDiv).attrs(({ as = "img" }) => ({ as }))`
  height: 750px;
  top: 50%;
  left: 50%;
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const FirstComment = styled(SlideUpDiv).attrs({ as: "p" })`
  position: absolute;
  top: 30%;
  line-height: 150%;
  right: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.mainText};
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  /* 모바일에서는 숨김 */
  @media (max-width: 768px) {
    display: none;
  }
`;

const SecondComment = styled(SlideUpDiv).attrs({ as: "p" })`
  position: absolute;
  bottom: 30%;
  text-align: right;
  line-height: 150%;
  left: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.mainText};
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  /* 모바일에서는 숨김 */
  @media (max-width: 768px) {
    display: none;
  }
`;

const CombinedComment = styled(SlideUpDiv).attrs({ as: "h5" })`
  /* 데스크톱에서는 숨김 */
  display: none;

  @media (max-width: 768px) {
    display: block;
    text-align: left;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    word-break: keep-all;
    color: ${({ theme }) => theme.colors.mainText};
  }
`;

export default function FirstFunction() {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });
  const [imageRef, imageVisible] = useOnScreen({ threshold: 0.2 });
  const [firstCommentRef, firstCommentVisible] = useOnScreen({
    threshold: 0.2,
  });
  const [secondCommentRef, secondCommentVisible] = useOnScreen({
    threshold: 0.2,
  });
  const [combinedCommentRef, combinedCommentVisible] = useOnScreen({
    threshold: 0.2,
  });

  return (
    <Container>
      <HeaderContainer ref={headerRef} $isVisible={headerVisible}>
        <Header>
          <p>AI 복지 정책 추천</p>
          <h1>
            더 나은 복지 서비스를 <br />
            제공받으세요!
          </h1>
        </Header>

        <CombinedComment
          ref={combinedCommentRef}
          $isVisible={combinedCommentVisible}
        >
          AI를 활용하여 복지 대상자의 대화 내용 실시간으로 분석, 맞춤형 복지
          서비스 추천 그리고 추천 이유 분석까지 한번에!
        </CombinedComment>
      </HeaderContainer>
      <ImgContainer>
        <FirstImage
          ref={imageRef}
          $isVisible={imageVisible}
          src="/AI_복지_정책.png"
          alt="AI 복지정책"
        />
        <FirstComment ref={firstCommentRef} $isVisible={firstCommentVisible}>
          AI를 활용하여 <br />
          복지 대상자의 대화 내용 <br />
          실시간으로 분석
        </FirstComment>
        <SecondComment ref={secondCommentRef} $isVisible={secondCommentVisible}>
          맞춤형 복지 서비스 추천 <br />
          그리고 추천 이유 분석까지 <br />
          한번에!
        </SecondComment>
      </ImgContainer>
    </Container>
  );
}
