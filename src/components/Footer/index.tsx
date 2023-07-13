import { FooterStyle, Li, Link, Ul } from "./styles"

const Footer  = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
     <FooterStyle>
          <div className="container">
            <div className="margin">
            <h4>Categorias</h4>
            <Ul>
              <Li>
                <Link href="">Pizzarias</Link>
              </Li>
              <Li>
                <Link href="">Hamburguerias</Link>
              </Li>
              <Li>
                <Link href="">Culinária japonesa</Link>
              </Li>
              <Li>
                <Link href="">Salgados</Link>
              </Li>
            </Ul>
            </div>
            <div className="margin">
            <h4>Acesso rápido</h4>
            <Ul>
              <Li>
                <Link href="">Restaurantes</Link>
              </Li>
              <Li>
                <Link href="">Promoções</Link>
              </Li>
            </Ul>
            </div>
            {year} - &copy; Delivery Foods - Todos os direitos reservados
          </div>
     </FooterStyle>
    </>
  )
}

export default Footer
