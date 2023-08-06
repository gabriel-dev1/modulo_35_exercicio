import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products } from '../pages/Home'

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
        })
    })
})

export const {
    useGetRestaurantsQuery,
    useGetMenuQuery
} = api
export default api
