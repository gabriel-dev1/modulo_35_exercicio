import { Link } from 'react-router-dom'
import Tag from '../Tags'
import { Card, CardFooter, Image, Infos } from './styles'
import nota from '../../assets/images/nota.png'

export type Props = {
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
          <div>
            <h3>{title}</h3>
            <img src={nota} />
          </div>
          <p>{description}</p>
          <Link to="/profile/:${id}">Saiba Mais</Link>
        </CardFooter>
      </Card>
  )
}

export default Product

/* 222x250 */
