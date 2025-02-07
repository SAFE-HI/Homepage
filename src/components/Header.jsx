"use client";
import React, { useState } from "react";
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
    font-family: "Gmarket Sans";
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.img`
  height: 22px;
  width: 22px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Exit = styled.img`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: white;
  color: white;
  z-index: 1000;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.3s ease;
  /* 768px 이상에서는 숨기기 */
  @media (min-width: 769px) {
    display: none;
  }
`;

const BackGround = styled.div`
  width: 100vh;
  height: 100vh;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
`;

const IconContainer = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  padding: 30px;
  p {
    color: black;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
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
          <Burger
            src="/burgerIcon.svg"
            alt="메뉴"
            onClick={() => setIsOpen(true)}
          />
        </MenuContainer>
      </HeaderContainer>
      <SideMenu $open={isOpen}>
        <IconContainer>
          <Logo src="/logo.svg" alt="안심하이 로고" />
          <Exit
            src="/exitIcon.svg"
            alt="나가기"
            onClick={() => setIsOpen(false)}
          />
        </IconContainer>
        <SideMenuList>
          <p onClick={moveMainPage}>홈</p>
          <p onClick={moveIntroPage}>소개</p>
          <p onClick={moveVisionPage}>비전</p>
        </SideMenuList>
      </SideMenu>
      {isOpen && <BackGround />}
    </>
  );
};

export default Header;
