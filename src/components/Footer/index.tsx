import { FooterStyle, Link, Links, Li } from "./styles"
import logo from '../../assets/images/logo.png'

const Footer  = () => {
  return (
    <>
     <FooterStyle>
        <img src={logo} />
        <Links>
          <Li>
            <Link href="">instagram</Link>
          </Li>
          <Li>
            <Link href="">facebook</Link>
          </Li>
          <Li>
            <Link href="">twitter</Link>
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
