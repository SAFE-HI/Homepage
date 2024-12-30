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
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
`;

const HeaderContainer = styled(SlideUpDiv)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  p {
    font-size: 20px;
    line-height: 120%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.sub1};
  }

  h1 {
    font-size: 40px;
    line-height: 120%;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.mainText};
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const FirstImage = styled(SlideUpDiv).attrs(({ as = "img" }) => ({ as }))`
  right: 0;
  top: 0;
  height: 750px;
  top: 50%;
  left: 50%;
`;

const FirstComment = styled(SlideUpDiv).attrs({ as: "p" })`
  position: absolute;
  top: 30%;
  line-height: 150%;
  right: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.mainText};
`;

const SecondComment = styled(SlideUpDiv).attrs({ as: "p" })`
  position: absolute;
  bottom: 30%;
  text-align: right;
  line-height: 150%;
  left: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.mainText};
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

  return (
    <Container>
      <HeaderContainer ref={headerRef} $isVisible={headerVisible}>
        <p>AI 복지 정책 추천</p>
        <h1>
          더 나은 복지 서비스를 <br />
          제공받으세요!
        </h1>
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
          복지 대상자의 대화 내용을 <br />
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
