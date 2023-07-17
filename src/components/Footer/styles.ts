import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const FooterStyle = styled.footer`
  padding: 32px 0;
  background-color: #ffebd9;
  color: #e66767;
  text-align: center;

  span {
    font-size: 10px;
  }
`

export const Li = styled.li`
  margin-right: 8px;
`

export const Link = styled.a`
  margin-right: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #e66767;
  font-size: 14px;

  &:hover {
    color: ${cores.linkColor};
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin: 32px 0 64px;
`
