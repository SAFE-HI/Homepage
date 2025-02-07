import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

@font-face {
        font-family: 'Gmarket Sans';
        font-weight: 400;
        font-style: normal;
        src: url('/fonts/GmarketSansTTFLight.ttf') format('ttf');
    }

    @font-face {
        font-family: 'Gmarket Sans';
        font-weight: 500;
        font-style: normal;
        src: url('/fonts/GmarketSansTTFMedium.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Gmarket Sans';
        font-weight: 600;
        font-style: normal;
        src: url('/fonts/GmarketSansTTFBold.ttf') format('ttf');
    }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  
  html,
  body {
    max-width: 100vw;
    /* overflow-x: hidden; */
    font-family: 'Pretendard';
    font-size: 16px;
    margin: 0;
    overflow-y: auto; /* 반드시 필요 */
    height: auto;
  }
  
  body {
    color: #000000;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: black;
  }
`;
