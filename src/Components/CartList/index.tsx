import React from 'react'
import { useShoppingCartContext } from '../../hooks';
import { CartItem } from '../CartItem';

export const CartList = () => {
    const { cartItems } = useShoppingCartContext();
    console.log(cartItems);

    return (
        <div style={{width: '75%'}}>
        <h3>Items</h3>
        {cartItems.map((item: any) => {
        return (
            <div key={`${item.id}`} style={{ display: 'flex', padding: '5px'}}>
                <CartItem key={item.name} item={item} />
            </div>
        )
        })}
        </div>
    )
}