import React, {useEffect} from "react";
import {getAllCarts, getAllProducts, getAllUsers} from "../store/actionsCreator";
import {useDispatch, useSelector} from "react-redux";
import {CartItem} from "./cartItem";


const CartList = () => {

    const carts = useSelector(state => state.carts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCarts())
        dispatch(getAllProducts())
        dispatch(getAllUsers())
    }, [])




    return !carts.length ? (<div>Wait</div>) : (
        <div>
            {carts.map(cart => <CartItem key={cart.id} cart={cart}/>)}
        </div>
    )
}

export default CartList;