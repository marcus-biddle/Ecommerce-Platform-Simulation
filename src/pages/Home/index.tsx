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
import { BannerWrapper, BrandWrapper, DiscountPrice, FeatureSection, FeatureTitle, GuaranteeItem, GuaranteeItemHeader, GuaranteeItemText, GuaranteeWrapper, HeroButton, HeroImg, HeroImgStyle, HeroMessage, HeroText, HeroWrapper, HomeStyle, NewHeroImg, PokeImg, PokeName, PokePrice, PokeWrapper, PokemonWrapper, PriceWrapper, SaleStyle, StarterWrapper, StyledImg, TabWrapper } from './styled'
import './styled/style.css'

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div>
        <NewHeroImg src={master} alt='Master Ball'/>
        <HeroText>Gotta Catch 'Em All</HeroText>
        <HeroButton>Shop to become a Pokemon Master -{'>'}</HeroButton>
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

        <HeroWrapper>
            <Hero />
        </HeroWrapper>

        <BrandWrapper>
            <p style={{ fontSize: '32px'}}>We provide the best <br/>quality pokemon for your adeventure.</p>
            <div style={{ borderLeft: 'solid', textAlign: 'center', padding: '46px' }}>
                <p style={{ opacity: '.8', color: 'grey'}}>We ensure customers are fully prepared for their experience in the wild.</p>
            </div>
        </BrandWrapper>

        <GuaranteeWrapper>
            {guarantees.map((item) => {
                const Icon = item.icon;
                return (
                    <GuaranteeItem>
                        <div className='icon-wrapper'>
                            <Icon className='icon-css'/>
                        </div>
                        <GuaranteeItemHeader style={{ paddingTop: '16px'}}>{item.title}</GuaranteeItemHeader>
                        <GuaranteeItemText>{item.statement}</GuaranteeItemText>
                    </GuaranteeItem>
                )
            })}
        </GuaranteeWrapper>

        <FeatureSection>
            <FeatureTitle>Featured Pokemon</FeatureTitle>
            <PokeWrapper>
                {featured.map((pokemon) => {
                    return (
                        <div>
                            {pokemon.sale 
                            ? 
                            <SaleStyle>
                                SALE
                            </SaleStyle>
                            :
                            ''
                            }
                            <PokeImg src={pokemon.img} alt={pokemon.name}/>
                            <div style={{ display: 'flex',  justifyContent: 'space-between', marginRight: '2.75rem'}}>
                                <div>
                                <PokeName>{pokemon.name}</PokeName>
                                <PriceWrapper>
                                    <div>
                                        {pokemon.sale 
                                        ?
                                        <>
                                        <PokePrice>{`$${pokemon.price - pokemon.price * .15}`}</PokePrice>
                                        <DiscountPrice>${pokemon.price}</DiscountPrice>
                                        </>
                                        :
                                        <PokePrice>${pokemon.price}</PokePrice>
                                        }
                                    </div>
                                    {/* Add Links */}
                                    
                                </PriceWrapper>
                                </div>
                                <div className='cta-wrapper'>
                                    <BsCartPlusFill className='icon-CTA'/>
                                </div>
                            </div>
                            
                            
                        </div>
                    )
                })}
            </PokeWrapper>
        </FeatureSection>

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
    </HomeStyle>
  )
}