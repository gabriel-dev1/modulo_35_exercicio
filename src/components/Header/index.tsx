import { HeaderStyle, LinkCar, List, ListItem, Title } from './styles'
import { Link } from 'react-router-dom'
import imgCarrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
            <Link to="/">
              <Title>Delivery Foods</Title>
            </Link>
        <nav>
          <List>
              <ListItem>
                  <Link to="/new">Categorias</Link>
              </ListItem>
              <ListItem>
                  <a href="">Promoções</a>
              </ListItem>
              <ListItem>
                  <a href="">Em breve</a>
              </ListItem>
          </List>
        </nav>
        </div>
        <LinkCar href="">
          0 Produtos <img src={imgCarrinho} alt="Carrinho" />
        </LinkCar>
      </HeaderStyle>
    </>
  )
}

export default Header
