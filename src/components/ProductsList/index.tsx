import Product from '../Product'
import { Section, Title } from './styles'
import Products from '../../models'

export type Props = {
  title: string
  background: 'white' | 'red'
  products: Products[]
}

const ProductsList = ({background, title, products}: Props) => {
  return (
      <Section background={background}>
          <div className="container">
          <Title>{title}</Title>
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
