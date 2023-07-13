import { createGlobalStyle } from 'styled-components'

export const cores = {
  brancoUm: "",
  brancoDois: "",
  red: ""
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
    /*  background-color: #333; */
    background-color: #eee;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalStyle
