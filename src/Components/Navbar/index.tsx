import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, StyledNavUL, UserWrapper } from './styled';
import { NavHeader } from '../Footer/styled';
import { Row } from '../../component-library/Column';
import { REGIONS, ROUTES } from '../../constants';

const NavbarLinks = () => {
  return (
    <>
      {REGIONS.map((region: any, index: any) => {
        return (
          <StyledNavUL key={index}>
            <Link to={ROUTES[index].location}>{region.label}</Link>
          </StyledNavUL>
        )
      })}
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
              <RiShoppingCartLine style={{transform: 'scale(1.25)'}} />
            </Link>
        </UserWrapper>
    </NavbarStyle>
      
        
  )
}