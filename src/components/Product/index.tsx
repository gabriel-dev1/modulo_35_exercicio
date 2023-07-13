import Tag from '../Tags'
import { Card, Image, Infos } from './styles'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
}

const Product = ({ title, description, image, infos }: Props) => {
  return (
    <>
      <Card>
        <Image src={image} />
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <h3>{title}</h3>
        <p>{description}</p>
      </Card>
    </>
  )
}

export default Product

/* 222x250 */
