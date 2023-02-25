import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import region1 from '../../assets/region1.png';
import region2 from '../../assets/region2.png';
import region3 from '../../assets/region3.jpg';
import { Tabs } from '../../component-library/Tabs';
import { BannerButton, BannerWrapper, HeroImg, HeroImgStyle, HeroMessage, HeroWrapper, HomeStyle } from './styled'

const tabOptions: string[] = ['starters', 'legendaries']

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeroImgStyle>
                <HeroImg src={region2} alt='' />
                <HeroMessage onClick={() => navigate('/johto/pokemon')}>Shop Johto Region</HeroMessage>
            </HeroImgStyle>
            <HeroImgStyle>
                <HeroImg src={region1} alt='' />
                <HeroMessage onClick={() => navigate('/kanto/pokemon')}>Shop Kanto Region</HeroMessage>
            </HeroImgStyle>
            <HeroImgStyle>
                <HeroImg src={region3} alt='' />
                <HeroMessage onClick={() => navigate('/sinnoh/pokemon')}>Shop Sinnoh Region</HeroMessage>
            </HeroImgStyle>
        </>
            
    )
}

export const Banner = () => {
    return (
        <BannerButton onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2>Free Standard Shipping Over $1000</h2>
            <span>Not a member? Join today for more rewards!</span>
        </BannerButton>
    )
};

export const Home = () => {
    const [active, setActive] = useState(tabOptions[0]);
  return (
    <HomeStyle>
        <HeroWrapper>
            <Hero />
        </HeroWrapper>
        <BannerWrapper>
            <Banner />
        </BannerWrapper>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
            {/* TODO: Need to make Tabs component reuseable */}
            <Tabs tabs={tabOptions} active={active} setActive={setActive} />
        </div>
        {active === tabOptions[0] ? 
            <div>Add this later</div>
            :
            <div>Test</div>
            }
        
    </HomeStyle>
  )
}