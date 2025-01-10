"use client";
import React from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70px;
  padding: 0 50px;
  position: fixed;
  z-index: 100;
  background-color: white;
  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
  cursor: pointer;
  p {
    color: ${({ theme }) => theme.colors.sub1};
    font-family: "GmarketSansMedium";
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
  }
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 36px;
  object-fit: contain;
  cursor: pointer;
`;

const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const Menu = styled.p`
  color: #595353;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  cursor: pointer;
  text-decoration: ${({ $isActive }) =>
    $isActive ? "underline" : "none"}; /* 밑줄 추가 */
  transition:
    color 0.3s ease,
    text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const moveMainPage = () => {
    router.push("/main");
  };

  const moveIntroPage = () => {
    router.push("/intro");
  };

  const moveVisionPage = () => {
    router.push("/vision");
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={moveMainPage}>
        <Logo src="/logo.svg" alt="안심하이 로고" />
        <p>안심하이</p>
      </LogoContainer>
      <MenuContainer>
        <Menu $isActive={pathname === "/intro"} onClick={moveIntroPage}>
          소개
        </Menu>
        <Menu $isActive={pathname === "/vision"} onClick={moveVisionPage}>
          비전
        </Menu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
