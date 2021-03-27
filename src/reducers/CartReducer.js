const initialState = {
    data: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                data: [...state.data,action.payload]
            }
        case "REMOVE_FROM_CART":
            const index = state.data.findIndex(
                (item) => item.id === action.payload
            );
            let newCart = [...state.data];
            if(index >= 0){
                newCart.splice(index,1);
                
            }else{
                console.warn(
                    `cant remove product (id: ${action.payload})`
                )
            }
            return {
                ...state,
                data: newCart
            }
        case "CLEAR_CART":
            return{
                ...state,
                data: []
            }
        default:
            return state
    }
}

export default CartReducer