import React from 'react';
import { CartList } from '../../components/Cart/CartList';
import { CartSidebar } from '../../components/Cart/CartSidebar';
import { cartHasItems } from '../../helpers/cart';
import { useShoppingCartContext } from '../../hooks';
import { CartColumn, CartWrapper } from './styled';

export const Cart = () => {
  const { cartItems } = useShoppingCartContext();
  return (
    <CartWrapper>
      {cartHasItems(cartItems) ?
        <CartColumn>
          <CartList />
          <CartSidebar />
        </CartColumn>
      :
      <div style={{width: '100%', textAlign: 'center', marginTop: '5rem'}}>
        There are no items in your cart.
      </div>
      }
      
    </CartWrapper>
  )
}
