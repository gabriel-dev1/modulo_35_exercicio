import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const Img = styled.div`
  position: relative;
  height: 280px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  &::after {
    position: absolute;
    content: '';
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .container {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    z-index: 1;
    position: relative;
  }

  h2 {
    color: ${cores.branco};
  }
`
