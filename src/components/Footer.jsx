import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-family: Inter;
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-left: 60px;
  p {
    font-family: Inter;
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 13px;
    font-weight: 300;
    margin: 0;
  }
`;

const LinkContainer = styled.div`
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  p {
    font-family: Inter;
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 13px;
    font-weight: 300;
    margin: 0;
  }
  img {
    width: 20px;
    object-fit: contain;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LogoContainer>
          <img src="/white-logo.svg" alt="안심하이 로고" />
          <h1>안심하이 SAFE-HI</h1>
        </LogoContainer>
        <InfoContainer>
          <p>사업자 등록번호 : 000-80-00000 | 대표 : 한민우</p>
          <p>주소 : 서울특별시 중구 필동로1길 30 (04620)</p>
          <p>대표 번호 : 010-0000-0000</p>
          <p>Mail : email@email.com</p>
        </InfoContainer>
        <LinkContainer>
          <p>바로가기 :</p>
          <Link href="https://www.instagram.com/safe__hi/">
            <img src="/instargram.svg" alt="인스타그램 바로가기" />
          </Link>
        </LinkContainer>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
