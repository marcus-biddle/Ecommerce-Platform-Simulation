import React from 'react'
import { getSubtotal, getTotal } from '../../helpers/cart';
import { numToUSD } from '../../helpers/currency'
import { useShoppingCartContext } from '../../hooks';
import { CartButton } from '../PDP/styled'

export const CartSidebar = () => {
    const { cartItems } = useShoppingCartContext();
    const subtotal = getSubtotal(cartItems);
    const total = [subtotal, 100, 25];

    return (
        <div style={{borderLeft: 'thin solid', padding: '12px', width: '25%', minHeight: '90vh'}}>
        <h3>Cart Summary</h3>
        <div>
            Subtotal: {numToUSD(subtotal)} <br/>
            Tax: {numToUSD(subtotal * .0805)} <br/>
            Shipping: $25 <br/>
            Total: {numToUSD(getTotal(total))}
        </div>
        <CartButton onClick={() => alert('Congrats! You\'ve finished the e-commerce presentation. Whether it\'s a store to buy pokemon, clothes, or something entirely else, the functionality works the same regardless. Thank you for checking this out!')}>Purchase</CartButton>
        </div>
    )
}