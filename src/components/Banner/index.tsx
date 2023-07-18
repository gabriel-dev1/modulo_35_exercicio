import { Img } from './styles'
import img from '../../assets/images/banner.jpg'
import Tag from '../Tags'

const Banner = () => {
  return (
      <>
      <Img style={{backgroundImage: `url(${img})`}}>
          <div className="container">
            <div>
              <Tag>Italiana</Tag>
            </div>
            <h2>La Dolce Vita Trattoria</h2>
          </div>
      </Img>
      </>
  )
}

export default Banner
