import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavbarCategoryWrapper, NavbarHeaderWrapper, NavbarStyle, StyledNavUL, UserWrapper } from './styled';
import { NavHeader } from '../Footer/styled';
import { Row } from '../../component-library/Column';

const NAV_CATEGORIES = [
  {
    title: 'Men\'s Clothing',
    to: '/mensclothing'
  },
  {
    title: 'Women\'s Clothing',
    to: '/womensclothing'
  },
  {
    title: 'Jewelery',
    to: '/jewelery'
  },
  {
    title: 'Electronics',
    to: '/electronics'
  },
]

const NavbarLinks = ({ categories }: any) => {
  return (
    <>
      {categories.map((category: any, index: any) => {
        return (
          <StyledNavUL key={index}>
            <Link to={category.to}>{category.title}</Link>
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
          <Link to='/'>Faux Store</Link>
        </NavbarHeaderWrapper>

        <NavbarCategoryWrapper>
          <NavbarLinks categories={NAV_CATEGORIES} />
        </NavbarCategoryWrapper>

        <UserWrapper>
            <Link to='/cart'>
              <RiShoppingCartLine style={{transform: 'scale(1.25)'}} />
            </Link>
        </UserWrapper>
    </NavbarStyle>
      
        
  )
}