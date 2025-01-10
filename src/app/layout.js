"use client";
import StyledComponentsRegistry from "../utils/registry";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>안심하이</title>
        <meta
          name="description"
          content="돌봄이 부담이 되지 않는 세상, 안심하이가 만들어갑니다!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="안심하이" />
        <meta
          property="og:description"
          content="돌봄이 부담이 되지 않는 세상, 안심하이가 만들어갑니다!"
        />
        <meta property="og:url" content="https://safe-hi.co.kr" />
        <meta property="og:locale" content="ko_KR" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
