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

`;

export const BannerButton = styled.button`
    text-align: center;
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: #ad600950;
    padding: 1.5rem;
`;