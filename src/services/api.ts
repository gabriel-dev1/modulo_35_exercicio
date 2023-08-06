import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { /* ItemRestaurant */ Products } from '../pages/Home'
/* import { ProductRestaurant } from '../pages/Cardapios' */

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Products[], void>({
            query: () => 'restaurantes'
        }),
        getMenu: builder.query<Products, string>({  // Products
            query: (id) => `restaurantes/${id}`
        })
        /* getAside: builder.query<ItemRestaurant, void>({
            query: () => 'restaurantes'
        }), */
    })
})

export const {
    useGetRestaurantsQuery,
    useGetMenuQuery
} = api
export default api
