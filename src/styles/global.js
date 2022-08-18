import { createGlobalStyle } from 'styled-components';
import 'reset-css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'NanumBarunGothic', 'serif';
    background-color: white;
    letter-spacing: -0.5px;
    touch-action: pan-y;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%;
    margin: 0; padding: 0;
  }
  html {
    width: 100%;
    height: 100%;
    margin: 0; padding: 0;
  }
`;

export default GlobalStyle;
