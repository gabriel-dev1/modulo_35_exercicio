import styled from 'styled-components'
import { Props } from '.'
import { Card } from '../Product/styles'

export const Section = styled.section<Omit<Props, 'title' | 'products'>>`
  padding: 32px 0;
  background-color: ${(props) => props.background === 'white' ? 'lavender' : '#f44444'};

  ${Card} {
    background-color: ${(props) => props.background === 'red' ? 'lavender' : '#f44444'};
  }

  ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  color: #555;
`
