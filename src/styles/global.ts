import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle `

    :root {
        background: #fff;
        --green: #4d9d02;
    }
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    

    body, button {
    font-family: 'Roboto' sans-serif;
    font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    }

    button {
    cursor: pointer;
    }

    [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    }
}
`