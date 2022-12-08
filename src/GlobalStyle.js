import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    width: 100vw;
    height: 100vh;

    html {
        font-family: 'Roboto', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
        display: flex;
        justify-content: center;
    }
`;
