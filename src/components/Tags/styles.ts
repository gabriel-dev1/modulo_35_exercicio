import styled from 'styled-components'
import { Props } from './index'
import { cores } from '../../globalStyles'

export const TagStyle = styled.div<Props>`
  background-color: ${cores.cinza};
  color: ${cores.branco};
  border-radius: 9px;
  display: inline-block;
  font-weight: bold;
  padding: ${(props) => props.size === 'big' ? '8px 16px' : '4px 6px'};
  font-size: ${(props) => props.size === 'big' ? '16px' : '10px'};
`
