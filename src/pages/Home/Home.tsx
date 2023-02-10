import React from 'react'
import './style.css'
import pic from '../../constants/images/traveler.jpg'
import { Trending } from '../../sub-components/Trending/Trending'

export const Home = () => {

    const handleClick = () => {
        alert('You pressed a button! The developer has not made a landing page for this button yet. Whoops...')
    }
  return (
    <>
        {/* Banner */}
        <img className='banner-image' src={pic} alt={''} />
        
        {/* Info */}
        <section className='banner-info'>
            <h2>Get ready for WINTER</h2>

            <div className='subheader'>
            <p>Affordable design for any occasion.</p>
            <button className='btn' onClick={(e) => handleClick()}>Shop Now</button>
            </div>
        </section>

        {/* Top Items */}
        <section>
            <h2 style={{ paddingLeft: '18px'}}>Trending Items</h2>
            <Trending />

            {/* Carousal */}
        </section>

        {/* smaller banner */}
        <button className='small-banner' onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2 >Free Standard Shipping Over $30 for Members</h2>
            <span>Not a member? Join Today!</span>
        </button>
    </>
  )
}