import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { /* ItemRestaurant, */ ItemRestaurant, Products } from '../../pages/Home'
/* import { ProductRestaurant } from '../../pages/Cardapios' */

type CartState = {
    items: ItemRestaurant[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ItemRestaurant>) => {
            const game = state.items.find((item) => item.id === action.payload.id)
            if (!game) {
                state.items.push(action.payload)
            } else {
                alert('O item já se encontra no carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer