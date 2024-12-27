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

  
  html,
  body {
    max-width: 100vw;
    /* overflow-x: hidden; */
    font-family: 'Gmarket Sans';
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
