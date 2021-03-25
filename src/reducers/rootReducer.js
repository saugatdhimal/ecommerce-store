import { combineReducers } from 'redux'
import addToCartReducer from './addToCartReducer'

const rootReducer = combineReducers({
    cartItem: addToCartReducer
})

export default rootReducer