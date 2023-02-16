import styled from 'styled-components';


export const HomeStyle = styled.div`

`;

// ************ Hero ***************

export const HeroWrapper = styled.div`
    background-color: #ad60099d;
    height: 76vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
`;

export const HeroInfo = styled.div`
    flex-basis: 50%;
    text-align: center;
    padding-top: 6rem;
    font-size: larger;
    h2 {
        transform: scale(1.3);
    }
    span {
        color: white;
        font-weight: lighter;
    };
    p {
        font-size: medium;
    };
    button {
        border: none;
        background-color: transparent;
        padding-top: 5rem;
        transform: scale(1.4);
    }
    button:hover {
        text-decoration-line: underline;
    }
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