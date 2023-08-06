import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#e66767',
  branco: '#fff',
  amarelo: '#ffebd9',
  linkColor: 'rgba(230, 103, 103, 0.7)'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalStyle
