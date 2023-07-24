import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

export interface ItemRestaurant {
  id: number
  foto: string
  preco: number
  descricao: string
  nome: string
  porcao: string
}

export type Products = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemRestaurant[]
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
