import * as React from 'react';
import {useSelector} from "react-redux";
import {ProductItem} from "./productItem";


export const ActiveCart = () => {
    const activeCart = useSelector(state => state.activeCart)
    const products = useSelector(state => state.products)

    const cartSumm = () => {

        return activeCart.products.reduce((summ, item) => {
            const activeProduct = products.find(product => product.id === item.productId)
            const price = activeProduct.price
            return summ += item.quantity * price
        }, 0)
    }

    return !activeCart
        ? (<div>No Cart selected</div>)
        : (<div>
                {activeCart.products.map(product => <ProductItem key={product.productId} item={product}/>)}
                <p>ИТОГО: {cartSumm()}</p>
            </div>
        );
};