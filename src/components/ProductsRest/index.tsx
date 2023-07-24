import { Card, CardFooter, Image } from './styles'
import ButtonStyle from '../Button'
import Tag from '../Tags'

export type Props = {
  title: string
  description: string
  image: string
 id: number
}

const ProductRest = ({ title, description, image }: Props) => {
  return (
      <Card>
        <img src={image} alt={title} />
        <CardFooter>
          <h3>{title}</h3>
          <p>{description}</p>
        <ButtonStyle />
        </CardFooter>
      </Card>
  )
}

export default ProductRest

/* import { Card, CardFooter, Image, Infos } from './styles'
import ButtonStyle from '../Button'
import Tag from '../Tags'

export type Props = {
  title: string
  description: string
  image: string
  infos?: string[]
}

const ProductRest = ({ title, description, image, infos }: Props) => {
  return (
      <Card>
        <Image src={image} />
        <Infos>
          {infos?.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <CardFooter>
          <h3>{title}</h3>
          <p>{description}</p>
        <ButtonStyle />
        </CardFooter>
      </Card>
  )
}

export default ProductRest */
