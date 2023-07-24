import ProductRest from '../ProductsRest'
import { Products } from '../../pages/Home'
import { Section } from './styles'

export type Props = {
  products?: Products
}

// tentar trazer a api para este arquivo
// products.map não é um array

const ProductsRestList = ({ products }: Props) => {
  if (!products) {
    return <div>Carregando...</div>
  }
    return (
        <Section>
        <div className="container">
            <ul>
              {/* {products?.map((product) => (
                  <li key={product.cardapio.id}>
                    <ProductRest
                      id={product.cardapio.id}
                      title={product.cardapio.nome}
                      description={product.cardapio.descricao}
                      image={product.cardapio.foto}
                    />
                  </li>
                ))} */}
                {products.cardapio.preco}
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
