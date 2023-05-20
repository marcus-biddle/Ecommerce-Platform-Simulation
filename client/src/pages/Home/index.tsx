
import master from '../../assets/master_ball.webp';
import center from '../../assets/poke_center.webp';
import { BsCartPlusFill } from 'react-icons/bs';
import { useWindowDemension } from '../../hooks/mobile';
import { Breakpoint, showIfOrElseWindow } from '../../helpers/media';
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
    IconWrapper, 
    NewHeroImg, 
    PokeImg, 
    PokeName, 
    PokePrice, 
    PokeWrapper, 
    PriceWrapper, 
    SaleStyle, 
    SubscribeTextHeader, 
    SubscriptionWrapper } from './styled';
import styled from 'styled-components';
import { FEATURED_POKEMON, FeatureProps, GAURANTEES, GauranteeProps } from '../../constants/content';
import { Link } from 'react-router-dom';


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
            {GAURANTEES.map((item: GauranteeProps) => {
                const Icon = item.icon;
                const GuarenteeIcon = styled(Icon)`
                height: 40px;
                width: 40px;
                padding-top: 8px;
                padding-bottom: 5px;
                color: wheat;

                @media only ${Breakpoint.small} {
                    height: 24px;
                    width: 24px;
                }
                `;
                return (
                    <GuaranteeItem>
                        <IconWrapper>
                            <GuarenteeIcon />
                        </IconWrapper>
                        <GuaranteeItemHeader style={{ paddingTop: '16px'}}>{item.title}</GuaranteeItemHeader>
                        <GuaranteeItemText>{item.statement}</GuaranteeItemText>
                    </GuaranteeItem>
                )
            })}
        </>
    )
}

const FeaturedPokemon = () => {
    const CTAButton = styled(BsCartPlusFill)`
    height: 40px;
    width: 40px;
    padding-top: 8px;
    padding-bottom: 5px;
    color: wheat;

    @media only ${Breakpoint.small} {
        height: 24px;
        width: 24px;
    }
    `;
    return (
        <>
            <FeatureTitle>Featured Pokemon</FeatureTitle>
            <PokeWrapper>
                {FEATURED_POKEMON.map((feature: FeatureProps) => {
                    return (
                        <div>
                            {feature.sale 
                            ? 
                            <SaleStyle>
                                SALE
                            </SaleStyle>
                            :
                            ''
                            }
                            <Link to={feature.path}>
                            <PokeImg src={feature.img} alt={feature.name}/>
                            </Link>
                            
                            <div style={{ display: 'flex',  justifyContent: 'space-between', marginRight: '2.75rem'}}>
                                <div>
                                <PokeName>{feature.name}</PokeName>
                                <PriceWrapper>
                                    <div>
                                        {feature.sale 
                                        ?
                                        <>
                                        <PokePrice>{`$${feature.price - feature.price * .15}`}</PokePrice>
                                        <DiscountPrice>${feature.price}</DiscountPrice>
                                        </>
                                        :
                                        <PokePrice>${feature.price}</PokePrice>
                                        }
                                    </div>
                                    {/* Add Links */}
                                </PriceWrapper>
                                </div>
                                <IconWrapper>
                                    <CTAButton />
                                </IconWrapper>
                            </div>
                        </div>
                    )
                })}
            </PokeWrapper>
        </>
    )
}

export const Coupon = () => {
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
                    <div style={{ padding: '15px', backgroundColor: 'white', color: 'black', width: '10rem', textAlign: 'center', fontSize: '18px', borderRadius: '14px', marginTop: '7rem', marginLeft: '.9rem'}}>
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
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
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