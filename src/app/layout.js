"use client";
import StyledComponentsRegistry from "../utils/registry";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>SAFE-HI</title>
        <meta name="description" content="안심하이: 돌봄의 시작" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
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
