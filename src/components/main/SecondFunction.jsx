import Image from "next/image";
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
  align-items: flex-start;
  gap: 30px;
  @media (min-width: 1024px) {
    width: 1000px;
    height: 1100px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 750px;
    height: 880px;
  }
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
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  h4 {
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
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    overflow-x: scroll; /* 가로 스크롤 */
    overflow-y: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;
  }
`;

const Comment = styled(SlideUpDiv).attrs({ as: "p" })`
  /* 모바일에서는 숨김 */
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 25px;
    padding-bottom: 40px;
  }
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 25px;
  padding-bottom: 60px;
  font-size: 24px;
  line-height: 150%;
  box-sizing: border-box;
`;

const PhoneComment = styled(SlideUpDiv).attrs({ as: "p" })`
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

const FirstImage = styled(SlideUpDiv)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 750px;
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 500px;
  }
  img {
    top: 50%;
    left: 50%;
    object-fit: contain;
    width: auto; /* 가로 비율 자동 */
    height: 100%; /* 부모의 높이만큼 채움 */
  }
`;

const SecondImage = styled(SlideUpDiv)`
  position: absolute;
  right: 0;
  top: 0;
  height: 750px;
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 500px;
  }
  img {
    top: 50%;
    left: 50%;
    object-fit: contain;
    width: auto; /* 가로 비율 자동 */
    height: 100%; /* 부모의 높이만큼 채움 */
  }
`;

export default function SecondFunction() {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });
  const [firstImageRef, firstImageVisible] = useOnScreen({
    threshold: 0.2,
  });
  const [secondImageRef, secondImageVisible] = useOnScreen({
    threshold: 0.2,
  });
  const [commentRef, commentVisible] = useOnScreen({
    threshold: 0.2,
  });
  const [phoneCommentRef, phoneCommentVisible] = useOnScreen({
    threshold: 0.2,
  });

  return (
    <Container>
      <HeaderContainer ref={headerRef} $isVisible={headerVisible}>
        <p>AI 추천 대화 가이드라인 제공</p>
        <h4>
          간단한 스몰토크로 <br />
          신뢰감 UP
        </h4>
      </HeaderContainer>
      <ImgContainer>
        <FirstImage ref={firstImageRef} $isVisible={firstImageVisible}>
          <Image
            src="/체크리스트.png"
            alt="안심하이 기능 2: 대화 가이드라인 제공(체크리스트 페이지 사진)"
            width={500}
            height={750}
          />
        </FirstImage>
        <SecondImage ref={secondImageRef} $isVisible={secondImageVisible}>
          <Image
            src="/스몰토크.png"
            alt="안심하이 기능 2: 대화 가이드라인 제공(스몰토크 페이지 사진)"
            width={500}
            height={750}
          />
        </SecondImage>

        <Comment ref={commentRef} $isVisible={commentVisible}>
          지난 대화를 바탕으로 <br />
          자연스럽게 체크리스트를 진행해요
        </Comment>
      </ImgContainer>
      <PhoneComment ref={phoneCommentRef} $isVisible={phoneCommentVisible}>
        지난 대화를 바탕으로 <br />
        자연스럽게 체크리스트를 진행해요
      </PhoneComment>
    </Container>
  );
}
