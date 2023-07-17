import ProductsList from '../../components/ProductsList'
import Products from '../../models'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import massa from '../../assets/images/massa.png'
import Header from '../../components/Header'

const restaurantes: Products[] = [
    {
      id: 1,
      title: 'Hioki Sushi',
      description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Peça já!',
      image: massa,
      infos: ['Destaque', 'Japonesa']
    },
    {
      id: 2,
      title: 'La Dolce Vita Tratorria',
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: burguer,
      infos: ['Italiana']
    },
    {
      id: 3,
      title: 'La Dolce Vita Tratorria',
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: pizza,
      infos: ['Italiana']
    },
    {
      id: 4,
      title: 'La Dolce Vita Tratorria',
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: massa,
      infos: ['Italiana']
    },
    {
      id: 5,
      title: 'La Dolce Vita Tratorria',
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: burguer,
      infos: ['Italiana']
    },
    {
      id: 6,
      title: 'La Dolce Vita Tratorria',
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: pizza,
      infos: ['Italiana']
    }
]

const Home = () => {
    return (
      <>
        <Header headerProps={'home'}  />
        <ProductsList title={'Restaurantes'} products={restaurantes} cardbackground={'branco'} />
      </>
    )
}

export default Home
