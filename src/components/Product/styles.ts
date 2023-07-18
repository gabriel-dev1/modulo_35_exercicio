import styled from 'styled-components'
import { TagStyle } from '../Tags/styles'
import { cores } from '../../globalStyles'

export const Card = styled.div`
  position: relative;
  color: ${cores.vermelho};
  width: 444px;
  padding: 10px;

  p {
    padding: 16px 0;
  }

  ${TagStyle} {
    margin-right: 8px;
  }

  a {
    background-color: #e66767;
    color: #ffffff;
    text-decoration: none;
    padding: 4px;
    font-weight: bold;
    font-size: 14px;
  }
`

export const CardFooter = styled.div`
  background-color: #fff;
  padding: 8px;
  padding-top: 0;
  border: 1px solid #e66767;
  border-top: none;

 /*  div {
    display: flex;

    img {
      margin-left: 155px;
    } */
  }
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
