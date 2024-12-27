"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #fb5457;
  border: none;
  border-radius: 50%;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};
  &:hover {
    background-color: #d93f43;
  }
  p {
    color: white;
    font-size: 18px;
    font-family: Inter;
    font-weight: 900;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition > viewportHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButton $isVisible={isVisible} onClick={scrollToTop}>
      <p>↑</p>
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
