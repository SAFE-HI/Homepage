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

const HeaderContainer = styled.div`
  margin-top: 80px;
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

export default function IntroductionPage() {
  const [activeMenu, setActiveMenu] = useState("logo");

  return (
    <>
      <Header textColor="black" />
      <Container>
        <HeaderContainer>
          <h1>Introduction</h1>
          <hr />
          <p>안심하이 한줄 소개 멘트</p>
        </HeaderContainer>
        <ButtonContainer>
          <Button
            onClick={() => setActiveMenu("logo")}
            $isActive={activeMenu === "logo"}
          >
            로고
          </Button>
          <Button
            onClick={() => setActiveMenu("team")}
            $isActive={activeMenu === "team"}
          >
            팀
          </Button>
          <Button
            onClick={() => setActiveMenu("history")}
            $isActive={activeMenu === "history"}
          >
            연혁
          </Button>
        </ButtonContainer>
        {activeMenu === "logo" && <LogoIntroduction />}
        {activeMenu === "team" && <TeamIntroduction />}
        {activeMenu === "history" && <HistoryIntroduction />}
      </Container>
      <Footer />
    </>
  );
}
