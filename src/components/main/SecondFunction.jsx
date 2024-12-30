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
  height: 1100px;
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
`;

const Comment = styled(SlideUpDiv).attrs({ as: "p" })`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 35px;
  padding-bottom: 50px;
  font-size: 24px;
  line-height: 150%;
  box-sizing: border-box;
`;

const FirstImage = styled(SlideUpDiv).attrs({ as: "img" })`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 800px;
`;

const SecondImage = styled(SlideUpDiv).attrs({ as: "img" })`
  position: absolute;
  right: 0;
  top: 0;
  height: 800px;
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

  return (
    <Container>
      <HeaderContainer ref={headerRef} $isVisible={headerVisible}>
        <p>AI 추천 대화 가이드라인 제공</p>
        <h1>
          간단한 스몰토크로 <br />
          신뢰감 UP
        </h1>
      </HeaderContainer>
      <ImgContainer>
        <FirstImage
          ref={firstImageRef}
          $isVisible={firstImageVisible}
          src="/체크리스트.png"
          alt="체크리스트"
        />
        <SecondImage
          ref={secondImageRef}
          $isVisible={secondImageVisible}
          src="/스몰토크.png"
          alt="스몰토크"
        />
        <Comment ref={commentRef} $isVisible={commentVisible}>
          지난 대화를 바탕으로 <br />
          자연스럽게 체크리스트를 진행해요
        </Comment>
      </ImgContainer>
    </Container>
  );
}
