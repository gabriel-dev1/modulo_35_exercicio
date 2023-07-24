import { useState } from 'react'
import {  Card, CardFooter, Image, ModalItems, ModalStyles } from './styles'
import Button from '../Button'

export type Props = {
  title: string
  description: string
  image: string
  id: number
  porcao: string
}

interface PropsModal {
  isVisible: boolean
}

const ProductRest = ({ title, description, image, porcao }: Props) => {
  const [modal, setModal] = useState<PropsModal>({
    isVisible: false
  })

  const getDescricao = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 80) + '...'
    }
  }

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <CardFooter>
          <h3>{title}</h3>
          <p>{getDescricao(description)}</p>
          <Button type="button" onClick={() => setModal({
            isVisible: true
          })}>Mais detalhes</Button>
        </CardFooter>
      </Card>
      <ModalStyles className={modal.isVisible ? 'isVisible' : ''}>
        <ModalItems className="container">
          <img src={image} />
          <div className="margin">
            <h3>{title}</h3>
          <div className="test">
          <p>{description}</p>
          <p className="porcao">{porcao}</p>
          </div>
          <Button>Adicionar ao carrinho - R$ 60,90</Button>
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
