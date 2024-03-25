import { useSelector, useDispatch } from "react-redux";
import './index.css';
import { decreaseQuantity, removeFromCart, increaseQuantity } from "../../redux/actions";

export default function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);

    console.log(cartItems)

    const handleDecrease = (item) => {
        if (item.qty === 1) {
            dispatch(removeFromCart(item.id));
        }
        else {
            dispatch(decreaseQuantity(item.id));
        }
    }

    const handleIncrease = (item) => {
        dispatch(increaseQuantity(item.id));
    };

    const calculateTotalValue = () => {
        return cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    };


    return (
        <>
            <div className="cart">

                {cartItems?.map((item) => (
                    <div key={item.id} className="cartItem">
                        <img src={item.image} alt={item.title} />
                        <div className="titleNdescription">
                        <h5>{item.title}</h5>
                        <p id="description">{item.description}</p>
                        </div>
                        <div className="buttons">
                            <div>
                            <button onClick={() => handleDecrease(item)}>-</button>{item.qty}<button onClick={() => handleIncrease(item)}>+</button>
                            </div>
                        <div>
                        <h5>Price: ${item.qty*item.price}</h5>
                        </div> 
                        </div> 
                    </div>
                ))}
                <h3>Cart Value: ${calculateTotalValue()}</h3>
            </div>
        </>
    );
};
