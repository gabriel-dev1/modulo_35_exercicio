import ProductRest from '../ProductsRest'
import { ItemRestaurant } from '../../pages/Home'
import { Section } from './styles'

export type Props = {
  items: ItemRestaurant[]
}

const ProductsRestList = ({ items }: Props) => {

  if (!items) {
    return <h3>Carregando...</h3>
  }

    return (
        <Section>
        <div className="container">
            <ul>
               {items.map((produto) => (
                  <li key={produto.id}>
                    <ProductRest
                      id={produto.id}
                      title={produto.nome}
                      description={produto.descricao}
                      image={produto.foto}
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
