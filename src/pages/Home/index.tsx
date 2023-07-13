import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Products from '../../models'
import imageOne from '../../assets/images/salada.png'
import imageTwo from '../../assets/images/massa.png'
import imageThree from '../../assets/images/lanche.jpg'
import imageFour from '../../assets/images/fritas.png'

const restaurantes: Products[] = [
    {
      id: 1,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageThree,
      infos: ['10']
    },
    {
      id: 2,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageOne,
      infos: ['10']
    },
    {
      id: 3,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageTwo,
      infos: ['10']
    },
    {
      id: 4,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageFour,
      infos: ['10']
    }
  ]

  const promocoes: Products[] = [
    {
      id: 5,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageFour,
      infos: ['10% de desconto']
    },
    {
      id: 6,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageFour,
      infos: ['20% de desconto']
    },
    {
      id: 7,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageFour,
      infos: ['50% de desconto']
    },
    {
      id: 8,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageFour,
      infos: ['10% de desconto']
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
