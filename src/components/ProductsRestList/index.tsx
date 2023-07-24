import ProductRest from '../ProductsRest'
import { Products } from '../../pages/Home'
import { Section } from './styles'

export type Props = {
  produtos: Products[]
}

// tentar trazer a api para este arquivo
// products.map não é um array

const ProductsRestList = ({ produtos }: Props) => {
  if (!produtos) {
    return <h3>Carregando...</h3>
  }
    return (
        <Section>
        <div className="container">
            <ul>
               {produtos.map((produto) => (
                  <li key={produto.cardapio.id}>
                    <ProductRest
                      id={produto.cardapio.id}
                      title={produto.cardapio.nome}
                      description={produto.cardapio.descricao}
                      image={produto.cardapio.foto}
                    />
                  </li>
                ))}
            </ul>
        </div>
        </Section>
    )
}

export default ProductsRestList

/* import ProductRest from '../ProductsRest'
import Products from '../../models'
import { Section } from './styles'

export type Props = {
    title: string
    products: Products[]
}

const ProductsRestList = ({ products }: Props) => {
    return (
        <Section>
        <div className="container">
            <ul>
            {products.map((product) => (
              <ProductRest
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                infos={product.infos}
              />
            ))}
          </ul>
        </div>
        </Section>
    )
}

export default ProductsRestList */
