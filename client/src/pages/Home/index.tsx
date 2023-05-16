
import master from '../../assets/master_ball.webp';
import center from '../../assets/poke_center.webp';
import { BsCartPlusFill } from 'react-icons/bs';

import { useWindowDemension } from '../../hooks/mobile';
import { showIfOrElseWindow } from '../../helpers/media';
import { featured, guarantees } from '../../constants/info';

import './styled/style.css';
import { 
    BrandWrapper, 
    CouponTextWrapper, 
    CouponWrapper, 
    DiscountPrice, 
    FeatureSection, 
    FeatureTitle, 
    GuaranteeItem, 
    GuaranteeItemHeader, 
    GuaranteeItemText, 
    GuaranteeWrapper, 
    HeroButton, 
    HeroText, 
    HeroWrapper, 
    HomeStyle, 
    NewHeroImg, 
    PokeImg, 
    PokeName, 
    PokePrice, 
    PokeWrapper, 
    PriceWrapper, 
    SaleStyle, 
    SubscribeTextHeader, 
    SubscriptionWrapper } from './styled';

const Hero = () => {
    return (
        <>
        <NewHeroImg src={master} alt='Master Ball'/>
        <HeroText>Gotta Catch 'Em All</HeroText>
        {/* TODO: Link button to CLP */}
        <HeroButton>Shop to become a Pokemon Master -{'>'}</HeroButton>
        </>
            
    )
}

const BrandMessage = () => {
    return (
        <>
        <p style={{ fontSize: '32px', paddingRight: '18px'}}>We provide the best <br/>quality pokemon for your adeventure.</p>
        <div style={{ borderLeft: 'solid', textAlign: 'center', padding: '46px' }}>
            <p style={{ opacity: '.8', color: 'grey'}}>We ensure customers are fully prepared for their experience in the wild.</p>
        </div>
        </>
    )
}

const GuaranteeMessage = () =>  {
    return (
        <>
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
        </>
    )
}

const FeaturedPokemon = () => {
    return (
        <>
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
        </>
    )
}

const Coupon = () => {
    return (
        <>
            <img src={center} alt='Pokemon Center Coupon' style={{ position: 'absolute', height: '600px', width: '600px', objectFit: 'cover', opacity: '.8'}}/>
            <CouponTextWrapper>
                {/* TODO: create a function and pass in props to simplify this */}
            {showIfOrElseWindow(useWindowDemension())(
                (<>
                    <p style={{ color: 'grey', fontSize: '24px'}}>Limited Offer</p>
                    <span style={{ fontSize: '45px'}}>Get 35% off only this Friday <br/>and get a special gift</span>
                    <div style={{ padding: '15px', backgroundColor: 'white', color: 'black', width: '10rem', textAlign: 'center', fontSize: '18px', borderRadius: '14px', marginTop: '4rem'}}>
                        Grab it now -{'>'}
                    </div>
                </>
                ))
                ((<>
                    <p style={{ color: 'gold', fontSize: '24px'}}>Limited Offer</p>
                    <span style={{ fontSize: '45px'}}>Get 35% off today</span>
                    <div style={{ padding: '15px', backgroundColor: 'white', color: 'black', width: '10rem', textAlign: 'center', fontSize: '18px', borderRadius: '14px', marginTop: '8rem', marginLeft: '1.5rem'}}>
                        Grab it now -{'>'}
                    </div>
                </>))}
            </CouponTextWrapper>
        </>
    )
}

const Subscribe = () => {
    return (
        <>
            <SubscribeTextHeader>Subscribe to our newsletter to get updates <br/> to our latest collections</SubscribeTextHeader>
            <p style={{ opacity: '.5', fontWeight: 'bold'}}>Get 20% off on your first order just by subscribing to our newsletter</p>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <input type='text' placeholder='Enter your email' style={{ width: '24rem', paddingLeft: '16px', fontSize: '18px'}}/>
                <div style={{ color: 'white', backgroundColor: 'rgba(2,0,36,1)', padding: '18px', marginLeft: '8px', borderRadius: '8px'}}>Subscribe</div>
            </div>
            <div style={{ color: 'grey', fontSize: '12px', lineHeight: '4px'}}>
                <p>You will be able to unsubscribe at any time.</p>
                <p>Read our Privacy Policy <strong style={{ textDecorationLine: 'underline', color: 'black', cursor: 'pointer'}}>here</strong></p>
            </div>
        </>
    )
}

export const Home = () => {    
  return (
    <HomeStyle>
        <HeroWrapper>
            <Hero />
        </HeroWrapper>

        <BrandWrapper>
            <BrandMessage />
        </BrandWrapper>

        <GuaranteeWrapper>
            <GuaranteeMessage />
        </GuaranteeWrapper>

        <FeatureSection>
            <FeaturedPokemon />
        </FeatureSection>

        <CouponWrapper>
            <Coupon />
        </CouponWrapper>

        <SubscriptionWrapper>
            <Subscribe />
        </SubscriptionWrapper>
    </HomeStyle>
  )
}