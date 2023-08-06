import { Link } from 'react-router-dom'
import { Card, CardFooter, Image, Infos } from './styles'
import { Products } from '../../pages/Home'
import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tags'

export type Props = {
  item: Products
}

export const getDescricao = (description: string) => {
  if (description.length > 97) {
    return description.slice(0, 200) + '...'
  }
  return description
}

const Product = ({ item }: Props) => {

  return (
      <Card>
        <Image src={item.capa} />
        <Infos>
          {item.destacado ? <Tag>{item.destacado && ('Destaque da semana')}</Tag> :  ''}
          <Tag>{item.tipo}</Tag>
        </Infos>
        <CardFooter>
          <div>
            <h3>{item.titulo}</h3>
            <span>{item.avaliacao} <img src={estrela} alt="estrela.svg" /></span>
          </div>
          <p>{getDescricao(item.descricao)}</p>
          <Link to={`/profile/${item.id}`}>Saiba Mais</Link>
        </CardFooter>
      </Card>
  )
}

export default Product
