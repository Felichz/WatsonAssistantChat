import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: #333;
    }

    #root {
        display: flex;
        height: 90vh;
        justify-content: center;
        align-items: center;
    }
`;