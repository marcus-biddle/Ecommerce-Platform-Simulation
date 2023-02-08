import React from 'react'
import './style.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h5>SHOP</h5>
            <h6>Electronics</h6>
            <h6>Jewelery</h6>
            <h6>Men's Clothing</h6>
            <h6>Women's Clothing</h6>
        </div>
        <div>
            <h5>DEVELOPER INFO</h5>
            <h6>Resume</h6>
            <h6>Contact</h6>
        </div>
        <div>
            <h5>HELP</h5>
            <h6>Customer Service</h6>
            <h6>My Account</h6>
            <h6>Find a Store</h6>
            <h6>Cookie Notice</h6>
        </div>
        <section>
            <h5>Become a member</h5>
            <p>Join now and get 10% off your next purchase!</p>
            <p>READ MORE -{'>'}</p>
        </section>
    </div>
  )
}