import Product from '../Product'
import { Section } from './styles'
import Products from '../../models'

export type Props = {
  title: string
  products: Products[]
  cardbackground: 'branco' | 'vermelho'
}

const ProductsList = ({ products, cardbackground }: Props) => {
  return (
    <Section cardbackground={cardbackground}>
        <div className="container">
          <ul>
            {products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                infos={product.infos} />
            ))}
          </ul>
    </div>
      </Section>
  )
}

export default ProductsList
