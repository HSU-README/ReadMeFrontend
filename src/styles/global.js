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
  }
`;

export default GlobalStyle;
