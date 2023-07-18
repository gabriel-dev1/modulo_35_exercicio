import { FooterStyle, Link, Links, Li } from "./styles"
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
          <Li>
            <Link href="">
              <img src={instagram} />
            </Link>
          </Li>
          <Li>
            <Link href="">
              <img src={facebook} />
            </Link>
          </Li>
          <Li>
            <Link href="">
              <img src={twitter} />
            </Link>
          </Li>
        </Links>
        <span>
          A efood é uma plataforma para divulgação de
          estabelecimentos, a responsabilidade pela entrega,
          qualidade dos produtos é toda do estabelecimento contratado.
        </span>
     </FooterStyle>
    </>
  )
}

export default Footer
