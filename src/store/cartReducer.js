import {
    FETCH_USERS,
    FETCH_CARTS,
    FETCH_PRODUCTS,
    CHANGE_ACTIVE_CART
} from "./actions";

const initialState = {
    users: [],
    carts: [],
    products: [],
    activeCart: null
}

export const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_USERS:
            return {...state, users: payload}

        case FETCH_CARTS:
            return {...state, carts: payload}

        case FETCH_PRODUCTS:
            return {...state, products: payload}

        case CHANGE_ACTIVE_CART:
            return {...state, activeCart: payload}

        default:
            return state
    }
}