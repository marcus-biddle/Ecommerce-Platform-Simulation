import React from 'react'
import { numToUSD } from '../../../helpers/currency';
import { useShoppingCartContext } from '../../../hooks';
import { CartItemColumn, ItemOption } from './styled';

export const CartItem = ({ item }: any) => {
    const { decreaseCartQuantity, increaseCartQuantity } = useShoppingCartContext();

    const handleDelete = () => {
      decreaseCartQuantity(item.id);
    }

    const handleAdd = () => {
      increaseCartQuantity(item.id, item.price, item.name, item.amount, 1)
    }

  return (
    <div style={{borderBottom: 'solid', width: '100%', padding: '12px', marginRight: '8px'}}>
        <CartItemColumn>
            <div>
              <p style={{ textTransform: 'capitalize'}}>{item.name} x{item.quantity}</p>
              <ItemOption onClick={handleDelete}>Delete</ItemOption>
              <ItemOption onClick={handleAdd}>Add</ItemOption>
            </div> 
            <p style={{ textAlign: 'right'}}>{numToUSD(item.price * item.quantity)}</p>
        </CartItemColumn>
    </div>
  )
}