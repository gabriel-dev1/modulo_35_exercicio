import styled from 'styled-components'
import { TagStyle } from '../Tags/styles'

export const Card = styled.div`
  /* background-color: #fff; */
  padding: 8px;
  border-radius: 8px;
  color: #555;
  position: relative;

  ${TagStyle} {
    margin-right: 8px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 250px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
