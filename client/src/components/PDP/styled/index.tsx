import styled from "styled-components";
import background from '../../../assets/bg.jpeg'
import { Breakpoint } from "../../../helpers/media";

export const ProductImg = styled.img`
    background-color: wheat;
    border-radius: 12px;
    opacity: .75;
    cursor: pointer;

    @media only ${Breakpoint.small} {
        
    }

    &:active {
        opacity: .75;
    }
`;

export const HeaderContainer = styled.div`
    border-bottom: thin solid grey;

    @media only ${Breakpoint.small} {
        width: 100%;
    
    line-height: 3rem;
    }
`;

export const ProductHeader = styled.div`
    font-size: 2.7rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1.233px;
`;

export const PriceStyling = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
`;

export const PDPStyling = styled.div`

    @media only ${Breakpoint.small} {
        padding-top: 3rem;
        padding-left: 11rem;
        padding-right: 11rem;
        min-height: 90vh;
    }
`;

export const PDPContainer = styled.div`

    @media only ${Breakpoint.small} {
            display: flex;
            padding-top: 1rem;
        }
`;

export const PokemonContainer = styled.div`
    padding-left: 15px;
    padding-right: 15px;

    @media only ${Breakpoint.small} {
            margin-left: 3.4rem;
            max-width: 35.75rem;
        }
`;

export const InfoContainer = styled.div`
    padding-top: 2.75rem;
    height: 20rem;
`;

export const BreadCrumb = styled.div`
    font-family: 'Abel', sans-serif;
    font-size: 1.22rem;
    opacity: 0.7
`;

export const CartButton = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 20px;
    margin-top: 5rem;
    cursor: pointer;
`;

export const MainImgSection = styled.div`
        background-image: url(${background});
        height: 400px;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 2rem;
        border-radius: 25px;
        overflow: hidden;

        @media only ${Breakpoint.small} {
            width: 400px;
            margin-left: 10rem;
        }
`;

export const MainImg = styled.img`
    height: 400px;
    width: 100%;
`;

export const SaleSticker = styled.div`
        position: absolute;
        left: 3.5rem;
        top: 7.5rem;
        font-size: 24px;
        background-color: red;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 8px;

        @media only ${Breakpoint.small} {
            left: 12rem;
        }
`;

export const ImageGallery = styled.div`
        text-align: center;
        margin-top: 5px;
        margin-right: 2rem;
        margin-left: 2rem;
        display: flex;
        justify-content: space-evenly;

        @media only ${Breakpoint.small} {
            flex-direction: column;
            margin-right: 0;
            margin-left: 0;
            padding-top: 20px;
        }
`;

export const ProductImagesWrapper = styled.div`
    @media only ${Breakpoint.small} {
        display: flex
    }
`;

export const ProductWrapper = styled.div`
    @media only ${Breakpoint.small} {
        display: flex;
        margin-bottom: 10rem;
    }
`;

export const PriceSectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 1rem;
    font-size: 24px;

    @media only ${Breakpoint.small} {
        flex-direction: row;
        margin-top: 2rem;
        margin-right: 10rem;
    }
`;

export const ProductInfo = styled.div`
    @media only ${Breakpoint.small} {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const CTAButtonWrapper = styled.div`
    height: 60px;
    margin-top: 1rem;
    cursor: pointer;

    @media only ${Breakpoint.small} {
        margin-right: 10rem;
    }
`;

export const CTAStyle = styled.div`
    height: 100%;
    background-color: orange;
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    padding-bottom: 5px;

    @media only ${Breakpoint.small} {
        margin-right: 0;
    }

    &:active {
        opacity: .75;
    }
`;

export const CTAText = styled.p`
    font-size: 24px;
    font-family: Abel, sans-serif;
    font-weight: bolder;
    color: white;
`;

export const VolumeWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: .5rem;

    @media only ${Breakpoint.small} {
        margin-left: 0;
        margin-right: 10rem;
        margin-bottom: 2rem;
    }
`;

export const VolumeButton = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 12px;
    background-color: rgb(105, 103, 103, .25);
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:active {
        opacity: .75;
    }
`;

export const VolumeStyle = styled.div`
    font-size: 30px;
    height: 40px;
    width: 40px;
    text-align: center;
`;

export const VolumeButtonText = styled.div`
    padding-top: 4px;
    font-size: 28px;
`;