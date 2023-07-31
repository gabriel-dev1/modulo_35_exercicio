import styled from 'styled-components'

export const Section = styled.section`
  padding: 64px 0;
  background-color: rgba(255, 235, 217, 0.3);

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 48px;
  }
`
