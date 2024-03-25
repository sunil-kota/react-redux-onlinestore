import { DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART, SET_PRODUCTS } from "./constants";
import { ADD_TO_CART } from "./constants";

export const setProducts=(products)=>{
    return{
        type:SET_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
  });


export const removeFromCart=(productId)=>({
 type: REMOVE_FROM_CART,
 payload:productId
});

export const increaseQuantity=(productId)=>({
 type: INCREASE_QUANTITY,
 payload:productId
});

export const decreaseQuantity=(productId)=>({
 type: DECREASE_QUANTITY,
 payload:productId
});