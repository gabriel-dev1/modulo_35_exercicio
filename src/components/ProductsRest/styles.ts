import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const Card = styled.div`
  color: ${cores.amarelo};
  background-color: ${cores.vermelho};
  width: 300px;
  padding: 10px;
  line-height: 27px;

  p {
    padding: 16px 0;
  }
`

export const CardFooter = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
  padding-top: 0;
  border: 1px solid #e66767;
  border-top: none;
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
