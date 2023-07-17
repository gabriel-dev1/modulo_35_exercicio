import { Link } from 'react-router-dom'
import Tag from '../Tags'
import { Card, CardFooter, Image, Infos } from './styles'

type Props = {
  title: string
  description: string
  image: string
  infos?: string[]
}

const Product = ({ title, description, image, infos }: Props) => {
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
          <Link to="/new">Saiba Mais</Link>
        </CardFooter>
      </Card>
  )
}

export default Product

/* 222x250 */
