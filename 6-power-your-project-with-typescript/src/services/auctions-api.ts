import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Auction } from '../auction/Auction'

export const auctionsApi = createApi({
	reducerPath: 'auctionsApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_API }),
	endpoints: (builder) => ({
		getAllAuctions: builder.query<Auction[], void>({
			query: () => `/auctions`,
		}),
	}),
})

export const { useGetAllAuctionsQuery } = auctionsApi
