import Product from '../Product'
import { Section } from './styles'
import { Products } from '../../pages/Home'

export type Props = {
  title: string
  products: Products[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <Section>
        <div className="container">
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Product
                  id={product.id}
                  title={product.titulo}
                  description={product.descricao}
                  image={product.capa}
                  avaliacao={product.avaliacao}
                />
              </li>
            ))}
          </ul>
    </div>
      </Section>
  )
}

export default ProductsList
