import React from 'react'
import { checkFreeShipping, getSubtotal, getTotal } from '../../helpers/cart';
import { numToUSD } from '../../helpers/currency'
import { useShoppingCartContext } from '../../hooks';
import { CartColumn } from '../../pages/Cart/styled';
import { CartButton } from '../PDP/styled'

const SummaryItem = ({ title, total }: any) => {
    return (
        <CartColumn>
            <p>{title}</p>
            <p>{total}</p>
        </CartColumn>
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
        <div style={{ fontWeight: 'lighter', paddingTop: '1rem'}}>
            <SummaryItem title='Subtotal' total={numToUSD(subtotal)} />
            <SummaryItem title='Tax' total={numToUSD(tax)} />
            <SummaryItem title='Shipping' total={checkFreeShipping(subtotal)? numToUSD(0) : numToUSD(shipping)} />
            <SummaryItem title='Total' total={numToUSD(getTotal(total))} />
        </div>
        {checkFreeShipping(subtotal) ? 
            <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'lighter', marginTop: '16px'}}>Congrats, you got free shipping!</div>
        :
            ''}
        <CartButton onClick={() => alert('Congrats! You\'ve finished the e-commerce presentation. Whether it\'s a store to buy pokemon, clothes, or something entirely else, the functionality works the same regardless. Thank you for checking this out!')}>Purchase</CartButton>
        </div>
    )
}