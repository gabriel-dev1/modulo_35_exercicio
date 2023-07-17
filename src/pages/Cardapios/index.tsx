import ProductsList from '../../components/ProductsList'
import Products from '../../models'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import Header from '../../components/Header'

const pizzarias : Products[] = [
    {
      id: 1,
      title: 'Pizzarias',
      description: 'As melhores pizzas',
      image: pizza,
      infos: []
    },
    {
      id: 2,
      title: 'Hamburgueria',
      description: 'Os melhores hamburgues',
      image: pizza,
      infos: []
    },
    {
      id: 3,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: pizza,
      infos: []
    },
    {
      id: 4,
      title: 'Piz',
      description: 'As melhores pizzas',
      image: burguer,
      infos: []
    },
    {
      id: 5,
      title: 'Hamburgueria',
      description: 'As melhores massas',
      image: burguer,
      infos: []
    },
    {
      id: 6,
      title: 'Hamburgueria',
      description: 'As melhores massas',
      image: burguer,
      infos: []
    }
]

const Cardapios = () => {
  return (
   <>
      <Header headerProps={'profile'} />
      <ProductsList title={'Pizzarias'} products={pizzarias} cardbackground={'vermelho'} />
   </>
  )
}

export default Cardapios
