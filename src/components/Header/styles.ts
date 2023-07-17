import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const HeaderStyle = styled.header`
  background-color: #ffebd9;
  width: 100%;
  padding: 20px;
  text-align: center;

  a {
    color: ${cores.branco};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: ${cores.linkColor};
    }
  }
`

export const HeaderProfile = styled(HeaderStyle)`
  span {
    margin-left: 8px;
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
