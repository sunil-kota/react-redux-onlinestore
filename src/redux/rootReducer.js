import { combineReducers } from 'redux';
import productsReducer from './productsReducers';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;