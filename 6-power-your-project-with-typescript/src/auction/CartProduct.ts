import { Auction } from './Auction'

export interface CartProduct {
    id: Auction['id'],
    amount: number,
    auction: Auction
}
