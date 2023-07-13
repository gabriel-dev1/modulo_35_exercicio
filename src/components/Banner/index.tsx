import { Div, Img } from './styles'
import img from '../../assets/images/banner.jpg'
import Tag from '../Tags'

const Banner = () => {
  return (
      <>
      <Img style={{backgroundImage: `url(${img})`}}>
          <div className="container">
            <Div>
              <h2>Vários restaurantes para você experimentar</h2>
              <p>Escolha entre massas, saladas, lanches e muito mais.</p>
            </Div>
            <Tag size="big">Destaque</Tag>
          </div>
      </Img>
      </>
  )
}

export default Banner
