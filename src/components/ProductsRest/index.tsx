import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ItemRestaurant } from '../../pages/Home'
import { formataPreco } from '../../pages/Cardapios'
import { add, open } from '../../store/reducers/Cart'
import {  Card, CardFooter, Image, ModalItems, ModalStyles } from './styles'
import Button from '../Button'
import fechar from '../../assets/images/fechar.png'

export type Props = {
  id: number
  foto: string
  preco: number
  descricao: string
  nome: string
  porcao: string
  produtos: ItemRestaurant
}

interface PropsModal {
  isVisible: boolean
}

const ProductRest = ({ foto, preco, descricao, nome, porcao, produtos }: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<PropsModal>({
    isVisible: false
  })

  const getDescricao = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 105) + '...'
    }
  }

  const addItem = () => {
    dispatch(open())
    dispatch(add(produtos))
  }

  return (
    <>
     <Card>
        <Image src={foto} alt={nome} />
        <CardFooter>
          <h3>{nome}</h3>
          <p>{getDescricao(descricao)}</p>
          <Button variant='primary' type="button" onClick={() => setModal({
            isVisible: true
          })}>Adicionar ao carrinho</Button>
        </CardFooter>
      </Card>
      <ModalStyles className={modal.isVisible ? 'isVisible' : ''}>
        <ModalItems className="container">
          <header>
            <img className='fechar' src={fechar} alt="fechar modal" onClick={() => {
              setModal({
                isVisible: false
              })
            }} />
          </header>
          <div>
          <img src={foto} />
          <div className="margin">
            <h3>{nome}</h3>
          <div className="test">
          <p>{descricao}</p>
          <p className="porcao">Serve: de {porcao}</p>
          </div>
          <button onClick={() => {
            addItem()
            setModal({
              isVisible: false
            })
          }}>Adicionar ao carrinho - {formataPreco(preco)}</button>
          </div>
          </div>
        </ModalItems>
        <div className="overlay" onClick={() => {
          setModal({
            isVisible: false
          })
        }}>
        </div>
      </ModalStyles>
    </>
  )
}

export default ProductRest
