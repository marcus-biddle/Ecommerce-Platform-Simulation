import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div className='nav-body'>
            <Link to='/electronics'>Electronics</Link>
            <Link to='/jewelery'>Jewelery</Link>
            <Link to='/mensclothing'>Men's Clothing</Link>
            <Link to='/womensclothing'>Woman's Clothing</Link>
        </div>
        <div>
            <Link to='/cart'>Cart</Link>
        </div>
    </div>
  )
}