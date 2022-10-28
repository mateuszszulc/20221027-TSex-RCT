import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Auction } from './Auction'
import { CartProduct } from './CartProduct'

interface CartState {
	items: CartProduct[]
}

const initialState: CartState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: Draft<CartState>, action: PayloadAction<Auction>) => {
			const auction = action.payload
			const item = state.items.find(item => item.id === auction.id)
			if(item) {
				item.amount += 1
			} else {
				state.items.push({id: auction.id, amount: 1, auction})
			}
		}
	},
})

export const { addToCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsAmount = (state: RootState) => state.cart.items.map(i => i.amount).reduce((a, b) => a + b, 0);

export default cartSlice.reducer
