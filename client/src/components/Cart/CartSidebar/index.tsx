import React from 'react'
import { checkFreeShipping, getSubtotal, getTotal } from '../../../helpers/cart';
import { numToUSD } from '../../../helpers/currency';
import { useShoppingCartContext } from '../../../hooks';
import { CartButton } from '../../PDP/styled';
import { CartItemColumn } from '../CartItem/styled';


const SummaryItem = ({ title, total }: any) => {
    return (
        <CartItemColumn>
            <p>{title}</p>
            <p>{total}</p>
        </CartItemColumn>
    )
}

export const CartSidebar = () => {
    const { cartItems } = useShoppingCartContext();
    const subtotal = getSubtotal(cartItems);
    const tax = subtotal *.0805;
    const shipping = 25 // shipping not implemented.
    const total = [subtotal, tax, shipping];

    return (
        <div>
        <h3>Cart Summary</h3>
        <div style={{ fontWeight: 'lighter', padding: '1rem'}}>
            <SummaryItem title='Subtotal' total={numToUSD(subtotal)} />
            <SummaryItem title='Tax' total={numToUSD(tax)} />
            <SummaryItem title='Shipping' total={checkFreeShipping(subtotal)? numToUSD(0) : numToUSD(shipping)} />
            <SummaryItem title='Total' total={numToUSD(getTotal(total))} />
        </div>
        {checkFreeShipping(subtotal) ? 
            <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'lighter', marginTop: '16px'}}>Congrats, you got free shipping!</div>
        :
            ''}
        <CartButton onClick={() => alert('Congrats! You\'ve finished the e-commerce presentation. Thank you for checking this out!')}>Purchase</CartButton>
        </div>
    )
}