import styled from 'styled-components'
import { cores } from '../../globalStyles'
import Vector from '../../assets/images/Vector.png'

export const HeaderStyle = styled.header`
  background-image: url(${Vector});
  width: 100%;
  padding: 20px;
  text-align: center;

  div {
    display: flex;
    justify-content: center;

    p {
      font-weight: bold;
      color: #e66767;
      line-height: 42px;
      font-size: 32px;
      margin-top: 100px;
      width: 500px;
      margin-bottom: 20px;
    }
  }

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
  padding-bottom: 64px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    font-weight: bold;
  }
`

export const CartButton = styled.a`
  color: ${cores.vermelho};
  font-weight: bold;
  cursor: pointer;
`
