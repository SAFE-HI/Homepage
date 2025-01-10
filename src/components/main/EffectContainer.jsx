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
  box-sizing: border-box;
  padding: 12%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  align-items: center;
`;

const Header = styled(SlideUpDiv)`
  h1 {
    text-align: center;
    word-break: keep-all;
    color: ${({ theme }) => theme.colors.mainText};
    font-weight: 600;
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

const Item = styled(SlideUpDiv)`
  img {
    height: 120px;
    object-fit: contain;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.mainText};
    white-space: nowrap;
    line-height: 160%;
    text-align: left;
  }
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.subText};
    text-align: left;
    word-break: keep-all;
    line-height: 160%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;

const EffectContainer = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const [content1Ref, content1IsVisible] = useOnScreen({ threshold: 0.2 });
  const [content2Ref, content2IsVisible] = useOnScreen({ threshold: 0.2 });
  const [content3Ref, content3IsVisible] = useOnScreen({ threshold: 0.2 });
  const [content4Ref, content4IsVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <Container>
      <Header ref={ref} $isVisible={isVisible}>
        <h1>안심하이가 왜 필요할까요?</h1>
      </Header>
      <ContentContainer>
        <Content>
          <Item ref={content1Ref} $isVisible={content1IsVisible}>
            <img src="/1-icon.svg" alt="한국사회보장정보원" />
            <h2>
              위험군 집중 관리를 <br />
              통한 고독사 예방
            </h2>
            <p>
              고독사 위험군의 상태를 정밀하게 파악하고 조기에 관리하여 고독사
              발생률 감소 효과
            </p>
          </Item>
          <Item ref={content2Ref} $isVisible={content2IsVisible}>
            <img src="/2-icon.svg" alt="한국노인인력개발원" />
            <h2>
              돌봄 특화 데이터셋 기반 <br />
              정책 수립
            </h2>
            <p>돌봄 특화 데이터셋 구축을 통해 체계적인 복지 지원 가능</p>
          </Item>
          <Item ref={content3Ref} $isVisible={content3IsVisible}>
            <img src="/3-icon.svg" alt="한국장애인개발원" />
            <h2>
              돌봄 인력 문제 해결 및 <br />
              전문성 강화
            </h2>
            <p>
              실시간 가이드라인 제시로 돌봄 인력의 상담 지원 및 인력 공급 문제
              완화
            </p>
          </Item>
          <Item ref={content4Ref} $isVisible={content4IsVisible}>
            <img src="/4-icon.svg" alt="아동권리보장원" />
            <h2>
              맞춤형 서비스로 <br />
              복지 대상자 만족도 향상
            </h2>
            <p>
              복지 대상자 상황에 맞는 맞춤형 서비스 제공을 통한 대상자 만족도
              향상
            </p>
          </Item>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default EffectContainer;
