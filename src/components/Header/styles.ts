import styled from 'styled-components'

export const HeaderStyle = styled.header`
 /*  background-color: #111; */
  background-color: #f44444;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  a {
    color: lavender;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #a2a2a2; /*  #2f4f4f #708090 #191970 */
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    color: #eee;
  }
`

export const Title = styled.h1`
  /* color: #ddd;
  background-color: #333; */
  color: #555;
  background-color: lavender;
  /* background-color: #e2e2e2; */
  padding: 8px;
  border-radius: 8px;
`

export const List = styled.ul`
   display: flex;
   margin-left: 40px;
`

export const ListItem = styled.li`
  font-weight: bold;
  margin-right: 16px;
`

export const LinkCar = styled.a`
  display: flex;

  img {
    margin-left: 8px;
  }
`
