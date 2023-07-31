import styled from 'styled-components'
import { TagStyle } from '../Tags/styles'
import { cores } from '../../globalStyles'

export const Card = styled.div`
  position: relative;
  color: ${cores.vermelho};
  width: 472px;
  height: 398px;
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

  div {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;

      img {
        padding-left: 8px;
      }
    }
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
