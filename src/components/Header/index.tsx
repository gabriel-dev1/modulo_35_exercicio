import { HeaderStyle, SubTitle, HeaderProfile } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

type Props = {
  headerProps: 'home' | 'profile'
}

const Header = ({ headerProps }: Props) => {
  if (headerProps === 'profile') {
    return (
      <HeaderProfile>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <span>0 produto(s) no carrinho</span>
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
              <SubTitle>Viva experiências gastronômicas no conforto da sua casa</SubTitle>
            </div>
      </HeaderStyle>
    </>
  )
}

export default Header
