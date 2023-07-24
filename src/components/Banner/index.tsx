import { Img } from './styles'
import img from '../../assets/images/banner.jpg'
import Tag from '../Tags'
import { Products } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  produto: Products
}

const Banner = ({ produto }: Props) => {
  /* const { id } = useParams()
  const [produto, setProduto] = useState<Products>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then((res) => res.json())
    .then((res) => setProduto(res))
  }, [id])
  */

  if (!produto) {
    return <h3>carregando</h3>
  }

  return (
      <>
      <Img style={{backgroundImage: `url(${produto.capa})`}}>
          <div className="container">
            <div>
              <Tag>{produto?.tipo}</Tag>
            </div>
            <h2>{produto?.titulo}</h2>
          </div>
      </Img>
      </>
  )
}

export default Banner
