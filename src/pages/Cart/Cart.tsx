import React from 'react'
import { Column } from '../../component-library/TabGroup/styled';
import { CartButton } from '../../components/PDP/styled';
import { usePokemonContext, useShoppingCartContext } from '../../hooks'

export const Cart = () => {
  const { cartItems } = useShoppingCartContext();
  const { pokemon, isLoading } = usePokemonContext();
  console.log(cartItems);
  console.log(pokemon[490])
// CArt items don't save,need to add localStorage to cache the cart
  if (isLoading === true) {
    return (
      <>Loading...</>
    )
  }

  return (
    <div style={{ marginLeft: '10rem', marginRight: '10rem', display: 'flex'}}>
      <div style={{width: '75%'}}>
      <h3>Items</h3>
      {cartItems.map((item: any) => {
      return (
        <div style={{ display: 'flex', padding: '5px'}}>
          <div style={{backgroundColor: 'grey', width: '100%', padding: '12px', borderRadius: '5px', marginRight: '8px'}}>
            <Column>
            <div>{pokemon[item.id - 1].name}</div> 
            <div>${item.price}</div>
            </Column>
          </div>
        </div>
      )
    })}
      </div>
      <div style={{borderLeft: 'thin solid', padding: '12px', width: '25%', minHeight: '90vh'}}>
      <h3>Cart Summary</h3>
      <div>
        Tax: $100 <br/>
        Shipping: $25 <br/>
        Total: $1000
      </div>
      <CartButton onClick={() => alert('Congrats! You\'ve finished the e-commerce presentation. Whether it\'s pokemon, clothes, or something entirely else, the functionality works the same similar. Thank you for checking this out!')}>Purchase</CartButton>
      </div>
    
    </div>
  )
}
