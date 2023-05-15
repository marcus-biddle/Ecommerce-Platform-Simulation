import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Abel', sans-serif;
        font-family: 'Bebas Neue', sans-serif;
    }
`

export const HomeStyle = styled.div`
    
`;

// display: flex;
//     flex-direction: column;

//     @media only screen and (min-width: 768px) {
//         flex-direction: row;
//         height: 45vh;
//         width: 100%;
//         justify-content: space-between;
//         margin-bottom: 3rem;
//     }

export const HeroWrapper = styled.div`
    width: 100%;
    height: 650px;
    background: linear-gradient(103deg, rgba(2,0,36,1) 30%, rgb(92,66,143) 5%, rgb(92,66,143) 100%);
`;

export const NewHeroImg = styled.img`
    width: 800px;
    height: 650px;
    float: right;
`;

export const HeroText = styled.p`
    color: orange;
    font-size: 100px;
    height: 50%;
    text-align: center;
    margin-left: 7rem;
    margin-top: 2rem;
    padding-top: 12rem;
`;

export const HeroButton = styled.button`
    background: black;
    color: white;
    border-radius: 7.3px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 16.5rem;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    cursor: pointer;
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

    @media only screen and (min-width: 768px) {
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

    @media only screen and (min-width: 768px) {
        top: -13rem;
    };
`;

export const StyledImg = styled.img`
    transform: scale(.5);

    @media only screen and (min-width: 768px) {
        transform: scale(1.5);
        padding-right: 5rem;
        padding-left: 5rem;
    }
`;

export const StarterWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        justify-content: center;
        flex-direction: row;
    }
`;

export const BannerWrapper = styled.div`
    
    
    @media only screen and (min-width: 768px) {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const PokemonWrapper = styled.div`
    margin-bottom: 5rem;
    margin-top: 3.5rem;
    
    @media only screen and (min-width: 768px) {
        margin-left: 10rem;
        margin-right: 10rem;
    }
`;

export const TabWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;