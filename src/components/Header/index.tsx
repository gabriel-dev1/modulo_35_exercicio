import { useDispatch, useSelector } from 'react-redux'
import { HeaderStyle,HeaderProfile, CartButton } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'

type Props = {
  headerProps: 'home' | 'profile'
}

const Header = ({ headerProps }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (headerProps === 'profile') {
    return (
      <HeaderProfile>
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <Link to="/">
            <img src={logo} />
          </Link>
          <CartButton onClick={openCart}>{items.length} produto(s) no carrinho</CartButton>
        </div>
      </HeaderProfile>
    )
  }

  return (
    <>
      <HeaderStyle>
            <Link to="/">
              <img src={logo} />
            </Link>
            <div>
              <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </div>
      </HeaderStyle>
    </>
  )
}

export default Header
