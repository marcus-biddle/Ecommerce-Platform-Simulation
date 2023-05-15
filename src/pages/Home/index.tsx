import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import master from '../../assets/master_ball.webp';
import center from '../../assets/poke_center.webp';
import { Tabs } from '../../component-library/Tabs';
import { bannerHeader, bannerSubheader, featured, guarantees, tabOptions } from '../../constants/info';
import { STARTER_POKEMON } from '../../constants/pokemon';
import { showOnLoad } from '../../helpers/conditionals';
import { usePokemonContext } from '../../hooks';
import { BsCartPlusFill } from 'react-icons/bs';
import { BannerWrapper, HeroButton, HeroImg, HeroImgStyle, HeroMessage, HeroText, HeroWrapper, HomeStyle, NewHeroImg, PokemonWrapper, StarterWrapper, StyledImg, TabWrapper } from './styled'

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div>
        <NewHeroImg src={master} alt='Master Ball'/>
        <HeroText>Gotta Catch 'Em All</HeroText>
        <HeroButton>Shop to become a Pokemon Master -{'>'}</HeroButton>
            {/* <HeroImgStyle>
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
            </HeroImgStyle> */}
        </div>
            
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
        {/* <BannerWrapper>
            <Banner {...bannerProps} />
        </BannerWrapper> */}

        <HeroWrapper>
            <Hero />
        </HeroWrapper>

        <div style={{ marginLeft: '10rem', marginRight: '10rem', marginTop: '4rem', display: 'flex', justifyContent: 'space-between'}}>
          <p style={{ fontSize: '32px'}}>We provide the best <br/>quality pokemon for your adeventure.</p>
          <div style={{ borderLeft: 'solid', textAlign: 'center', padding: '46px' }}>
          <p style={{ opacity: '.8', color: 'grey'}}>We ensure customers are fully prepared for their experience in the wild.</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4rem'}}>
            {guarantees.map((item) => {
                const Icon = item.icon;
                return (
                    <div style={{ width: '15rem'}}>
                        <div style={{ backgroundColor: 'black', height: '30px', width: '30px', textAlign: 'center', padding: '10px', borderRadius: '10px'}}>
                            <Icon style={{ height: '30px', width: '30px', color: 'white'}}/>
                        </div>
                        <div style={{ paddingTop: '16px'}}>{item.title}</div>
                        <p style={{ fontSize: '12px', fontFamily: 'Abel, sans-serif'}}>{item.statement}</p>
                    </div>
                )
            })}
        </div>

        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <div style={{ marginLeft: '4rem', marginRight: '4rem', fontSize: '32px', marginBottom: '2rem'}}>Featured Pokemon</div>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                {featured.map((pokemon) => {
                    return (
                        <div>
                            <div>{pokemon.sale 
                            ? 
                            <div style={{ position: 'absolute', fontSize: '20px', color: 'white', letterSpacing: '2px',backgroundColor: 'red', marginLeft: '16px', marginTop: '16px', paddingLeft: '4px', paddingRight: '4px', borderRadius: '6px'}}>
                                SALE
                            </div>
                            :
                            ''
                            }</div>
                            <img src={pokemon.img} alt={pokemon.name} style={{ height: '25rem', width: '23rem', borderRadius: '20px'}}/>
                            <div style={{ fontSize: '24px', paddingTop: '10px', letterSpacing: '1.2px', opacity: '.6'}}>{pokemon.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                {pokemon.sale 
                                ?
                                <>
                                <span style={{ fontSize: '36px'}}>{`$${pokemon.price - pokemon.price * .15}`}</span>
                                <span style={{ paddingLeft: '5px', fontSize: '26px', textDecorationLine: 'line-through', opacity: '.5'}}>${pokemon.price}</span>
                                </>
                                :
                                <span style={{ fontSize: '36px'}}>${pokemon.price}</span>
                                }
                                </div>
                                {/* Add Links */}
                                <div style={{ backgroundColor: 'rgba(2,0,36,1)', height: '40px', width: '46px', textAlign: 'center', borderRadius: '10px', cursor: 'pointer'}}>
                                    <BsCartPlusFill style={{ height: '24px', width: '24px', paddingTop: '8px', paddingBottom: '5px', color: 'wheat'}}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div style={{ position: 'relative', backgroundColor: 'black', height: '380px', marginLeft: '4rem', marginRight: '4rem', overflow: 'hidden', display: 'flex', alignItems: 'center', borderRadius: '16px', marginBottom: '4rem'}}>
            <img src={center} alt='Pokemon Center Coupon' style={{ position: 'absolute', height: '600px', width: '600px', objectFit: 'cover'}}/>
            <div style={{position: 'absolute', right: '14rem', bottom: '3rem', color: 'white'}}>
                <p style={{ color: 'grey', fontSize: '24px'}}>Limited Offer</p>
                <span style={{ fontSize: '45px'}}>Get 35% off only this Friday <br/>and get a special gift</span>
                <div style={{ padding: '15px', backgroundColor: 'white', color: 'black', width: '10rem', textAlign: 'center', fontSize: '18px', borderRadius: '14px', marginTop: '4rem'}}>
                    Grab it now -{'>'}
                </div>
            </div>
        </div>

        <div style={{ textAlign: 'center', fontFamily: 'Abel, sans-serif', marginBottom: '4rem'}}>
            <p style={{ fontSize: '32px', fontWeight: 'bolder'}}>Subscribe to our newsletter to get updates <br/> to our latest collections</p>
            <p style={{ opacity: '.5', fontWeight: 'bold'}}>Get 20% off on your first order just by subscribing to our newsletter</p>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <input type='text' placeholder='Enter your email' style={{ width: '24rem', paddingLeft: '16px', fontSize: '18px'}}/>
                <div style={{ color: 'white', backgroundColor: 'rgba(2,0,36,1)', padding: '18px', marginLeft: '8px', borderRadius: '8px'}}>Subscribe</div>
            </div>
            <div style={{ color: 'grey', fontSize: '12px', lineHeight: '4px'}}>
                <p>You will be able to unsubscribe at any time.</p>
                <p>Read our Privacy Policy <strong style={{ textDecorationLine: 'underline', color: 'black', cursor: 'pointer'}}>here</strong></p>
            </div>
            
        </div>

        {/* <PokemonWrapper>
            <h2>Pokemon</h2>
            <TabWrapper>
                <Tabs {...tabProps} />
            </TabWrapper>
            {showOnLoad(isLoading)('Loading')(<Starters {...startProps} />)}
        </PokemonWrapper> */}
    </HomeStyle>
  )
}