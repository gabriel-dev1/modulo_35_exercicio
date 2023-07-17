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
        <p>restaurantes</p>
        <span>0 produto(s) no carrinho</span>
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
              <SubTitle>Viva experiencias gastronomicas no conforto da sua casa</SubTitle>
            </div>
      </HeaderStyle>
    </>
  )
}

export default Header
