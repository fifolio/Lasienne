import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.scss";
import { removeItem, resetCart } from '../../redux/cartReducer';

export default function Cart() {

    const products = useSelector(state => state.cart.products);

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2)
    }

    const dispatch = useDispatch()

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img}/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 25)}...</p>
                        <div className="price">{item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}

            <div className="total">
                <span>Subtotal</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={()=> dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}