"use client";
import Header from "../../components/Header";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Container = styled.div`
  width: 100%;
  padding-bottom: 150px;
`;

const HeaderContainer = styled.div`
  margin-top: 70px;
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.sub1};
  gap: 20px;
  h1 {
    font-weight: 600;
    color: white;
  }
  img {
    width: 300px;
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
          <p>안심하이 비전 한줄</p>
        </HeaderContainer>
      </Container>
      <Footer />
    </>
  );
}
