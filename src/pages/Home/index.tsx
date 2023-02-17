import React from 'react'
import pic from '../../constants/images/traveler.jpg'
import { BannerButton, BannerWrapper, HeroImage, HeroImageWrapper, HeroInfo, HeroWrapper, HomeStyle, TrendingWrapper } from './styled'


const Hero = () => {
    const handleClick = () => {
        alert('You pressed a button! The developer has not made a landing page for this button yet. Whoops...')
    }

    return (
        <>
            <HeroImageWrapper>
                <HeroImage src={pic} alt={''} />
            </HeroImageWrapper>
            <HeroInfo>
                <h2>Get ready for <span>WINTER</span></h2>

                <p>Affordable design for any occasion.</p>
                <button onClick={(e) => handleClick()}>Shop Now</button>
            </HeroInfo>
        </>
            
    )
}

const Banner = () => {
    return (
        <BannerButton onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2 >Free Standard Shipping Over $30 for Members</h2>
            <span>Not a member? Join Today!</span>
        </BannerButton>
        // <button className='small-banner' onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
        //     
        // </button>
    )
};

export const Home = () => {

    
  return (
    <HomeStyle>
        <HeroWrapper>
            <Hero />
        </HeroWrapper>

        <TrendingWrapper>
            <h2 style={{ paddingLeft: '18px'}}>Trending Items</h2>

        </TrendingWrapper>
        
        <BannerWrapper>
            <Banner />
        </BannerWrapper>
        {/* <div>
        <section>
            <h2 style={{ paddingLeft: '18px'}}>Trending Items</h2>
            <Trending /> */}

            {/* Carousal */}
        {/* </section> */}

        {/* smaller banner */}
        {/* <button className='small-banner' onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2 >Free Standard Shipping Over $30 for Members</h2>
            <span>Not a member? Join Today!</span>
        </button>
        </div> */}
        {/* Top Items */}
        
    </HomeStyle>
  )
}