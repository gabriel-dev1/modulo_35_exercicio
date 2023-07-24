import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Products } from '../../pages/Home'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsRestList from '../../components/ProductsRestList'

const Cardapios = () => {
  const { id } = useParams()
  const [item, setItem] = useState<Products>()
  const [banner, setBanner] = useState<Products>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setItem(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setBanner(res))
  }, [id])

  if (!item) {
    return <h3>carregando</h3>
  }

  if (!banner) {
    return <h3>carregando</h3>
  }

  return (
   <>
      <Header headerProps={'profile'} />
      <Banner produto={banner} />
     <ProductsRestList items={item.cardapio} />
   </>
  )
}

export default Cardapios
