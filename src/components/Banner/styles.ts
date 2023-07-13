import styled from 'styled-components'
import { TagStyle } from '../Tags/styles'
import { cores } from '../../globalStyles'

export const Img = styled.div`
  height: 560px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 50px;
  }

  ${TagStyle} {
    position: absolute;
    top: 70px;
  }
`

export const Div = styled.div`
  background-color: rgba(100, 50, 0, 0.5);
  color: ${cores.branco};
  border-radius: 8px;
  padding: 8px;
  width: 500px;
  position: absolute;
  right: 0;

  p {
    margin: 8px 0;
  }
`
