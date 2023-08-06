import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsRestList from '../../components/ProductsRestList'
import Cart from '../../components/Cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapios = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: menu } = useGetMenuQuery(id!)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header headerProps="profile" />
      <Banner produto={menu} />
      <ProductsRestList items={menu} />
      <Cart />
    </>
  )

}

export default Cardapios
