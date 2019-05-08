import { createGlobalStyle } from 'styled-components';
import { colours, fonts } from './vars';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${colours.secondary};
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    font-size: ${fonts.lg};
  }

  p {
    font-size: ${fonts.md};
  }

  h1, h2, h3, h4, h5, h6, ul, li, a, p {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
