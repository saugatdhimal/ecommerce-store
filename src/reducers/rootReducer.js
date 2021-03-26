import { combineReducers } from 'redux'
import CartReducer from './CartReducer'

const rootReducer = combineReducers({
    cartItem: CartReducer
})

export default rootReducer