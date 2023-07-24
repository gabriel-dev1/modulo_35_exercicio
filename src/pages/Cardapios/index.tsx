import { Products } from '../../pages/Home'
import pizza from '../../assets/images/pizza.png'
import burguer from '../../assets/images/burguer.png'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsRestList from '../../components/ProductsRestList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, CardFooter } from '../../components/ProductsRest/styles'
import ButtonStyle from '../../components/Button'
import Section from '../../components/Section'

/* const pizzarias : Products[] = [
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
] */

const Cardapios = () => {
  const { id } = useParams()
  const [teste, setTeste] = useState<Products>()
  const [teste2, setTeste2] = useState<Products[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setTeste(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setTeste2(res))
  }, [id])

  if (!teste) {
    return <div>Carregando</div>
  }

  return (
   <>
      <Header headerProps={'profile'} />
      <Banner produto={teste} />
      <Section>
        <div className="container">
            <ul>
               {/* {teste.map((t) => (
                <li key={t.cardapio.id}>
                <Card>
                 <img src={t.cardapio.foto} />
                 <CardFooter>
                   <h3>{t.cardapio.nome}</h3>
                   <p>{t.cardapio.descricao}</p>
                   <ButtonStyle />
                 </CardFooter>
               </Card>
                </li>
              ))} */}
              {teste.cardapio.descricao}
            </ul>
        </div>
        </Section>
     {/*  <ProductsRestList products={teste2} /> */}
   </>
  )
}

export default Cardapios
