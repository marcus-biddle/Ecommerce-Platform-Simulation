import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import region1 from '../../assets/region1.png';
import region2 from '../../assets/region2.png';
import region3 from '../../assets/region3.jpg';
import { Banner } from '../../component-library/Banner';
import { Tabs } from '../../component-library/Tabs';
import { bannerHeader, bannerSubheader, tabOptions } from '../../constants/info';
import { STARTER_POKEMON } from '../../constants/pokemon';
import { showOnLoad } from '../../helpers/conditionals';
import { usePokemonContext } from '../../hooks';
import { BannerWrapper, HeroImg, HeroImgStyle, HeroMessage, HeroWrapper, HomeStyle, PokemonWrapper, StarterWrapper, StyledImg, TabWrapper } from './styled'

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

interface StartersProps {
    type: string;
    pokemon: any;
};

const Starters = ({type, pokemon}: StartersProps) => {
    return (
        <StarterWrapper>
            {STARTER_POKEMON.map((region: any) => {
                return (
                    type === 'Fire' ?
                    <StyledImg src={pokemon[region.fire].sprites.front_default} alt=''/>
                    : type === 'Water' ?
                    <StyledImg src={pokemon[region.water].sprites.front_default} alt=''/>
                    :
                    <StyledImg src={pokemon[region.grass].sprites.front_default} alt=''/>
                )
            })}
        </StarterWrapper>
    )
}

export const Home = () => {
    const { pokemon, isLoading } = usePokemonContext();
    const [active, setActive] = useState(tabOptions[0]);
    const tabProps = {tabs: tabOptions, active: active, setActive: setActive}
    const bannerProps = { header: bannerHeader, subheader: bannerSubheader }
    const startProps = { type: active, pokemon: pokemon }
    
  return (
    <HomeStyle>
        <BannerWrapper>
            <Banner {...bannerProps} />
        </BannerWrapper>

        <HeroWrapper>
            <Hero />
        </HeroWrapper>

        <PokemonWrapper>
            <h2>Pokemon</h2>
            <TabWrapper>
                <Tabs {...tabProps} />
            </TabWrapper>
            {showOnLoad(isLoading)('Loading')(<Starters {...startProps} />)}
        </PokemonWrapper>
    </HomeStyle>
  )
}