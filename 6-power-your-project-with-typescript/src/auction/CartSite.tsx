import { useSelector } from 'react-redux';
import { selectCartItems } from './cartSlice';
import CartItem from './CartItem'


function CartSite(){
   const cartItems = useSelector(selectCartItems)

   return (
        <div>
            <h1>Twoje produkty w koszyku</h1>
            <div>
                <ul className="list-group">
                    {
                        cartItems.map((i: any) => <CartItem key={i.id} {...i.auction} amount={i.amount} />)
                    }
                </ul>
            </div>
        </div>
    )
}


export default CartSite
