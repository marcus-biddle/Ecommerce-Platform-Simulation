import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, Popup, StyledNavUL, UserWrapper } from './styled';
import { useShoppingCartContext } from '../../../hooks';
import { cartHasItems } from '../../../helpers/cart';
import { REGIONS } from '../../../constants/regions';

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
        <RiShoppingCartLine style={{transform: 'scale(1.4)'}} />
        <CartNotification />
      </Link>
    </>
  )
}

export const DesktopNavbar = () => {
  return (
    <NavbarStyle>
        <NavbarHeaderWrapper>
          <Link to='/'>Poke Store</Link>
        </NavbarHeaderWrapper>

        <NavbarCategoryWrapper>
          <NavbarLinks />
        </NavbarCategoryWrapper>

        <UserWrapper>
            <NavCart />
        </UserWrapper>
    </NavbarStyle>
  )
}