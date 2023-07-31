import styled from 'styled-components'
import { cores } from '../../globalStyles'
import { Props } from '.'

export const ButtonStyles = styled.button<Props>`
  padding: 4px;
  cursor: pointer;
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  font-weight: bold;
  width: ${(props) => props.variant === 'primary' ? '100%' : '218px'};
  border: none;
`
