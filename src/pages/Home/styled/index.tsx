import styled from 'styled-components';


export const HomeStyle = styled.div`

`;

// ************ Hero ***************

export const HeroWrapper = styled.div`
    background-color: rgba(11, 97, 147, 0.4);
    height: 76vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
`;

export const HeroInfo = styled.div`
    flex-basis: 50%;
    text-align: center;
    padding-top: 12rem;
    font-size: larger;
    h2 {
        font-family: "Lucida Console", "Courier New", monospace;
    };
    span {
        font-weight: 600;
        color: red;
    };
    p {
        font-weight: 500;
        font-size: 1.05rem;
    };
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

export const HeroImage = styled.img`
    height: 76vh;
`;

export const HeroImageWrapper = styled.div`
    width: fit-content;
    flex-basis: 50%;
`;

// ************ Trending ***************
export const TrendingWrapper = styled.div`

`;

export const ImgCover = styled.img`
    height: 10rem;
    margin-right: auto;
    margin-left: auto;
    border-radius: 25px;
    transition: transform 5s ease-in;
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
    transition: transform 5s ease-in;
    opacity: 0;

    &:hover {
        opacity: 1;
        background-color: white;
    }
`;

export const PokeImg = styled.div`
    position: absolute;
    top: 50rem;
    left: 2rem;
`;

// ************ Banner ***************
export const BannerWrapper = styled.div`

`;

export const BannerButton = styled.button`
    text-align: center;
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: #ad600950;
    padding: 1.5rem;
`;