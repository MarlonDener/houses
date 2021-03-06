import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-decoration: none;
    }


    

html, body{
    scroll-behavior: smooth;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
