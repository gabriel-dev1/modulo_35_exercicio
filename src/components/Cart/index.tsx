import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/Cart'
import { formataPreco } from '../../pages/Cardapios'
import { Aside, CartContent, Overlay, CartItem, Row, InputGroup } from './styles'
import { usePurchaseMutation } from '../../services/api'
import Button from '../Button'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const [teste, setTeste] = useState(false)
    const [forms, setForms] = useState(false)
    const [purchase, {isLoading, data, isSuccess}] = usePurchaseMutation()
    const dispatch = useDispatch()

    const getFullPrice = () => {
        return items.reduce((acumulador, valorInicial) => {
            return acumulador += valorInicial.preco
        }, 0)
    }

    const closeCart = () => {
        dispatch(close())
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const form = useFormik({
        initialValues: {
            receiver: '',
            description: '',
            city: '',
            zipCode: '',
            deliveryNumber: '',
            complement: '',
            name: '',
            number: '',
            code: '',
            month: '',
            year: ''
        },
        validationSchema: yup.object({
            receiver: yup
              .string()
              .required('O campo é obrigatório'),
            description: yup
              .string()
              .required('O campo é obrigatório'),
            city: yup
              .string()
              .required('O campo é obrigatório'),
            zipCode: yup
              .string()
              .required('O campo é obrigatório'),
            deliveryNumber: yup
              .string()
              .required('O campo é obrigatório'),
            name: yup
              .string()
              .required('O campo é obrigatório'),
            number: yup
              .string()
              .required('O campo é obrigatório'),
            code: yup
              .number()
              .required('O campo é obrigatório'),
            month: yup
              .number()
              .required('O campo é obrigatório'),
            year: yup
              .number()
              .required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.receiver,
                    address: {
                      description: values.description,
                      city: values.city,
                      zipCode: values.zipCode,
                      deliveryNumber: values.deliveryNumber,
                      complement: values.complement
                    }
                },
                payment: {
                    card: {
                        name: values.name,
                        number: values.number,
                        code: values.code,
                        expires: {
                            month: values.month,
                            year: values.year
                        }
                }
            },
            products: items.map((item) => ({
                id: item.id,
                price: item.preco
            }))
          })
        }
    })

    const checkInput = (fieldName: string) => {
        const alterado = fieldName in form.touched
        const invalido = fieldName in form.errors
        const erro = alterado && invalido

        return erro
    }

    return (
        <CartContent className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <Aside>
              {isSuccess && data ? (
                    <>
                      <h2>Pedido realizado - {data.orderId}</h2>
                      <div className="width">
                          <p>
                              Estamos felizes em informar que seu pedido
                              já está em processo de preparação e,
                              em breve, será entregue no endereço fornecido.
                          </p>
                          <p>
                              Gostaríamos de ressaltar que nossos entregadores
                              não estão autorizados a realizar cobranças extras.
                          </p>
                          <p>
                              Lembre-se da importância de higienizar as mãos
                              após o recebimento do pedido, garantindo assim
                              sua segurança e bem-estar durante a refeição.
                           </p>
                           <p>
                              Esperamos que desfrute de uma deliciosa
                              e agradável experiência gastronômica. Bom apetite!
                           </p>
                       </div>
                       <Button onClick={closeCart}  type="button" variant="primary">Concluir</Button>
                    </>
              ) : (
                  <>
                      {teste ? (
                          <form onSubmit={form.handleSubmit}>
                              {forms ? (
                                  <>
                                        <h2>Pagamento - Valor a pagar {formataPreco(getFullPrice())}</h2>
                                        <InputGroup>
                                          <label htmlFor="name">Nome do cartão</label>
                                          <input className={checkInput('name') ? 'error' : ''} onChange={form.handleChange} value={form.values.name} type="text" id="name" name="name" />
                                        </InputGroup>
                                        <Row>
                                          <InputGroup>
                                              <label htmlFor="number">Número do cartão</label>
                                              <InputMask className={checkInput('number') ? 'error' : ''} mask="9999 9999 9999 9999" onChange={form.handleChange} value={form.values.number} type="text" id="number" name="number" />
                                          </InputGroup>
                                          <InputGroup maxWidth="88px">
                                              <label htmlFor="code">CVV</label>
                                              <InputMask className={checkInput('code') ? 'error' : ''} mask="999" onChange={form.handleChange} value={form.values.code} type="text" id="code" name="code" />
                                          </InputGroup>
                                        </Row>
                                        <Row>
                                          <InputGroup>
                                              <label htmlFor="month">Mês de vencimento</label>
                                              <InputMask className={checkInput('month') ? 'error' : ''} mask="99" onChange={form.handleChange} value={form.values.month} type="text" id="month" name="month" />
                                          </InputGroup>
                                          <InputGroup>
                                              <label htmlFor="year">Ano de vencimento</label>
                                              <InputMask className={checkInput('year') ? 'error' : ''} mask="99" onChange={form.handleChange} value={form.values.year} type="text" id="year" name="year" />
                                          </InputGroup>
                                        </Row>
                                        <Button disabled={isLoading} className="top" onClick={form.handleSubmit} variant="primary" type="submit">{isLoading ? 'Finalizando...' : 'Finalizar pagamento'}</Button>
                                        <Button onClick={() => {setForms(false)}} variant="primary" type="button">Voltar para a edição de endereço</Button>
                                    </>
                              ) : (
                                  <>
                                      <h2>Entrega</h2>
                                      <InputGroup>
                                          <label htmlFor="receiver">Quem irá receber</label>
                                          <input className={checkInput('receiver') ? 'error' : ''} onChange={form.handleChange} value={form.values.receiver} name="receiver" id="receiver" type="text" />
                                      </InputGroup>
                                      <InputGroup>
                                          <label htmlFor="address">Endereço</label>
                                          <input className={checkInput('description') ? 'error' : ''} onChange={form.handleChange} value={form.values.description} name="description" id="address" type="text" />
                                      </InputGroup>
                                      <InputGroup>
                                          <label htmlFor="city">Cidade</label>
                                          <input className={checkInput('city') ? 'error' : ''} onChange={form.handleChange} value={form.values.city} name="city" id="city" type="text" />
                                      </InputGroup>
                                      <Row>
                                          <InputGroup>
                                              <label htmlFor="cep">CEP</label>
                                              <InputMask className={checkInput('zipCode') ? 'error' : ''} mask="99999-999" onChange={form.handleChange} value={form.values.zipCode} name="zipCode" id="cep" type="text" />
                                          </InputGroup>
                                          <InputGroup>
                                              <label htmlFor="number">Número</label>
                                              <InputMask className={checkInput('deliveryNumber') ? 'error' : ''}  mask="999" onChange={form.handleChange} value={form.values.deliveryNumber} name="deliveryNumber" id="number" type="text" />
                                          </InputGroup>
                                       </Row>
                                       <InputGroup>
                                          <label htmlFor="complement">Complemento (opcional)</label>
                                          <input onChange={form.handleChange} value={form.values.complement} name="complement" id="complement" type="text" />
                                       </InputGroup>
                                       <Button className="top" onClick={() => {setForms(true)}} type="button" variant="primary">Continuar com o pagamento</Button>
                                       <Button type="button" onClick={() => {setTeste(false)}} variant="primary">Voltar ao carrinho</Button>
                                    </>
                                )}
                            </form>
                      ) : (
                            <>
                              <ul>
                                  {items.map((item) => (
                                      <CartItem key={item.id}>
                                          <img src={item.foto} alt={item.nome} />
                                          <div>
                                              <h3>{item.nome}</h3>
                                              <span className="preco">{formataPreco(item.preco)}</span>
                                          </div>
                                          <img onClick={() => {removeItem(item.id)}} className="icon" src={lixeira} />
                                      </CartItem>
                                    ))}
                               </ul>
                               <div className="prices">
                                  <span>Valor total</span>
                                  <span>{formataPreco(getFullPrice())}</span>
                               </div>
                               <Button onClick={() => {setTeste(true)}} variant="primary" type="button">Continuar com a entrega</Button>
                            </>
                        )}
                    </>
                )}
            </Aside>
        </CartContent>
    )
}

export default Cart
