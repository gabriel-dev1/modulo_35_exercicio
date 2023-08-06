import styled from 'styled-components'
import { cores } from '../../globalStyles'

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

 p {
    padding-top: 40px;
    padding-bottom: 16px;
    color: ${cores.amarelo};
    font-weight: 700;
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

  span {
    color: ${cores.vermelho};
  }
`
