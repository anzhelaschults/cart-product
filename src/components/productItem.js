import * as React from 'react';
import {useSelector} from "react-redux";


export const ProductItem = ({item}) => {

    const product = useSelector(state => state.products.find(product => product.id === item.productId))

    return !product
        ? (<div>No Product</div>)
        :(
        <div>
            {product.title} <br/> {product.price} * {item.quantity} = {product.price * item.quantity}
        </div>
    );
};