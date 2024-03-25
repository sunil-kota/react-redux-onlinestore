import { ADD_TO_CART } from "./constants";
import { INCREASE_QUANTITY } from "./constants";
import { DECREASE_QUANTITY } from "./constants";
import { REMOVE_FROM_CART } from "./constants";

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case ADD_TO_CART:
            let cartItem = state.cartItems.find(item => item.id === action.payload.id);
            if (cartItem) {
                // If the item is already in the cart, update the quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    ),
                };
            } else {
                // If the item is not in the cart, add it with qty: 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
                };
            }
            case REMOVE_FROM_CART:
                return {
                  ...state,
                  cartItems: state.cartItems.filter((item) => item.id !== action.payload),
                };
          
              case INCREASE_QUANTITY:
                return {
                  ...state,
                  cartItems: state.cartItems.map((item) =>
                    item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
                  ),
                };
          
              case DECREASE_QUANTITY:
                return {
                  ...state,
                  cartItems: state.cartItems.map((item) =>
                    item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
                  ),
                };

        default:
            return state;
    }
};

export default cartReducer;
