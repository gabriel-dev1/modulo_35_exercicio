import { Link } from 'react-router-dom'
import Tag from '../Tags'
import { Card, CardFooter, Image, Infos } from './styles'

export type Props = {
  title: string
  description: string
  image: string
  infos?: string[]
  id: number
  avaliacao: number
}

const Product = ({ title, description, image, infos, id, avaliacao }: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 97) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

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
            <span>Avaliação {avaliacao}</span>
          </div>
          <p>{getDescricao(description)}</p>
          <Link to={`/profile/${id}`}>Saiba Mais</Link>
        </CardFooter>
      </Card>
  )
}

export default Product
