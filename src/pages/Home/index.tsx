import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Products from '../../models'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import massa from '../../assets/images/massa.png'

const restaurantes: Products[] = [
    {
      id: 1,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: massa,
      infos: []
    },
    {
      id: 2,
      title: 'Hamburgueria',
      description: 'As melhores massas',
      image: burguer,
      infos: []
    },
    {
      id: 3,
      title: 'Pizzaria',
      description: 'As melhores massas',
      image: pizza,
      infos: []
    },
]

const promocoes: Products[] = [
    {
      id: 4,
      title: 'Pizzaria',
      description: 'As melhores pizzas',
      image: pizza,
      infos: ['10% de desconto']
    },
    {
      id: 5,
      title: 'Hamburgueria',
      description: 'Os melhores hamburgues',
      image: burguer,
      infos: ['20% de desconto']
    },
    {
      id: 6,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: massa,
      infos: ['50% de desconto']
    }
]

const Home = () => {
    return (
        <>
          <Banner />
          <ProductsList title={'Restaurantes'} background="white" products={restaurantes} />
          <ProductsList title={'Promoções'} background="red" products={promocoes} />
        </>
    )
}

export default Home
