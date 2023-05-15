import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { CouponStyle, NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, Popup, StyledNavUL, UserWrapper } from './styled';
import { useShoppingCartContext } from '../../../hooks';
import { cartHasItems } from '../../../helpers/cart';
import { REGIONS } from '../../../constants/regions';
import { showOnLoad } from '../../../helpers/conditionals';

const NavbarLinks = () => {
  return (
    <>
      {REGIONS.map((region: any, index: any) => {
        return (
          <StyledNavUL key={index}>
            <Link to={`/${region.path}/pokemon`}>{region.label}</Link>
          </StyledNavUL>
        )
      })}
    </>
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
    <>
      <Link to='/cart'>
        <RiShoppingCartLine style={{ height: '40px', width: '40px', cursor: 'pointer'}} />
        <CartNotification />
      </Link>
    </>
  )
}

export const CouponMessage = () => {
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

export const DesktopNavbar = () => {
  
  return (
    <div>
      <CouponMessage />
      <NavbarStyle>
        <NavbarHeaderWrapper>
          {/* <img style={{ height: '60px'}} src={poke_logo} /> */}
          <Link to='/' style={{ fontFamily: 'Abel, sans-serif', fontSize: '14px', fontWeight: 'bold'}}>Poke Center</Link>
        </NavbarHeaderWrapper>

        <NavbarCategoryWrapper>
          <NavbarLinks />
        </NavbarCategoryWrapper>

        <UserWrapper>
            <NavCart />
        </UserWrapper>
    </NavbarStyle>
    </div>
    
  )
}