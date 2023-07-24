import ProductsList from '../../components/ProductsList'
/* import Products from '../../models'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import massa from '../../assets/images/massa.png' */
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type Products = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    descricao: string
    nome: string
    porcao: string
  }
}

const Home = () => {
  const [restaurante, setRestaurante] = useState<Products[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setRestaurante(res))
  }, [])

    return (
      <>
        <Header headerProps={'home'}  />
        <ProductsList title={'Restaurantes'}  products={restaurante} />
      </>
    )
}

export default Home
