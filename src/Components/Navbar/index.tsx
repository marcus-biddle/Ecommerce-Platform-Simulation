import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, StyledNavUL, UserWrapper } from './styled';
import { REGIONS } from '../../constants';

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
            </Link>
        </UserWrapper>
    </NavbarStyle>
      
        
  )
}