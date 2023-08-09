import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const Card = styled.div`
  color: ${cores.amarelo};
  background-color: ${cores.vermelho};
  width: 320px;
  padding: 8px;
  line-height: 27px;
  height: 100%;

  p {
    padding: 8px 0;
    font-size: 14px;
  }
`

export const CardFooter = styled.div`
  background-color: ${cores.vermelho};
  padding-top: 0;
  border: 1px solid #e66767;
  border-top: none;
`

export const Image = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
`

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.63);
  }
`

export const ModalItems = styled.div`
  max-width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 0 32px;

  header {
    width: 100%;
    display: flex;
    justify-content: end;
    padding-top: 16px;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  > div {
    display: flex;
  }

  h3 {
    padding-bottom: 16px;
  }

  .porcao {
    padding-top: 32px;
    padding-bottom: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .margin {
    margin: 0 24px;
  }

  button {
    padding: 4px;
    cursor: pointer;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    font-weight: bold;
    width: 218px;
    border: none;
  }
`
