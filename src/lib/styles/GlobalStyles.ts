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

    .medium-text {
        font-size: 0.9rem;
    }

    .wrap-list {
        padding-left: 8px;
    }
    
    .w3-third .w3-container a {
        color: #757575 !important;
        text-decoration: none;
    }

    .wrap-section {
        .w3-container:last-of-type {
            hr {
                display: none;
            }

            .boxDadosPort {
                margin-bottom: 40px;
            }
        }
    }
    
`;

export default GlobalStyles;
