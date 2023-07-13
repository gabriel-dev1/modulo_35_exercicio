import styled from 'styled-components'
import { Props } from '.'
import { Card } from '../Product/styles'
import { cores } from '../../globalStyles'

export const Section = styled.section<Omit<Props, 'title' | 'products'>>`
  padding: 32px 0;
  background-color: ${(props) => props.background === 'white' ?  cores.branco : cores.vermelho};

  ${Card} {
    background-color: ${(props) => props.background === 'red' ?  cores.branco : cores.vermelho};
  }

  ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  color: ${cores.cinza};
`
