import * as React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setActiveCart} from "../store/actionsCreator";
import moment from "moment-timezone"

export const CartItem = ({cart}) => {

    const user = useSelector(state => state.users.find(user => user.id === cart.userId))
    const dispatch = useDispatch()
    function formatDate(date) {
        return moment(date).format("DD.MM.YYYY")
    }
    // const dateString = (string) => {
    //     const d = new Date(string)
    //     return ("0" + d.getDate()).slice(-2)
    //         + '.' + ("0" + (d.getMonth() + 1)).slice(-2)
    //         + '.' + d.getFullYear()
    // }

    const selectActive = () => {
        dispatch(setActiveCart(cart))
    }

    return !user ? (<div>another Wait</div>) : (
        <div onClick={selectActive}>
            {/*<p>{user.name.firstname} {user.name.lastname} / Ordered on: {dateString(cart.date)}</p>*/}
            <p>{user.name.firstname} {user.name.lastname} / Ordered on: {formatDate(cart.date)}</p>
        </div>
    );
};