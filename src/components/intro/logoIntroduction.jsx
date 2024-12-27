import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Title = styled.div`
  width: 100%;
  h1 {
    padding-left: 25px;
    padding-top: 20px;
    font-size: 35px;
  }
`;

const Circle = styled.img`
  width: 40px;
  position: absolute;
  z-index: -1;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img {
    width: 200px;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const BoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray2};
  padding: 30px 50px;
  border-radius: 10px;
  margin: 10px;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  h2 {
    padding-left: 25px;
  }
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin: 0 auto;
`;

const ColorChip = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 16px;
    font-family: Inter;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    font-family: Inter;
  }
  gap: 10px;
`;

const Color = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

export default function LogoIntroduction() {
  const themeColors = [
    {
      name: "RED",
      theme: "main",
      color: "#FF0A0A",
    },
    {
      name: "PINK",
      theme: "sub1",
      color: "#FB5457",
    },
    {
      name: "LIGHT PINK",
      theme: "sub2",
      color: "#FDD8DA",
    },
  ];

  const getRGB = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `(${r}, ${g}, ${b})`;
  };

  return (
    <Container>
      <Title>
        <Circle src="/menuIcon.svg" alt="로고 소개" />
        <h1>로고 소개</h1>
      </Title>
      <Logo>
        <img src="/logo-empty.svg" alt="안심하이 로고" />
        <BoxContainer>
          <p>
            안심하이의 로고는 심장과 하트를 형상화해 따뜻하고 친근한 이미지를
            전달합니다. <br />
            '안심하이'와 함께, 따뜻한 인사처럼 안심을 느껴보세요.
          </p>
        </BoxContainer>
      </Logo>
      <ColorContainer>
        <h2>Color</h2>
        <ContentContainer>
          {themeColors.map((item, index) => (
            <ColorChip key={index}>
              <Color color={item.theme} />
              <div style={{ paddingLeft: "5px" }}>
                <h3>{item.name}</h3>
                <p>HEX : {item.color}</p> {/* Hex 값 */}
                <p>RGB : {getRGB(item.color)}</p> {/* RGB 값 */}
              </div>
            </ColorChip>
          ))}
        </ContentContainer>
      </ColorContainer>
    </Container>
  );
}
