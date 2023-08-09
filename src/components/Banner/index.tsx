import { Img } from './styles'
import { Products } from '../../pages/Home'

type Props = {
  produto: Products
}

const Banner = ({ produto }: Props) => {
  if (!produto) {
    return <h3>carregando</h3>
  }

  return (
      <>
      <Img style={{backgroundImage: `url(${produto.capa})`}}>
          <div className="container">
            <div>
              <span>{produto?.tipo}</span>
            </div>
            <h2>{produto?.titulo}</h2>
          </div>
      </Img>
      </>
  )
}

export default Banner
