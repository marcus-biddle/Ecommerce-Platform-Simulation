import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import region1 from '../../assets/region1.png';
import region2 from '../../assets/region2.png';
import region3 from '../../assets/region3.jpg';
import { Banner } from '../../component-library/Banner';
import { Tabs } from '../../component-library/Tabs';
import { bannerHeader, bannerSubheader, tabOptions } from '../../constants/info';
import { BannerWrapper, HeroImg, HeroImgStyle, HeroMessage, HeroWrapper, HomeStyle } from './styled'

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



export const Home = () => {
    const [active, setActive] = useState(tabOptions[0]);
    const bannerProps = { header: bannerHeader, subheader: bannerSubheader }
    
  return (
    <HomeStyle>
        <BannerWrapper>
            <Banner {...bannerProps} />
        </BannerWrapper>

        <HeroWrapper>
            <Hero />
        </HeroWrapper>
        
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