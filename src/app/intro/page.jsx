"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import LogoIntroduction from "../../components/intro/logoIntroduction";
import Footer from "../../components/Footer";
import TeamIntroduction from "../../components/intro/TeamIntroduction";
import HistoryIntroduction from "../../components/intro/HistoryIntroduction";

const Container = styled.div`
  width: 100%;
  padding-bottom: 150px;
`;

const HeaderContainer = styled.header`
  margin-top: 70px;
  display: flex;
  height: 200px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.sub1};
  gap: 20px;
  h1 {
    font-weight: 600;
    color: white;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 30px 0;
`;

const Button = styled.button`
  width: 100px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  text-decoration: ${({ $isActive }) =>
    $isActive ? "underline" : "none"}; /* 밑줄 추가 */
  transition:
    color 0.3s ease,
    text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default function IntroductionPage() {
  const [activeMenu, setActiveMenu] = useState("logo");

  const handleScroll = (sectionId) => {
    setActiveMenu(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header textColor="black" />
      <Container>
        <HeaderContainer>
          <h1>Introduction</h1>
          <hr />
          <p>돌봄이 부담이 되지 않는 세상, 안심하이가 만들어갑니다.</p>
        </HeaderContainer>
        <ButtonContainer>
          <Button
            onClick={() => handleScroll("logo")}
            $isActive={activeMenu === "logo"}
          >
            로고
          </Button>
          <Button
            onClick={() => handleScroll("team")}
            $isActive={activeMenu === "team"}
          >
            팀
          </Button>
          <Button
            onClick={() => handleScroll("history")}
            $isActive={activeMenu === "history"}
          >
            연혁
          </Button>
        </ButtonContainer>
        <ContentContainer>
          <div id="logo">
            <LogoIntroduction />
          </div>
          <div id="team">
            <TeamIntroduction />
          </div>
          <div id="history">
            <HistoryIntroduction />
          </div>
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
}
