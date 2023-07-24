import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const Container = styled.section`
  padding: 64px 0;
  background-color: rgba(255, 235, 217, 0.3);

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 64px;
    row-gap: 32px;
  }
`
