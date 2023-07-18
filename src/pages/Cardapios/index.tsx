import Products from '../../models'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsRestList from '../../components/ProductsRestList'

const pizzarias : Products[] = [
    {
      id: 1,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      image: pizza,
      infos: []
    },
    {
      id: 2,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      image: pizza,
      infos: []
    },
    {
      id: 3,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      image: pizza,
      infos: []
    },
    {
      id: 4,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      image: burguer,
      infos: []
    },
    {
      id: 5,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      image: burguer,
      infos: []
    },
    {
      id: 6,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      image: burguer,
      infos: []
    }
]

const Cardapios = () => {
  return (
   <>
      <Header headerProps={'profile'} />
      <Banner />
      <ProductsRestList title={''} products={pizzarias} />
   </>
  )
}

export default Cardapios
