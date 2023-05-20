import React, { useEffect, useState } from 'react';
import { CartList } from '../../components/Cart/CartList';
import { CartSidebar } from '../../components/Cart/CartSidebar';
import { cartHasItems } from '../../helpers/cart';
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import { CartColumn, CartWrapper } from './styled';
import { getPokemonImages } from '../../helpers/pokemon';

const Item = ({ item }: any) => {
  const { pokemon, isLoading } = usePokemonContext();
  // rename function to updateCart. Fix pricing
  const { increaseCartQuantity } = useShoppingCartContext();
  const [newQuantity, updateQuantity] = useState(item.quantity);
  const { cartItems } = useShoppingCartContext();
  const [cart, setCart] = useState(cartItems);
  
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems])

  const handleQuantityChange = (direction: string) => {
    if (direction === 'decrease') {
      if (item.quantity === 1 || newQuantity === 1) {
        //
      } else {
        updateQuantity(newQuantity - 1);
      }
    } else if (direction === 'increase') {
      updateQuantity(item.quantity + 1);
      console.log('clicked', direction);
    }
// need to move all of this higher up on the component tree.
    console.log(item.quantity, newQuantity);
    increaseCartQuantity(item.id, item.price, item.name, newQuantity, item.level);
    console.log(direction, cart)
    console.log(newQuantity)
  };


  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }
  const icon = getPokemonImages(pokemon[item.id - 1])
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <div style={{ height: '90px', width: '90px', backgroundColor: 'rgb(105, 103, 103, .25)', borderRadius: '12px', transform: 'scaleX(-1)'}}>
              <img src={icon.front} alt={item.name} style={{ height: '90px', width: '90px'}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '6px'}}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                  <div>{item.name}</div>
                  <div style={{ color: 'grey'}}><span style={{ letterSpacing: '1.25px'}}>LEVEL:</span> {item.level}</div>
                </div>
                <div style={{ display: 'flex', width: '60px',justifyContent: 'space-evenly'}}>
                  <div 
                    onClick={() => handleQuantityChange('decrease')}
                    style={{ backgroundColor: 'rgb(105, 103, 103, .1)', width: '16px', height: '20px', borderRadius: '6px', textAlign: 'center', border: '1px solid', fontSize: '24px', fontWeight: 'lighter', position: 'relative', margin: 'auto'}}>
                      <div style={{ textAlign: 'center', position: 'absolute', bottom: '14px', left: '4px',height: '10px'}}>-</div>
                  </div>
                  <div>{newQuantity}</div>
                  <div 
                    onClick={() => handleQuantityChange('increase')}
                    style={{ backgroundColor: 'rgb(105, 103, 103, .1)', width: '16px', height: '20px', borderRadius: '6px', textAlign: 'center', border: '1px solid', fontSize: '24px', fontWeight: 'lighter', position: 'relative', margin: 'auto'}}>
                      <div style={{ textAlign: 'center', position: 'absolute', bottom: '14px', left: '3px',height: '10px'}}>+</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>{item.price}</div>
                <div style={{ display: 'flex', justifyContent: 'end'}}>
                  <div style={{ textAlign: 'end', color: 'grey', width: '20px'}}>X</div>
                </div>
              </div>
            </div>
          </div>
  )
}

export const Cart = () => {
  const { cartItems } = useShoppingCartContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2rem', marginRight: '2rem', gap: '15px'}}>
      {cartItems.map((item) => {
        
        return (
          <Item item={item} />
        )
      })}
    </div>
    // <CartWrapper>
    //   {cartHasItems(cartItems) ?
    //     <CartColumn>
    //       <CartList />
    //       <CartSidebar />
    //     </CartColumn>
    //   :
    //   <div style={{width: '100%', textAlign: 'center', marginTop: '5rem'}}>
    //     There are no items in your cart.
    //   </div>
    //   }
      
    // </CartWrapper>
  )
}
