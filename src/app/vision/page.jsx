"use client";
import Header from "../../components/Header";
import styled from "styled-components";
import Footer from "../../components/Footer";
import VisionContent from "../../components/vision/VisionContent";

const Container = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.header`
  margin-top: 70px;
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.sub1};
  gap: 20px;
  h1 {
    font-weight: 600;
    color: white;
  }
  img {
    width: 300px;
    object-fit: contain;
  }
  hr {
    width: 20px;
    height: 2px;
    border: none;
    background-color: white;
  }
  p {
    font-size: 16px;
    font-family: "Gmarket Sans";
    font-weight: 300;
    color: white;
    line-height: 160%;
    text-align: center;
    word-break: keep-all;
  }
`;

export default function VisionPage() {
  return (
    <>
      <Header textColor="black" />
      <Container>
        <HeaderContainer>
          <h1>Vision</h1>
          <hr />
          <p>
            IT 기술을 통해 복지 사각지대까지 효율적으로 지원하고, 한정된 자원을
            최대한 활용해 더 나은 사회를 실현하고자 합니다.
          </p>
        </HeaderContainer>
        <VisionContent />
      </Container>
      <Footer />
    </>
  );
}
