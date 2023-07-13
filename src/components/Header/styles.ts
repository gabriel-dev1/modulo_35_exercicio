import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const HeaderStyle = styled.header`
  background-color: ${cores.vermelho};
  padding: 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid ${cores.cinza};

  a {
    color: ${cores.branco};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: ${cores.linkColor};
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Title = styled.h1`
  color: ${cores.cinza};
  background-color: ${cores.branco};
  padding: 8px;
  border-radius: 8px;
`

export const List = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const ListItem = styled.li`
  font-weight: bold;
  margin-right: 16px;
`

export const LinkCar = styled.a`
  display: flex;

  img {
    margin-left: 8px;
  }
`
