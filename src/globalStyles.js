import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    background: #0D3B66;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
 
export default GlobalStyle;
