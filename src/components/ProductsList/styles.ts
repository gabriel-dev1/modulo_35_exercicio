import styled from 'styled-components'
import { Card } from '../Product/styles'
import { cores } from '../../globalStyles'
import { Props } from '.'

export const Section = styled.section<Omit<Props, 'title' | 'products'>>`
  padding: 64px 0;
  background-color: rgba(255, 235, 217, 0.3);

  ${Card} {
    background-color: ${(props) => props.cardbackground === 'branco' ? cores.branco : cores.vermelho};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 64px;
    row-gap: 32px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  color: ${cores.branco};
`
