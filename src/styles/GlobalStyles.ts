import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        height: 100vh;
    }

    html {
        background-color: var(--surface-primary);
    }

    button {
        cursor: pointer;
    }

    :root {
        --brand: "#34CB79";
        --brand-hover: "#31BB6F";
        --brand-stroke: "#4ECB79";
        
        --surface-primary: "#F4F4F5";
        --surface-secondary: "#FFF";
        --surface-input: "#F0F0F5";
        --surface-brand: "#E1FAEC";

        --text-on-brand: "#FFF";
        --text-primary: "#22394A";
        --text-secondary: "#6C7C80";
    }

    #root {
        height: 100%;
    }
`;
