import React, { useEffect } from 'react';
import { CartList } from '../../components/CartList';
import { CartSidebar } from '../../components/CartSidebar';
import { setLocalStorageCart } from '../../helpers/storage';
import { useShoppingCartContext } from '../../hooks';

export const Cart = () => {
  const { cartItems } = useShoppingCartContext();

// CArt items don't save,need to add localStorage to cache the cart
  // useEffect(() => {
  //   setLocalStorageCart(cartItems);
  // }, [])

  return (
    <div style={{ marginLeft: '10rem', marginRight: '10rem', display: 'flex'}}>
      <CartList />
      <CartSidebar />
    </div>
  )
}
