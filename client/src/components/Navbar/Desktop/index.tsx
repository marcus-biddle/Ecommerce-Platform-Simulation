import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cart, CouponStyle, NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, Popup, StyledNavUL } from './styled';
import { useShoppingCartContext } from '../../../hooks';
import { cartHasItems } from '../../../helpers/cart';
import { REGIONS, RegionType } from '../../../constants/regions';
import { showOnLoad } from '../../../helpers/conditionals';
import styled from 'styled-components';

const Categories = () => {
  return (
    <NavbarCategoryWrapper>
      {REGIONS.map((region: RegionType, index: any) => {
        return (
          <StyledNavUL key={region.id}>
            <Link to={`${region.path}`}>{region.label}</Link>
          </StyledNavUL>
        )
      })}
    </NavbarCategoryWrapper>
  )
}

const CartNotification = () => {
  const { cartItems } = useShoppingCartContext();
  
  return (
    <>
    {cartHasItems(cartItems) ? 
      <Popup>{cartItems.length}</Popup>
    :
      ''
    }
    </>

  )
}

export const NavCart = () => {
  return (
    <div>
      <Link to='/cart'>
        <Cart />
        <CartNotification />
      </Link>
    </div>
  )
}

const NavbarCouponMessage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
    {showOnLoad(show)(
      <CouponStyle>
        {/* need to underline sign up and create link */}
      <div>Sign up and <strong>GET 20% OFF</strong> for your first order. Sign up now</div> 
      <div style={{ position: 'absolute', float: 'right', top: '3.3px', right: '12rem', cursor: 'pointer'}} onClick={() => setShow(false)}>X</div>
      </CouponStyle>
    )('')}
    </>
    
  )
}

const Logo = () => {
  return (
    <NavbarHeaderWrapper>
          <Link to='/' style={{ fontFamily: 'Abel, sans-serif', fontSize: '14px', fontWeight: 'bold'}}>Poke Center</Link>
    </NavbarHeaderWrapper>
  )
}

export const DesktopNavbar = () => {
  
  return (
    <>
      <NavbarCouponMessage />
      <NavbarStyle>
        <Logo />
        <Categories />
        <NavCart />
      </NavbarStyle>
    </> 
  )
}