import { Link } from 'react-router-dom'
import { Card, CardFooter, Image, Infos } from './styles'
import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tags'

export type Props = {
  title: string
  description: string
  image: string
  id: number
  avaliacao: number
  tipo?: string
}

const Product = ({ title, description, image, id, avaliacao, tipo }: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 97) {
      return description.slice(0, 200) + '...'
    }
    return description
  }

  return (
      <Card>
        <Image src={image} />
        <Infos>
          <Tag>{tipo}</Tag>
        </Infos>
        <CardFooter>
          <div>
            <h3>{title}</h3>
            <span>{avaliacao} <img src={estrela} alt="estrela.svg" /></span>
          </div>
          <p>{getDescricao(description)}</p>
          <Link to={`/profile/${id}`}>Saiba Mais</Link>
        </CardFooter>
      </Card>
  )
}

export default Product
