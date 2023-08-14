import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products } from '../pages/Home'

type itemProduct = {
    id: number
    price: number
}

type Purchase = {
    products: itemProduct[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            deliveryNumber: string
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: string
            expires: {
                month: string
                year: string
            }
        }
    }
}

type Response = {
    orderId: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Products[], void>({
            query: () => 'restaurantes'
        }),
        getMenu: builder.query<Products, string>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<Response, Purchase>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantsQuery,
    useGetMenuQuery,
    usePurchaseMutation
} = api
export default api
