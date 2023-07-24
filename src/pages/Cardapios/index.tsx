import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Products } from '../../pages/Home'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsRestList from '../../components/ProductsRestList'
import { Card, CardFooter } from '../../components/ProductsRest/styles'
import ButtonStyle from '../../components/Button'
import Section from '../../components/Section'
import { Img } from '../../components/Banner/styles'
import Tag from '../../components/Tags'
import ProductsList from '../../components/ProductsList'
/* import { ItemRestaurant } from '../../pages/Home' */

const Cardapios = () => {
  const { id } = useParams()
  const [item, setItem] = useState<Products[]>([])
  const [banner, setBanner] = useState<Products>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setItem(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setBanner(res))
  }, [id])

  if (!item) {
    return <h3>carregando</h3>
  }

  if (!banner) {
    return <h3>carregando</h3>
  }

  return (
   <>
      <Header headerProps={'profile'} />
      {/* <Img style={{backgroundImage: `url(${teste.capa})`}}>
          <div className="container">
            <div>
              <Tag>{teste.tipo}</Tag>
            </div>
            <h2>{teste.titulo}</h2>
          </div>
      </Img> */}
      <Banner produto={banner} />
      {/* {item.cardapio}
     <Section>
        <div className="container">
            <ul>
             {item.map((t) => (
                <li key={t}>
                <Card>
                 <img src={cardapio.} />
                 <CardFooter>
                   <h3>{t.cardapio.nome}</h3>
                   <p>{t.cardapio.descricao}</p>
                   <ButtonStyle />
                 </CardFooter>
               </Card>
                </li>
              ))}
            </ul>
        </div>
        </Section> */}
     <ProductsRestList produtos={item} />
   </>
  )
}

export default Cardapios
