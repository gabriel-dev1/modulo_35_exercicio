import Product from '../Product'
import { Section } from './styles'
import { Products } from '../../pages/Home'

export type Props = {
  products: Products[]
  produtos?: Products
}

const ProductsList = ({ products }: Props) => {
  return (
    <Section>
        <div className="container">
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Product
                  item={product}
                />
              </li>
            ))}
          </ul>
    </div>
      </Section>
  )
}

export default ProductsList
