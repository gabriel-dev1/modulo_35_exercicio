import ProductRest from '../ProductsRest'
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

export default ProductsRestList
