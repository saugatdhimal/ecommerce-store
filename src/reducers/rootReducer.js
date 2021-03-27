import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    cartItem: CartReducer,
    userName: UserReducer
})

export default rootReducer