import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const HeaderStyle = styled.header`
  background-color: #ffebd9;
  width: 100%;
  padding: 20px;
  text-align: center;

  a {
    text-decoration: none;
    color: ${cores.vermelho};

    &:hover {
      color: ${cores.linkColor};
    }
  }
`

export const HeaderProfile = styled(HeaderStyle)`
  color: ${cores.vermelho};

  div {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    font-weight: bold;
  }
`

export const SubTitle = styled.p`
  font-weight: bold;
  color: #e66767;
  line-height: 42px;
  font-size: 32px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
