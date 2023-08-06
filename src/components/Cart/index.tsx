import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/Cart'
import { formataPreco } from "../../pages/Cardapios"
import { Aside, CartContent, Overlay, CartItem } from "./styles"
import Button from "../Button"
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const getFullPrice = () => {
        return items.reduce((acumulador, valorInicial) => {
            return acumulador += valorInicial.preco
        }, 0)
    }

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContent className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <Aside>
            <ul>
                {items.map((item) => (
                <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formataPreco(item.preco)}</span>
                    </div>
                    <img onClick={() => {removeItem(item.id)}} className="icon" src={lixeira} />
                </CartItem>
                ))}
            </ul>
            <div className="prices">
                <p>Valor total</p>
                <p>{formataPreco(getFullPrice())}</p>
            </div>
            <Button variant="primary" type="button">Continuar com a entrega</Button>
          </Aside>
        </CartContent>
    )
}

export default Cart
