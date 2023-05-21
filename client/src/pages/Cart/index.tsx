import React, { useEffect, useState } from 'react';
import { CartList } from '../../components/Cart/CartList';
import { CartSidebar } from '../../components/Cart/CartSidebar';
import { cartHasItems, getSubtotal } from '../../helpers/cart';
import { usePokemonContext, useShoppingCartContext } from '../../hooks';
import { CartColumn, CartItem, CartSectionText, CartSummary, CartWrapper, DeleteText, DiscountSection, HeaderText, LeftArrow, LevelText, PaymentButtonText, RightArrow, SideMenuSection } from './styled';
import { capitlizeText, getPokemonImages } from '../../helpers/pokemon';
import { getPriceNum, numToUSD } from '../../helpers/currency';
import { showIfOrElseWindow } from '../../helpers/media';
import { useWindowDemension } from '../../hooks/mobile';
import { Link } from 'react-router-dom';


const Item = ({ item }: any) => {
  const { pokemon, isLoading } = usePokemonContext();
  // rename function to updateCart. Fix pricing
  const { increaseCartQuantity, removeFromCart } = useShoppingCartContext();
  const [newQuantity, updateQuantity] = useState(item.quantity);
  const [newPrice, updatePrice] = useState(item.original_price * item.quantity);
  const { cartItems } = useShoppingCartContext();
  const window = useWindowDemension();
  
  useEffect(() => {
    if (item.quantity !== newQuantity) {
      increaseCartQuantity(item.id, newPrice, item.original_price, item.name, newQuantity, item.level, false);
      updatePrice(item.original_price * newQuantity);
    }
  }, [newQuantity])

  const handleQuantityChange = (direction: 'decrease' | 'increase') => {
    if (direction === 'decrease') {
      if (item.quantity === 1 || newQuantity === 1) {
        //
      } else {
        updateQuantity(newQuantity - 1);
      };
    } 
    
    if (direction === 'increase') {
      updateQuantity(newQuantity + 1);
    }
  };


  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }
  const icon = getPokemonImages(pokemon[item.id - 1])
  return (
    <CartItem>
      {/* Image */}
      <div style={{ height: '90px', width: '90px', backgroundColor: 'rgb(105, 103, 103, .25)', borderRadius: '12px', transform: 'scaleX(-1)'}}>
        <img src={icon.front} alt={item.name} style={{ height: '90px', width: '90px'}}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '6px'}}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          {/* Name and level */}
          <div>
            <HeaderText>{capitlizeText(item.name)}</HeaderText>
            <LevelText>LEVEL: {item.level}</LevelText>
          </div>
          {/* Amount */}
          <div style={{ display: 'flex', width: '60px', justifyContent: 'space-evenly'}}>
            <div onClick={() => handleQuantityChange('decrease')}>
              <LeftArrow />
            </div>
            <div style={{ fontSize: '18px'}}>{newQuantity}</div>
            <div onClick={() => handleQuantityChange('increase')}>
              <RightArrow />
            </div>
          </div>
        </div>
        {/* Price */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <HeaderText>{numToUSD(newPrice)}</HeaderText>
          {/* Remove */}
          <div onClick={() => removeFromCart(item.id, item.level)}
            style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer'}}>
              <DeleteText>{showIfOrElseWindow(window)('Remove')('X')}</DeleteText>
          </div>
        </div>
      </div>
    </CartItem>
  )
}

export const Cart = () => {
  const { cartItems } = useShoppingCartContext();
  const subtotal = getSubtotal(cartItems);
  const tax = subtotal * .0725;

  return (
    <CartWrapper>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div>
          <CartSectionText>Your Order</CartSectionText>
        </div>
        {cartItems.map((item, index) => {
          
          return (
            <Item item={item} key={index} />
          )
        })}
      </div>
      <SideMenuSection>
        <div>
          <CartSummary>
            <CartSectionText>Summary</CartSectionText>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <span>Subtotal</span>
              <span>{numToUSD(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <span>Discount</span>
              <span style={{ opacity: '.65'}}>-$0</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <span>Tax</span>
              <span>{numToUSD(tax)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <span>Shipping (flat rate)</span>
              <span>$25</span>
            </div>
          </CartSummary>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Abel', fontWeight: 'bold', fontSize: '18px', paddingTop: '12px', paddingBottom: '2rem'}}>
            <span>Grand Total</span>
            <span >{numToUSD(subtotal + tax + 25)}</span>
          </div>
          <div style={{ height: '50px'}}>
            <Link to='/payment'>
              <div style={{ backgroundColor: 'black', position: 'relative', color: 'white', height: '100%', borderRadius: '8px', textAlign: 'center'}}>
                <PaymentButtonText>
                  Continue to payment
                </PaymentButtonText>
              </div>
            </Link>
          </div>
        </div>
        <DiscountSection>
          <p style={{ letterSpacing: '1px'}}>Discount Code</p>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            {/* fix padding issue */}
            <input style={{ border: '1px solid grey', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', paddingLeft: '4px'}}/>
            <div style={{ border: '1px solid grey', padding: '8px', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}>Apply</div>
          </div>
          <div style={{ fontFamily: 'Abel, sans-serif', fontSize: '12px', textAlign: 'center', paddingTop: '12px'}}>New Customer? <span style={{ textDecorationLine: 'underline'}}>Sign up</span> to get better offers</div>
        </DiscountSection>
        
      </SideMenuSection>
    </CartWrapper>
  )
}
