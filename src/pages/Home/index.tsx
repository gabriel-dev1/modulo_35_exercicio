import { useGetRestaurantsQuery } from '../../services/api'
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
  destacado: boolean[]
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [{
    id: number
    foto: string
    preco: number
    descricao: string
    nome: string
    porcao: string
  }]
}

const Home = () => {
  const { data: restaurante } = useGetRestaurantsQuery()

  if (restaurante) {
    return (
      <>
        <Header headerProps={'home'}  />
        <ProductsList products={restaurante} />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
