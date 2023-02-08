import React from 'react'
import './style.css'
import pic from '../../constants/images/traveler.jpg'

export const Home = () => {

    const handleClick = () => {
        console.log('button pushed')
    }
  return (
    <>
        {/* Banner */}
        <img className='banner-image' src={pic} />
        
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
            <h2>Trending Items</h2>


            {/* Carousal */}
        </section>

        {/* smaller banner */}
        <section className='small-banner'>
            <h2 className='small-banner-header'>Not a member? Join today!</h2>
        </section>
    </>
  )
}