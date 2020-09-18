import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: #333;
    }

    #root {
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }
`;