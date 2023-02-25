import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, Popup, StyledNavUL, UserWrapper } from './styled';
import { useShoppingCartContext } from '../../hooks';
import { cartHasItems } from '../../helpers/cart';
import { REGIONS } from '../../constants/regions';
import { useWindowDemension } from '../../hooks/mobile';
import { showByWindowSize } from '../../helpers/media';

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
        <>
        {showByWindowSize(useWindowDemension())((<div>true</div>))((<div>false</div>))}
        </>

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