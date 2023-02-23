import styled from 'styled-components';


export const HomeStyle = styled.div`

`;

// ************ Hero ***************

export const HeroWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    height: 86vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
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
    background-color: grey;
    width: 27rem; 
    border: solid;
    button {
        opacity: .75;
    }
`;

export const HeroImg = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: fill;
    position: relative;
    z-index: 2;
`;

export const HeroMessage = styled.button`
    position: relative;
    background-color: white;
    z-index: 3;
    top: -10rem;
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
    }
`;

// ************ Trending ***************
export const TrendingWrapper = styled.div`
    margin-bottom: 12rem;
`;

export const ImgCover = styled.img`
    position: absolute;
    padding-left: 8.4rem;

    height: 10rem;
    margin-right: auto;
    margin-left: auto;
    border-radius: 25px;
    transition: 5s ease-out;
    &:hover {
        opacity: 0;
    }
`;

export const ImgContainer = styled.div`
    padding: 10px
`;

export const StyledImg = styled.img`
padding-left: 9px;
    transform: scale(1.7);
    transition: 1s ease-in;
    opacity: 0;

    &:hover {
        opacity: 1;
        background-color: white;
    }
`;

export const PokeImg = styled.div`
    position: float;
    float: left;
    padding-left: 10rem;
    padding-top: 1.5rem;
    cursor: pointer;
`;

// ************ Banner ***************
export const BannerWrapper = styled.div`
    margin-left: 10rem;
    margin-right: 10rem;
    
`;

export const BannerButton = styled.button`
    text-align: center;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: rgba(205, 77, 8, 0.766);
    padding: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
`;