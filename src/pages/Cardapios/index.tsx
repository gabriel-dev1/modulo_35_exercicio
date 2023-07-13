import ProductsList from '../../components/ProductsList'
import Products from '../../models'
import imageOne from '../../assets/images/salada.png'
import imageTwo from '../../assets/images/massa.png'
import imageThree from '../../assets/images/lanche.jpg'
import imageFour from '../../assets/images/fritas.png'

const restaurantes : Products[] = [
    {
      id: 1,
      title: 'Pizzarias',
      description: 'As melhores massas',
      image: imageThree,
      infos: []
    },
    {
      id: 2,
      title: 'Hamburgueria',
      description: 'As melhores massas',
      image: imageOne,
      infos: []
    },
    {
      id: 3,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageTwo,
      infos: []
    },
    {
      id: 4,
      title: 'Restaurantes italianos',
      description: 'As melhores massas',
      image: imageFour,
      infos: []
    }
  ]

const Cardapios = () => {
    return (
        <>
          <ProductsList title={'Pizzarias'} background="white" products={restaurantes} />
          <ProductsList title={'Hamburguerias'} background="red" products={restaurantes} />
          <ProductsList title={'Culinária japonesa'} background="white" products={restaurantes} />
          <ProductsList title={'Salgados'} background="red" products={restaurantes} />
        </>
   )
}

export default Cardapios
