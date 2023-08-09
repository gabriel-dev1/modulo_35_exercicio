import { FooterStyle, Link, Links } from "./styles"
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer  = () => {
  return (
    <>
     <FooterStyle>
        <img src={logo} />
        <Links>
          <li>
            <Link href="">
              <img src={instagram} />
            </Link>
          </li>
          <li>
            <Link href="">
              <img src={facebook} />
            </Link>
          </li>
          <li>
            <Link href="">
              <img src={twitter} />
            </Link>
          </li>
        </Links>
        <div>
          <span>
            A efood é uma plataforma para divulgação de
            estabelecimentos, a responsabilidade pela entrega,
            qualidade dos produtos é toda do estabelecimento contratado.
          </span>
        </div>
     </FooterStyle>
    </>
  )
}

export default Footer
