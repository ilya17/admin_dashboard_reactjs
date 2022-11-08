import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    html, body, #app {
        height: 100%;
    }

    body  {
        font-family: 'Mulish', sans-serif;
    }

    #app {
        min-height: 100vh;
    }

    ${normalize}
`;
