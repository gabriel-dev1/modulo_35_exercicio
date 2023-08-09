import styled from 'styled-components'
import { TagStyle } from '../Tags/styles'
import { cores } from '../../globalStyles'

export const Card = styled.div`
  position: relative;
  color: ${cores.vermelho};
  width: 472px;
  height: 398px;
  padding: 8px;

  p {
    padding: 16px 0;
  }

  ${TagStyle} {
    margin-right: 8px;
    color: ${cores.amarelo};
  }

  a {
    background-color: #e66767;
    color: ${cores.amarelo};
    text-decoration: none;
    padding: 4px;
    font-weight: bold;
    font-size: 14px;
  }

  > img {
    width: 100%;
    height: 217px;
    display: block;
    object-fit: cover;
  }
`

export const CardFooter = styled.div`
  background-color: #fff;
  padding: 8px;
  border: 1px solid ${cores.vermelho};
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

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
