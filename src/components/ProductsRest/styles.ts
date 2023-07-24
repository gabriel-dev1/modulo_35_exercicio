import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const Card = styled.div`
  color: ${cores.amarelo};
  background-color: ${cores.vermelho};
  width: 300px;
  padding: 10px;
  line-height: 27px;
  height: 100%;

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
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  padding: 30px;

  header {
    img {
      width: 100px;
      display: block;
      justify-content: space-between;
    }
  }

  h3 {
    padding-bottom: 16px;
  }

  .porcao {
    padding: 16px 0;
  }

  img {
    width: 280px;
    height: 280px;
  }

  .margin {
    margin: 0 24px;
  }
`
