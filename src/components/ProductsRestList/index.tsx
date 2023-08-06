import ProductRest from '../ProductsRest'
import { Products } from '../../pages/Home'
import { Section } from './styles'

export type Props = {
  items: Products
}

const ProductsRestList = ({ items }: Props) => {

  if (!items) {
    return <h3>Carregando...</h3>
  }

    return (
        <Section>
        <div className="container">
            <ul>
               {items.cardapio.map((produto) => (
                  <li key={produto.id}>
                    <ProductRest
                     produtos={produto}
                     id={produto.id}
                     foto={produto.foto}
                     preco={produto.preco}
                     descricao={produto.descricao}
                     nome={produto.nome}
                     porcao={produto.porcao}
                    />
                  </li>
                ))}
            </ul>
        </div>
        </Section>
    )
}

export default ProductsRestList
