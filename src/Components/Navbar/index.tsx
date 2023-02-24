import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, Popup, StyledNavUL, UserWrapper } from './styled';
import { REGIONS } from '../../constants';
import { useShoppingCartContext } from '../../hooks';
import { cartHasItems } from '../../helpers/cart';

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

export const Navbar = () => {
  
  return (
    <NavbarStyle>
        <NavbarHeaderWrapper>
          <Link to='/'>POKE LORE</Link>
        </NavbarHeaderWrapper>

        <NavbarCategoryWrapper>
          <NavbarLinks />
        </NavbarCategoryWrapper>

        <UserWrapper>
            <Link to='/cart'>
              <RiShoppingCartLine style={{transform: 'scale(1.75)'}} />
              <CartNotification />
            </Link>
        </UserWrapper>
    </NavbarStyle>
      
        
  )
}