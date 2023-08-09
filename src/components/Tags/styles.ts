import styled from 'styled-components'
import { Props } from './index'
import { cores } from '../../globalStyles'

export const TagStyle = styled.div<Props>`
  background-color: #e66767;
  color: ${cores.branco};
  display: inline-block;
  font-weight: bold;
  padding: 8px 4px;
  font-size: 12px;
`
