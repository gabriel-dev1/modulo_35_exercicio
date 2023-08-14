import styled from 'styled-components'
import { cores } from '../../globalStyles'
import { ButtonStyles } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Aside = styled.aside`
  background-color: ${cores.vermelho};
  padding: 32px 8px 0 8px;
  width: 360px;
  z-index: 1;

  .prices {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

 span {
    padding-top: 40px;
    padding-bottom: 16px;
    color: ${cores.amarelo};
    font-weight: 700;
  }

  ${ButtonStyles} {
    margin-top: 8px;
  }

  .top {
    margin-top: 16px;
  }

  .width {
    width: 344px;
  }

  h2 {
    padding-bottom: 8px;
    font-size: 16px;
    color: ${cores.amarelo};
    font-weight: 700;
  }

  p {
    padding: 16px 0;
    color: ${cores.amarelo};
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.amarelo};
  padding: 8px;
  width: 344px;
  height: 100px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  .icon {
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
    bottom: 100px;
    bottom: 8px;
    right: 0;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    padding-bottom: 16px;
    font-size: 18px;
  }

  .preco {
    color: ${cores.vermelho};
    font-weight: 400;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  margin: 8px 0;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.amarelo}
  }

  input {
    background-color: ${cores.amarelo};
    border: 1px solid ${cores.vermelho};
    margin-top: 8px;
    padding: 8px;
    width: 100%;

    &.error {
      border: 3px solid red;
    }
  }
`
