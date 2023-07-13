import styled from 'styled-components'

export const FooterStyle = styled.footer`
  padding: 32px 0;
  background-color: #333;
  color: lavender;

  h4 {
    font-size: 17px;
  }

  .margin {
    margin-bottom: 60px;
  }
`
export const Li = styled.li`
  margin-right: 8px;
`

export const Link = styled.a`
  margin-right: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #ccc;
  font-size: 14px;

  &:hover {
    color: #a2a2a2;
  }
`

export const Ul = styled.ul`
  display: flex;
  margin-top: 16px;
`
