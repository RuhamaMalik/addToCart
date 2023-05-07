import { combineReducers } from "redux";
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import  {cartReducer}  from "./reducers/cartReducer.jsx";

const rootReducer = combineReducers({
  cartReducer : cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
 cartReducer:{
  cartItems : cartItems
 },
}


const composeEnhansers = composeWithDevTools({})
const store = createStore(rootReducer, initialState, composeEnhansers(applyMiddleware(thunk)))

export default store;