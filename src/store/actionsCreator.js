import {
    FETCH_USERS,
    FETCH_CARTS,
    FETCH_PRODUCTS,
    CHANGE_ACTIVE_CART
} from "./actions";

const addAllUsers = (data) => {
    return {type: FETCH_USERS, payload: data}
}

const addAllCarts = (data) => {
    return {type: FETCH_CARTS, payload: data}
}

const addAllProducts = (data) => {
    return {type: FETCH_PRODUCTS, payload: data}
}

export const setActiveCart = (cart) => {
    return {type: CHANGE_ACTIVE_CART, payload: cart}
}

export const getAllUsers = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/users')
            const data = await response.json()
            dispatch (addAllUsers(data))
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const getAllCarts = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/carts?limit=6')
            const data = await response.json()
            dispatch (addAllCarts(data))
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const getAllProducts = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch (addAllProducts(data))
        } catch (e) {
            console.log( e.message )
        }
    }
}