import { useSelector } from 'react-redux';
import { selectCartItemsAmount } from './cartSlice';

function ItemsCartCounter() {

    const cartLen = useSelector(selectCartItemsAmount)

    return (
        <div>
            Masz już {cartLen} elementów w koszyku
        </div>
    )
}

export default ItemsCartCounter
