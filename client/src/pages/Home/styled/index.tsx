import styled, { createGlobalStyle } from 'styled-components';
import { Breakpoint } from '../../../helpers/media';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Abel, sans-serif;
        font-family: Bebas Neue, sans-serif;
    }
`

export const HomeStyle = styled.div`
    position: relative;
    bottom: 60px;

    @media only ${Breakpoint.small} {
        bottom: 30px;
    }
`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 650px;
    background: linear-gradient(55deg, rgba(2,0,36,1) 30%, rgb(92,66,143) 5%, rgb(92,66,143) 100%);

    @media only ${Breakpoint.small} {
        background: linear-gradient(103deg, rgba(2,0,36,1) 30%, rgb(92,66,143) 5%, rgb(92,66,143) 100%);
    }
`;

export const NewHeroImg = styled.img`
    width: 100%;
    float: right;

    @media only ${Breakpoint.small} {
        width: 800px;
        height: 650px;
    }
`;

export const HeroText = styled.p`
    color: orange;
    font-size: 80px;
    height: 50%;
    text-align: center;

    @media only ${Breakpoint.small} {
        margin-left: 7rem;
        margin-top: 2rem;
        padding-top: 8rem;
        font-size: 100px;
    }
`;

export const HeroButton = styled.button`
    position: absolute;
    background-color: black;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 20px;
    margin-top: 5rem;
    cursor: pointer;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    left: 2rem;

    @media only ${Breakpoint.small} {
        margin-top: 0;
        
        top: 30rem; 
        left: 12rem;
        font-size: 30px;
    }
`;

export const HomeButton = styled.div`
    background-color: black;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 20px;
    margin-top: 2.5rem;
    margin-left: 4rem;
    margin-right: 4rem;
    cursor: pointer;
`;

export const HeroImgStyle = styled.div`
    height: 30vh;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: solid;
    button {
        opacity: .85;
    }

    @media only ${Breakpoint.small} {
        height: 45vh;
        width: 27rem; 
        
    }
`;

export const HeroImg = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
    position: relative;
    z-index: -1;
`;

export const HeroMessage = styled.button`
    position: relative;
    z-index: 1;
    background-color: white;
    top: -9rem;
    width: 75%;
    background-color: black;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    margin-left: 3.35rem;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        opacity: 1;
    };

    @media only ${Breakpoint.small} {
        top: -13rem;
    };
`;

export const StyledImg = styled.img`
    transform: scale(.5);

    @media only ${Breakpoint.small} {
        transform: scale(1.5);
        padding-right: 5rem;
        padding-left: 5rem;
    }
`;

export const StarterWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only ${Breakpoint.small} {
        justify-content: center;
        flex-direction: row;
    }
`;

export const BannerWrapper = styled.div`
    
    
    @media only ${Breakpoint.small} {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const PokemonWrapper = styled.div`
    margin-bottom: 5rem;
    margin-top: 3.5rem;
    
    @media only ${Breakpoint.small} {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const TabWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;

export const BrandWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-left: 4rem;
    margin-right: 5rem;

    @media only ${Breakpoint.small} {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const GuaranteeWrapper = styled.div`
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 4rem;

    @media only ${Breakpoint.small} {
        display: flex;
        justify-content: space-between;
    }
`;

export const GuaranteeItem = styled.div`
    width: 15rem;
    margin-bottom: 3rem;

    @media only ${Breakpoint.small} {
        margin-bottom: 0;
    }
`;

export const GuaranteeItemHeader = styled.div`
    padding-top: 16px;
    font-size: 30px;

    @media only ${Breakpoint.small} {
        font-size: 16px;
    }
`;

export const GuaranteeItemText = styled.p`
    font-family: Abel, sans-serif;
    font-size: 18px;

    @media only ${Breakpoint.small} {
        font-size: 12px;
    }
`;

export const FeatureSection = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

export const FeatureTitle = styled.div`
    font-size: 40px;
    margin-left: 2rem;

    @media only ${Breakpoint.small} {
        margin-left: 4rem;
        margin-right: 4rem;
        margin-bottom: 2rem;
        font-size: 32px;
    }
`;

export const PokeWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only ${Breakpoint.small} {
        justify-content: space-between;
        flex-direction: row;
        margin-left: 4rem;
        margin-right: 4rem;
    }
`;

export const PokeImg = styled.img`
    height: 22rem;
    width: 20rem;
    border-radius: 20px;
    margin-left: 2rem;
    margin-top: 2rem;
    cursor: pointer;

    @media only ${Breakpoint.small} {
        justify-content: space-between;
        height: 25rem;
        width: 23rem;
    }
`;

export const SaleStyle = styled.div`
    position: absolute;
    font-size: 20px;
    color: white;
    letter-spacing: 2px;
    background-color: red;
    margin-left: 45px;
    margin-top: 45px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 6px;

    @media only ${Breakpoint.small} {
        margin-left: 3rem;
    }
`;

export const PokeName = styled.div`
    padding-top: 10px;
    letter-spacing: 1.2px;
    opacity: .6;
    font-size: 28px;
    margin-left: 2rem;

    @media only ${Breakpoint.small} {
        font-size: 24px
    }
`;

export const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;

    @media only ${Breakpoint.small} {
        
    }
`;

export const PokePrice = styled.span`
    font-size: 36px;
`;

export const DiscountPrice = styled.span`
    padding-left: 5px;
    font-size: 26px;
    text-decoration-line: line-through;
    opacity: .5;
`;

export const CouponWrapper = styled.div`
    position: relative;
    background-color: black;
    height: 380px;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom:4rem;
    overflow: hidden;
    display flex;
    align-items: center;
    border-radius: 16px;

    @media only ${Breakpoint.small} {
        
    }
`;

export const CouponTextWrapper = styled.div`
    position: absolute;
    top: .1rem;
    color: black;
    padding-left: 16px;

    @media only ${Breakpoint.small} {
        right: 14rem;
        bottom: 3rem;
        color: white;
    }
`;

export const SubscribeTextHeader = styled.p`
font-weight: bolder;
font-size: 28px;
margin-left: 1rem;
margin-right: 1rem;

@media only ${Breakpoint.small} {
    font-size: 32px;
}
`;

export const SubscriptionWrapper = styled.div`
    text-align: center;
    font-family: Abel, sans-serif;
    margin-bottom: 4rem;
`;

export const IconWrapper = styled.div`
    background-color: rgba(2,0,36,1);
    height: 55px;
    width: 55px;
    text-align: center;
    border-radius: 10px;
    margin-top: 21px;

    @media only ${Breakpoint.small} {
        height: 40px;
        width: 46px;
    }
`;