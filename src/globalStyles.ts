import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#f44444',
  branco: 'lavender',
  cinza: '#555',
  linkColor: '#a2a2a2'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    padding-top: 16px;
    background-color: ${cores.branco};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalStyle
