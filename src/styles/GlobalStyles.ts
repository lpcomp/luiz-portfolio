import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {        
        margin: 0 auto;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f1f1f1;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
`;

export default GlobalStyles;
