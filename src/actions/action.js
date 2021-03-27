export const addToCart = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: data
    }
}

export const removeFromCart = (id) => {
    return{
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export const clearCart = () => {
    return{
        type: "CLEAR_CART"
    }
}

export const user = (data) => {
    return{
        type: "USER",
        payload: data
    }
}

export const removeUser = () => {
    return{
        type: "REMOVE_USER"
    }
}